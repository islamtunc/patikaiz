// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin
// la havle vela kuvvete illa billahil aliyyil azim

// la ilahe illallah
//  Muhammeden resulullah
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// ALLAHU EKBERU KEBIRAN
"use server";

import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { getMmkedkarDataInclude } from "@/lib/types";
import { createPostSchema } from "@/lib/validation";

export async function submitPost(input: {
  content: string[];
  mediaIds: string[];
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  const newPost = await prisma.mmkedkar.create({
    data: {
      content, // Convert string[] to a single string
      userId: user.id,
      attachments: {
        connect: mediaIds.map((id) => ({ id })),
      },
    },
    include: getMmkedkarDataInclude(user.id),
  });

  return newPost;
}
