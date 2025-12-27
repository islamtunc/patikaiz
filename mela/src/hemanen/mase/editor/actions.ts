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
  content: string;
  mediaIds: string[];
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  // create the post without nested "attachments" write to satisfy Prisma types
  const newPost = await prisma.mase.create({
    data: {
      content,
      userId: user.id,
    },
    include: getMaseInclude(user.id),
  });

  // TODO: attach media to the post according to your Prisma schema.
  // Example approaches (pick/adjust to your schema):
  // 1) If Media has a foreign key field `maseId`:
  // await prisma.media.updateMany({ where: { id: { in: mediaIds } }, data: { maseId: newPost.id } });
  //
  // 2) If relation is many-to-many and you need to connect via nested writes:
  // await prisma.mase.update({ where: { id: newPost.id }, data: { media: { connect: mediaIds.map(id => ({ id })) } } });
  //
  // Adjust the code above to match your actual model/field names.

  return newPost;
}