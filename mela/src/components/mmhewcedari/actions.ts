// Bismillahirrahmanirahim
// Elhamdu lillahi rabbil alamin
// Esselatu vesselamu ala rasulillah 
// La ilahe illallah Muhammedun abduhu ve resuluhu
// Subhanallah, Elhamdulillah, Allahu Ekber
// Allahu Ekber, Allahu Ekber, Allahu Ekber


"use server";

import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { getMmhewcedariDataInclude } from "@/lib/types";

export async function deletePost(id: string) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const post = await prisma.mmhewcedari.findUnique({
    where: { id },
  });

  if (!post) throw new Error("Post not found");

  if (post.userId !== user.id) throw new Error("Unauthorized");

  const deletedPost = await prisma.mmhewcedari.delete({
    where: { id },
    include: getMmhewcedariDataInclude(user.id),
  });

  return deletedPost;
}
