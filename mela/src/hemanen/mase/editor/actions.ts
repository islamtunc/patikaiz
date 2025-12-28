// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin 
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
"use server";

import { validateRequest } from "@/auth";
import prisma from "@/pirtukxane/prisma";
import { getMaseInclude } from "@/pirtukxane/types";
import { createPostSchema } from "@/pirtukxane/validation";

export async function submitPost(input: {
  content: string[];
  mediaIds: string[];
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  // create the post without nested relation write (keeps Prisma types happy)
  const newPost = await prisma.mase.create({
    data: {
      content, // DİZİ OLARAK GÖNDER
      userId: user.id,
      // attachments field removed to satisfy Prisma generated types
    },
    include: getMaseInclude(user.id),
  });

  // TODO: attach media to the post according to your Prisma schema.
  // Example options (uncomment and adjust to match your schema):
  // 1) If Media has a foreign key `maseId`:
  // await prisma.media.updateMany({ where: { id: { in: mediaIds } }, data: { maseId: newPost.id } });
  //
  // 2) If relation field on Mase is named `media` (many-to-many):
  // await prisma.mase.update({
  //   where: { id: newPost.id },
  //   data: { media: { connect: mediaIds.map(id => ({ id })) } },
  // });

  return newPost;
}