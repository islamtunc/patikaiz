// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin 
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
"use server";

import { validateRequest } from "@/auth";
import prisma from "@/pirtukxane/prisma";
import { getTnDataInclude } from "@/pirtukxane/types";
import { createPostSchema } from "@/pirtukxane/validation";

export async function submitPost(input: {
  content: string[];
  mediaIds: string[];
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  // derive a name/title for the tn (Prisma requires `name` on create)
  const name = content && content.length > 0
    ? content.join(" ").slice(0, 255)
    : "";

  // create the tn first (omit relation fields that Prisma create input may not accept)
  const created = await prisma.tn.create({
    data: {
      content,
      name,
      userId: user.id,
    },
  });

  // attach media by updating Media rows to reference this tn
  if (Array.isArray(mediaIds) && mediaIds.length > 0) {
    await prisma.media.updateMany({
      where: { id: { in: mediaIds } },
      data: { tnId: created.id },
    });
  }

  const newPost = await prisma.tn.findUnique({
    where: { id: created.id },
    include: getTnDataInclude(user.id),
  });

  if (!newPost) throw new Error("Failed to load created post");

  return newPost;
}
