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

export async function submitPost(input: { content: string[]; mediaIds?: string[] }) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  const newPost = await prisma.mase.create({
    data: {
      content,
      userId: user.id,
      ...(mediaIds && mediaIds.length
        ? { media: { connect: mediaIds.map((id) => ({ id })) } }
        : {}),
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          displayName: true,
          avatarUrl: true,
          bio: true,
          createdAt: true,
        },
      },
      media: true,
    },
  });

  return newPost;
}
