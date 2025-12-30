// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber

"use server"
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

  const newPost = await prisma.mase.create({
    data: {
      content, // DİZİ OLARAK GÖNDER
      userId: user.id,
      // use the actual relation field name (media) and only connect when ids exist
      media: mediaIds && mediaIds.length
        ? { connect: mediaIds.map((id) => ({ id })) }
        : undefined,
    },
    include: getMaseInclude(user.id),
  });

  return newPost;
}
