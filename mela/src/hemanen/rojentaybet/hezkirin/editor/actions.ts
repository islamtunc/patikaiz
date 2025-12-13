// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin 
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
"use server";

import { validateRequest } from "@/auth";
import prisma from "@/pirtukxane/prisma";
import { getHezkirinDataInclude } from "@/pirtukxane/types";
import { createPostSchema } from "@/pirtukxane/validation";

export async function submitPost(input: {
  content: string[];
  mediaIds: string[];
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  // derive a required name from content (Prisma requires name)
  const name =
    Array.isArray(content) && content.length > 0 && content[0].trim()
      ? content[0].trim().slice(0, 200)
      : (Array.isArray(content) ? content.join(" ").slice(0, 200) : "Untitled");

   // create the post first (don't include relations that Prisma's create input may not accept)
   const created = await prisma.hezkirin.create({
     data: {
      name,
       content,
       userId: user.id,
     },
   });

  // attach media by updating Media rows to point to this hezkirin
  if (Array.isArray(mediaIds) && mediaIds.length > 0) {
    await prisma.media.updateMany({
      where: { id: { in: mediaIds } },
      // Replace `postId` with the actual FK field from your prisma schema (e.g. `postId`, `dayikId`, `bavId`, ...)
      data: { postId: created.id },
    });
  }

  const newPost = await prisma.hezkirin.findUnique({
    where: { id: created.id },
    include: getHezkirinDataInclude(user.id),
  });

  if (!newPost) throw new Error("Failed to load created post");

  return newPost;
}
