// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah, Muhammedur Resulullah
// Allah U Ekber ve lillahi'l-hamd

"use client";

import React, { useState } from "react";
import { DiwarData } from "@/pirtukxane/types";
import { cn, formatRelativeDate } from "@/pirtukxane/utils";
import { Media } from "@prisma/client";
import { MessageSquare, Heart, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Linkify from "../Linkify";
import UserAvatar from "../UserAvatar";
import { Card } from "react-bootstrap";


interface PostProps {
  post: DiwarData;
}

export default function Post({ post }: PostProps) {
  const attachments: Media[] = Array.isArray(post.media) ? (post.media as Media[]) : [];
  const [liked, setLiked] = useState(false);
  const price = (post as any)?.price ?? (post as any)?.meta?.price ?? null;

  return (
    <article className="group/post space-y-3 rounded-2xl bg-card p-5 shadow-sm text-black">
      <div className="flex justify-between gap-3">
        <div className="flex flex-wrap gap-3">
          <div>
          </div>
        </div>
      </div>

      {attachments.length > 0 && <MediaPreviews attachments={attachments} />}

      <Linkify>
        <div className="whitespace-pre-line break-words">
          <Card>
            <Card.Title>{post.content[0]}</Card.Title>
            <Card.Body>
              <Card.Text>{post.content[1]}</Card.Text>
              {post.content[2] && <Card.Text>{post.content[2]}</Card.Text>}
            </Card.Body>
          </Card>
        </div>
      </Linkify>

      {attachments.length > 0 && <MediaPreviews attachments={attachments} />}

      <hr className="text-muted-foreground" />
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          {price != null && (
            <div className="flex items-center gap-2 text-sm font-semibold text-green-700">
              <Tag className="w-4 h-4" />
              <span>{typeof price === "number" ? `${price} ₺` : price}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLiked((s) => !s)}
            aria-label="Favoriye ekle"
            className={`p-2 rounded-full hover:bg-gray-100 transition ${
              liked ? "text-red-600" : "text-gray-600"
            }`}
          >
            <Heart className="w-5 h-5" />
          </button>

          <Link
            href={`/malper/mmavahi/posts/${post.id}`}
            className="block text-sm text-muted-foreground hover:underline"
            suppressHydrationWarning
          >
            Sepete Ekle
          </Link>
        </div>
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

// Subhanallah, Elhamdulillah, Allahu Ekber, 
// La ilahe illallah, Muhammeden Abduhu ve Resuluhu
// La havle vela kuvvete illa billahil aliyyil azim
// Estağfirulllah El-Azim
// Elhmadulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbulalemin


