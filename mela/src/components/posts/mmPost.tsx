// Bismillahirrahmanirahim
// Elhamdulillahi Rabbul Alemin 
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illAllah
// SuphAnAllah, SubhanAllah, SubhanAllah, ve'l-hamdulillah
// HasbunAllahu ve ni'mel vekil


"use client";

import { PostData } from "@/lib/types";
import { cn, formatRelativeDate } from "@/lib/utils";
import { Media } from "@prisma/client";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Linkify from "../Linkify";
import UserAvatar from "../UserAvatar";

interface PostProps {
  post: PostData;
  viewerId: string;
}

export default function MmmPost({ post, viewerId }: PostProps) {
  // content dizisini çöz
  let arr: string[] = [];
  try {
    arr = Array.isArray(post.content) ? post.content : JSON.parse(post.content);
  } catch {
    arr = [];
  }
  // [sektör, başlık, şehir, adres, ücret, açıklama]
  const [
    sector = "-",
    title = "-",
    city = "-",
    address = "-",
    price = "-",
    description = "-"
  ] = arr;

  return (
    <article className="group/post space-y-3 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <UserAvatar avatarUrl={post.user.avatarUrl} size={40} />
        <div>
          <div className="font-semibold">{post.user.displayName}</div>
          <div className="text-xs text-muted-foreground">@{post.user.username}</div>
          <div className="text-xs text-muted-foreground">{formatRelativeDate(post.createdAt)}</div>
        </div>
      </div>

      {!!post.attachments.length && (
        <Link href={`/mmavahi/posts/${post.id}`}>
          <MediaPreviews attachments={post.attachments} />
        </Link>
      )}
      {!post.attachments.length && (
        <div className="text-center text-muted-foreground">Medya yok</div>
      )}

      <div className="flex flex-col gap-1 mt-3">
        <div><span className="font-medium">Sektör:</span> {sector}</div>
        <div><span className="font-medium">Başlık:</span> {title}</div>
        <div><span className="font-medium">Şehir:</span> {city}</div>
        <div><span className="font-medium">Adres:</span> {address}</div>
        <div><span className="font-medium">Ücret:</span> {price ? price + " ₺" : "-"}</div>
        <div className="mb-2">
          <span className="font-medium">Açıklama:</span>
          <div className="whitespace-pre-line break-words">{description || '-'}</div>
        </div>
        <div><span className="font-medium">Oluşturulma:</span> {formatRelativeDate(post.createdAt)}</div>
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
