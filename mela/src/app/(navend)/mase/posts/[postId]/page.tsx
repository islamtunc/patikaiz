// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin
// la havle vela kuvvete illa billahil aliyyil azim

// la ilahe illallah.
//  Muhammeden resulullah
// Allahumme salli ala seyyidina Muhammedin 
// ALLAHU EKBERU KEBIRAN


import { validateRequest } from "@/auth";
import Linkify from "@/hemanen/Linkify";
import Post from "@/hemanen/mase/Post";
import prisma from "@/pirtukxane/prisma";
import { getMaseInclude, UserData } from "@/pirtukxane/types";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache, Suspense } from "react";

interface PageProps {
  params: { postId: string };
}

const getPost = cache(async (postId: string, loggedInUserId: string) => {
  const post = await prisma.mase.findUnique({
    where: {
      id: postId,
    },
    include: getMaseInclude(loggedInUserId),
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
    title:"",
  };
}

export default async function Page({ params: { postId } }: PageProps) {
  const { user } = await validateRequest();

  if (!user) {
    return (
      <p className="text-destructive">
        You&apos;re not authorized to view this page.
      </p>
    );
  }

  const post = await getPost(postId, user.id);

  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <Post post={post as any} />
       




       
      </div>
   
    </main>
  );
}