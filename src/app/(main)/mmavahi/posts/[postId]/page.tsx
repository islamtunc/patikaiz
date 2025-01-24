// Bismillahirrahmanirrahim

// Elhamdülillahirabbülalemin 

import { validateRequest } from "@/auth";
import MmPost from "@/components/mmavahi/mmPost ";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { getPostDataInclude, UserData } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { cache, Suspense } from "react";

import handleMessageClick from "../mm";
interface PageProps {
  params: { postId: string };
}

const getPost = cache(async (postId: string, loggedInUserId: string) => {
  const post = await prisma.mmavahi.findUnique({
    where: {
      id: postId,
    },
    include: getPostDataInclude(loggedInUserId),
  });

  if (!post) notFound();

  return post;
});

export async function generateMetadata({
  params: { postId },
}: PageProps): Promise<Metadata> {
  const { user } = await validateRequest();

  if (!user) return {};

  const post = await getPost(postId, user.id);

  return {
    title: `${post.user.displayName}: ${post.content?.slice(0, 50) ?? ''}...`,
  };
}

export default async function Page({ params: { postId } }: PageProps) {
   
     "use server"
  const { user } = await validateRequest();

  if (!user) {
    return (
      <p className="text-destructive">
        ilan detaylarını görmek için giriş yapın 
      </p>
    );
  }

  const post = await getPost(postId, user.id);


  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <MmPost post={post} />

        {user.id !== post.user.id && (






<form action={
   handleMessageClick(post.user.id, user.id)
}>
  <Button type="submit">
    Mesaj Yaz
  </Button>
</form>
        )}
      </div>
      <div className="sticky top-[5.25rem] hidden h-fit w-80 flex-none lg:block">
        <Suspense fallback={<Loader2 className="mx-auto animate-spin" />}>
        </Suspense>
      </div>
    </main>
  );
}