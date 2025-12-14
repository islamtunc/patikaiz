// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin 
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
"use server";

import { validateRequest } from "@/auth";
import prisma from "@/pirtukxane/prisma";
import { getStenbolDataInclude } from "@/pirtukxane/types";
import { createPostSchema } from "@/pirtukxane/validation";

export async function submitPost(input: {
  content: string[];
  mediaIds: string[];
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  // create the post first (omit relations that Prisma's create input may not accept)
  const created = await prisma.stenbol.create({
    data: {
      content,
      userId: user.id,
    },
  });

  // attach media by updating Media rows to reference this stenbl
  if (Array.isArray(mediaIds) && mediaIds.length > 0) {
    await prisma.media.updateMany({
      where: { id: { in: mediaIds } },
      data: { stenbolId: created.id },
    });
  }

  const newPost = await prisma.stenbol.findUnique({
    where: { id: created.id },
    include: getStenbolDataInclude(user.id),
  });

  if (!newPost) throw new Error("Failed to load created post");

  return newPost;
}
