// Bismillahirrahmanirahim
// Elhamdu lillahi rabbil alamin
// Esselatu vesselamu ala rasulina Muhammedin
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber


"use server";

import { validateRequest } from "@/auth";
import prisma from "@/pirtukxane/prisma";
import { getDayikDataInclude } from "@/pirtukxane/types";

export async function deletePost(id: string) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const post = await prisma.dayik.findUnique({
    where: { id },
  });

  if (!post) throw new Error("Post not found");

  if (post.userId !== user.id) throw new Error("Unauthorized");

  const deletedPost = await prisma.dayik.delete({
    where: { id },
    include: getDayikDataInclude(user.id),
  });

  return deletedPost;
}
