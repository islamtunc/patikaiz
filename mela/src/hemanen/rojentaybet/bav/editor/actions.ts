// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin 
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
"use server";

import { validateRequest } from "@/auth";
import prisma from "@/pirtukxane/prisma";
import { getBavDataInclude } from "@/pirtukxane/types";
import { createPostSchema } from "@/pirtukxane/validation";

export async function submitPost(input: {
  content: string[];
  mediaIds: string[];
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  // derive required fields
  const name =
    Array.isArray(content) && content.length > 0 && content[0].trim()
      ? content[0].trim().slice(0, 200)
      : content.join(" ").slice(0, 200) || "Untitled";

  const description =
    Array.isArray(content) && content.length > 1
      ? content.slice(1).join(" ").trim().slice(0, 1000)
      : null;

  // create the bav/post without relation fields that Prisma's create input doesn't accept
  const created = await prisma.bav.create({
    data: {
      name,
      description,
      content,
      userId: user.id,
    },
  });

  // attach media by updating media rows to point to the created bav
  if (Array.isArray(mediaIds) && mediaIds.length > 0) {
    await prisma.media.updateMany({
      where: { id: { in: mediaIds } },
      data: { bavId: created.id },
    });
  }

  const newPost = await prisma.bav.findUnique({
    where: { id: created.id },
    include: getBavDataInclude(user.id),
  });

  if (!newPost) throw new Error("Failed to load created post");

  return newPost;
}
