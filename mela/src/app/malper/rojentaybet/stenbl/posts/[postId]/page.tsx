// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdillah, Allahu Ekber
import MmmPost from "@/hemanen/diwar/mmPost";
import prisma from "@/pirtukxane/prisma";
import { getStenbolDataInclude } from "@/pirtukxane/types";
import { notFound } from "next/navigation";
import { cache } from "react";

interface PageProps {
  params: { postId: string };
}

const getPost = cache(async (postId: string) => {
  const post = await prisma.stenbol.findUnique({
    where: { id: postId },
    include: getStenbolDataInclude(""),
  });

  if (!post) notFound();

  return post;
});

export default async function Page({ params: { postId } }: PageProps) {
  const post = await getPost(postId);

  return (
    <main className="flex flex-col lg:flex-row w-full min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-4">
      <div className="flex-1 flex justify-center items-start">
        <div className="w-full max-w-2xl">
          <MmmPost post={{ ...post, title: post.name }} />
          <div className="my-8">
            <hr className="border-t-4 border-gray-300" />
          </div>
        </div>
      </div>
    </main>
  );
}













