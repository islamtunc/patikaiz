// Bismillahirrahmanirrahim

// Elhamdülillahirabbülalemin 

// Allahu ekber
import { validateRequest } from "@/auth";
import MmPost from "@/components/mmavahi/mmPost ";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { getPostDataInclude, UserData } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { cache, Suspense } from "react";
import { StreamChat } from "stream-chat";
import { useRouter } from 'next/navigation';

import NewChatDialog from "@/app/(main)/messages/NewChatDialog";
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
  const { user } = await validateRequest();
  const router = useRouter();

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

        <NewChatDialog 
          onOpenChange={() => {}} 
          onChatCreated={() => {}} 
          userId={post.user.id} 
        />
        <Suspense fallback={<Loader2 className="mx-auto animate-spin" />}>
        </Suspense>
      </div>
    </main>
  );
}