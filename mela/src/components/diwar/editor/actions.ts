// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin 
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
"use server";

import { validateRequest } from "@/auth";
import prisma from "@/pirtukxane/prisma";
import { getDiwarDataInclude } from "@/pirtukxane/types";
import { createPostSchema } from "@/pirtukxane/validation";

export async function submitPost(input: {
  content: string[];
  mediaIds: string[];
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  // derive a title from content (first line) to satisfy Prisma required field
  const title =
    Array.isArray(content) && content.length > 0 && content[0].trim()
      ? content[0].trim().slice(0, 200)
      : content.join(" ").slice(0, 200) || "Untitled";

  // Create the post first (without attachments)
  const created = await prisma.diwar.create({
    data: {
      title,
      content,
      userId: user.id,
    },
  });

  // attach media by updating the Media rows to point to this diwar
  if (Array.isArray(mediaIds) && mediaIds.length > 0) {
    await prisma.media.updateMany({
      where: { id: { in: mediaIds } },
      data: { diwarId: created.id },
    });
  }

  // Return the post including relation data
  const newPost = await prisma.diwar.findUnique({
    where: { id: created.id },
    include: getDiwarDataInclude(user.id),
  });

  if (!newPost) throw new Error("Failed to load created post");

  return newPost;
}
