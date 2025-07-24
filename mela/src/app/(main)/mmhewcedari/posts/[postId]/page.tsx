// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbul Alemin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber ve Lillahi'l-hamd
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SuphanAllahi ve bihamdi, SubhanAllahil Azim
// La havle ve la kuvvete illa billahil Aliyyil Azim
// HasbunAllahu ve ni'mel vekil
import { validateRequest } from "@/auth";
import Linkify from "@/components/Linkify";
import MmmPost from "@/components/mmhewcedari/mmPost";
import UserAvatar from "@/components/UserAvatar";
import UserTooltip from "@/components/UserTooltip";
import prisma from "@/lib/prisma";
import { getPostDataInclude, UserData, MmhewcedariPostData } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache, Suspense } from "react";
import ChatProviderClient from "../../../ChatProviderClient";

interface PageProps {
  params: { postId: string };
}

const getPost = cache(async (postId: string, loggedInUserId: string) => {
  const post = await prisma.mmhewcedari.findUnique({
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
    title: `${post.user.displayName}: ${post.content.slice(0, 50)}...`,
  };
}

import dynamic from "next/dynamic";
// Update the import path below to match the actual location and filename of UserInfoSidebar
// For example, if the file is in the same folder as this file, use:

// Update the import path below to match the actual location and filename of UserInfoSidebar
// For example, if the file is in the parent folder's components directory, use:
// Update the import path below to match the actual location and filename of UserInfoSidebar
// Example: if UserInfoSidebar is in "@/components/UserInfoSidebar", use:
import UserInfoSidebar from "./UserInfoSidebar";
// If it's in another location, update the path accordingly.
// Or, adjust the path according to your project structure.

export default async function Page({ params: { postId } }: PageProps) {
  const { user } = await validateRequest();
  if (!user) {
    return (
      <p className="text-destructive">
        You&apos;re not authorized to view this page.
      </p>
    );
  }
  const post: MmhewcedariPostData = await getPost(postId, user.id);

  return (
    <ChatProviderClient>
      <main className="flex w-full min-w-0 gap-5 flex-col lg:flex-row">
        <div className="w-full min-w-0 space-y-5">
          <MmmPost post={post} viewerId={user.id} />
          {/* Mobilde göster (lg'den küçük ekranlarda) */}
          <div className="block lg:hidden">
            <Suspense fallback={<Loader2 className="mx-auto animate-spin" />}>
              <UserInfoSidebar user={post.user} loggedInUserId={user.id} post={post} />
            </Suspense>
          </div>
        </div>
        {/* Sadece büyük ekranda göster */}
        <div className="sticky top-[5.25rem] hidden h-fit w-80 flex-none lg:block">
          <Suspense fallback={<Loader2 className="mx-auto animate-spin" />}>
            <UserInfoSidebar user={post.user} loggedInUserId={user.id} post={post} />
          </Suspense>
        </div>
      </main>
    </ChatProviderClient>
  );
}