// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin 
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
"use server";

import { validateRequest } from "@/auth";
import prisma from "@/pirtukxane/prisma";
import { getRengDataInclude } from "@/pirtukxane/types";
import { createPostSchema } from "@/pirtukxane/validation";

export async function submitPost(input: {
  content: string[];
  mediaIds: string[];
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  // derive required fields
  const name =
    Array.isArray(content) && content.length > 0 && content[0].trim()
      ? content[0].trim().slice(0, 200)
      : (Array.isArray(content) ? content.join(" ").slice(0, 200) : "Untitled");

  // fallback color (Prisma requires color). Change if you want a different default.
  const color = "#000000";

   // create the reng first (omit relations that Prisma's create input may not accept)
   const created = await prisma.reng.create({
     data: {
      name,
      color,
      content,
      userId: user.id,
     },
   });

  // attach media by updating Media rows to reference this reng
  if (Array.isArray(mediaIds) && mediaIds.length > 0) {
    await prisma.media.updateMany({
      where: { id: { in: mediaIds } },
      data: { rengId: created.id },
    });
  }

  const newPost = await prisma.reng.findUnique({
    where: { id: created.id },
    include: getRengDataInclude(user.id),
  });

  if (!newPost) throw new Error("Failed to load created post");

  return newPost;
}
