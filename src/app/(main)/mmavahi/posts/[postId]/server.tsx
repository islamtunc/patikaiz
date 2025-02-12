// Bismillahirrahmanirrahim

import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { getPostDataInclude } from "@/lib/types";
import { notFound } from "next/navigation";
import Page from "./page";

interface ServerProps {
  params: { postId: string };
}

const getPost = async (postId: string, loggedInUserId: string) => {
  const post = await prisma.mmavahi.findUnique({
    where: {
      id: postId,
    },
    include: getPostDataInclude(loggedInUserId),
  });

  if (!post) notFound();

  return post;
};

export default async function Server({ params: { postId } }: ServerProps) {
  const { user } = await validateRequest();

  if (!user) {
    return (
      <p className="text-destructive">
        ilan detaylarını görmek için giriş yapın 
      </p>
    );
  }

  const post = await getPost(postId, user.id);

  return <Page post={post} userId={user.id} />;
}
