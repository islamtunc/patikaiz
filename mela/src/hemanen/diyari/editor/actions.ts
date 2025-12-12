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
import prisma from "@/pirtukxane/prisma";
import { getDiyariDataInclude } from "@/pirtukxane/types";
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

  // create the post first (don't attempt to write relations that the generated create input doesn't accept)
  const created = await prisma.diyari.create({
    data: {
      title,
      content,
      userId: user.id,
    },
  });

  // attach media by updating Media rows to point to this diyari
  if (Array.isArray(mediaIds) && mediaIds.length > 0) {
    await prisma.media.updateMany({
      where: { id: { in: mediaIds } },
      data: { diyariId: created.id },
    });
  }

  const newPost = await prisma.diyari.findUnique({
    where: { id: created.id },
    include: getDiyariDataInclude(user.id),
  });

  if (!newPost) throw new Error("Failed to load created post");

  return newPost;
}
