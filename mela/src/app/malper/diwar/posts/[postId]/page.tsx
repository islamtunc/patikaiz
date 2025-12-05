// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
import Linkify from "@/hemanen/Linkify";
import MmmPost from "@/hemanen/diwar/mmPost";
import Post from "@/hemanen/diwar/mmPost";
import UserAvatar from "@/hemanen/UserAvatar";
import UserTooltip from "@/hemanen/UserTooltip";
import prisma from "@/pirtukxane/prisma";
import { getMmavahiDataInclude, UserData } from "@/pirtukxane/types";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache, Suspense } from "react";

interface PageProps {
  params: { postId: string };
}

const getPost = cache(async (postId: string) => {
  const post = await prisma.diwar.findUnique({
    where: {
      id: postId,
    },
    include: getMmavahiDataInclude(""), // Kullanıcı doğrulama kaldırıldı
  });

  if (!post) notFound();

  return post;
});


export default async function Page({ params: { postId } }: PageProps) {
  const post = await getPost(postId);

  return (
    <main 
      className="flex flex-col lg:flex-row w-full min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-4"
    >
      {/* İçerik Kartı */}
      <div className="flex-1 flex justify-center items-start">
        <div className="w-full max-w-2xl">
          <MmmPost post={post} />
          {/* Ayraç ve boşluk */}
          <div className="my-8">
            <hr className="border-t-4 border-gray-355" />
          </div>
        </div>
      </div>
    </main>
  );
}

interface UserInfoSidebarProps {
  user: UserData;
}













