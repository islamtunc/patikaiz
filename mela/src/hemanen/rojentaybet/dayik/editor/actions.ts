// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin 
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
"use server";

import { validateRequest } from "@/auth";
import prisma from "@/pirtukxane/prisma";
import { getDayikDataInclude } from "@/pirtukxane/types";
import { createPostSchema } from "@/pirtukxane/validation";

export async function submitPost(input: {
  content: string[];
  mediaIds: string[];
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  // Create the post first (don't include relations that Prisma's create input doesn't accept)
  const created = await prisma.dayik.create({
    data: {
      content,
      userId: user.id,
    },
  });

  // Attach media by updating Media rows to point to this dayik
  if (Array.isArray(mediaIds) && mediaIds.length > 0) {
    await prisma.media.updateMany({
      where: { id: { in: mediaIds } },
      data: { dayikId: created.id },
    });
  }

  const newPost = await prisma.dayik.findUnique({
    where: { id: created.id },
    include: getDayikDataInclude(user.id),
  });

  return newPost;
}
