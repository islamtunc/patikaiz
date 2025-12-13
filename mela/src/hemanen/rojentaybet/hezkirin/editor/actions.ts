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

  // create the post first (don't include relations that Prisma's create input may not accept)
  const created = await prisma.hezkirin.create({
    data: {
      content,
      userId: user.id,
    },
  });

  // attach media by updating Media rows to point to this hezkirin
  if (Array.isArray(mediaIds) && mediaIds.length > 0) {
    await prisma.media.updateMany({
      where: { id: { in: mediaIds } },
      data: { hezkirinId: created.id },
    });
  }

  const newPost = await prisma.hezkirin.findUnique({
    where: { id: created.id },
    include: getHezkirinDataInclude(user.id),
  });

  if (!newPost) throw new Error("Failed to load created post");

  return newPost;
}
