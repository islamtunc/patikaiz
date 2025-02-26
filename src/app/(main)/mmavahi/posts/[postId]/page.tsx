// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es Salatu Es Selamu Ala Rasulina Muhammedin ve Ala Alihi ve Sahbihi Ecmain

import { validateRequest } from "@/auth";
import Linkify from "@/components/Linkify";
import MmPost from "@/components/mmavahi/mmPost ";
import UserAvatar from "@/components/UserAvatar";
import UserTooltip from "@/components/UserTooltip";
import prisma from "@/lib/prisma";
import { getPostDataInclude, UserData } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { cache, Suspense } from "react";
import { Phone } from "lucide-react";
import ReactWhatsapp from "react-whatsapp";

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
        <UserInfoSidebar user={post.user} post={post} />
      </div>
    </main>
  );
}

interface UserInfoSidebarProps {
  user: UserData;
  post: any;
}

async function UserInfoSidebar({ user, post }: UserInfoSidebarProps) {
  const { user: loggedInUser } = await validateRequest();

  if (!loggedInUser) return null;

  return (
    <div className="space-y-5 rounded-2xl bg-card p-5">
      <div className="text-xl font-bold">Bu kullanıcı ile ilgili</div>
      <UserTooltip user={user}>
        <Link
          href={`/users/${user.username}`}
          className="flex items-center gap-3"
        >
          <UserAvatar avatarUrl={user.avatarUrl} className="flex-none" />
          <div>
            <p className="line-clamp-1 break-all font-semibold hover:underline">
              {user.displayName}
            </p>
            <p className="line-clamp-1 break-all text-muted-foreground">
              @{user.username}
            </p>
          </div>
        </Link>
      </UserTooltip>
      <Linkify>
        <div className="line-clamp-6 whitespace-pre-line break-words text-muted-foreground">
          <ReactWhatsapp element="div" number={"+90"+post.content[9]} message="Merhaba" />
        </div>
      </Linkify>
    </div>
  );
}