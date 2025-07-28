// Bismillahirrahmanirrahim 
// Elhamdulillahi Rabbil Alamin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber ve Lillahi'l-hamd
"use client";

import { PostData } from "@/lib/types";
import { cn, formatRelativeDate } from "@/lib/utils";
import { Media } from "@prisma/client";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Linkify from "../Linkify";
import UserAvatar from "../UserAvatar";
import { useState } from "react";

interface PostProps {
  post: PostData;
  viewerId: string;
}

export default function Post({ post, viewerId }: PostProps) {
  const [deleting, setDeleting] = useState(false);
  const isOwner = post.user.id === viewerId;

  async function handleDelete() {
    if (!confirm("İlanı silmek istediğinize emin misiniz?")) return;
    setDeleting(true);
    const res = await fetch(`/api/posts/${post.id}`, { method: "DELETE" });
    setDeleting(false);
    if (res.ok) {
      window.location.reload();
    } else {
      alert("İlan silinemedi.");
    }
  }

  return (
    <article className="group/post space-y-3 rounded-2xl bg-card p-5 shadow-sm">
      {!!post.attachments.length && (
        <Link href={`/mmavahi/posts/${post.id}`}> {/* Medya tıklanınca yönlendirsin */}
          <MediaPreviews attachments={post.attachments} />
        </Link>
      )}
      {!post.attachments.length && (
        <div className="text-center text-muted-foreground">Medya yok</div>
      )}
      <div className="flex justify-between gap-5 mt-3">
        <div className="flex items-center gap-5">
          <Link
            href={`/mmavahi/posts/${post.id}`}
            className="block text-sm text-muted-foreground hover:underline"
            suppressHydrationWarning
          >
            Devamını Oku
          </Link>
        </div>
        {isOwner && (
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="text-red-600 hover:underline text-sm ml-auto"
          >
            {deleting ? "Siliniyor..." : "İlanı Sil"}
          </button>
        )}
      </div>
    </article>
  );
}

interface MediaPreviewsProps {
  attachments: Media[];
}

function MediaPreviews({ attachments }: MediaPreviewsProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        attachments.length > 1 && "sm:grid sm:grid-cols-2",
      )}
    >
      {attachments.map((m) => (
        <MediaPreview key={m.id} media={m} />
      ))}
    </div>
  );
}

interface MediaPreviewProps {
  media: Media;
}

function MediaPreview({ media }: MediaPreviewProps) {
  if (media.type === "IMAGE") {
    return (
      <Image
        src={media.url}
        alt="Attachment"
        width={500}
        height={500}
        className="mx-auto size-fit max-h-[30rem] rounded-2xl"
      />
    );
  }

  if (media.type === "VIDEO") {
    return (
      <div>
        <video
          src={media.url}
          controls
          className="mx-auto size-fit max-h-[30rem] rounded-2xl"
        />
      </div>
    );
  }

  return <p className="text-destructive">Ev medya nabe</p>;
}
