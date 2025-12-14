// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SuphanAllah, Elhamdulillah, Allahu Ekber


"use client";

import { StenbolData } from "@/pirtukxane/types";
import { cn, formatRelativeDate } from "@/pirtukxane/utils";
import { Media } from "@prisma/client";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Linkify from "../../Linkify";
import { Card } from "react-bootstrap";
import { Button } from "../../ui/button";

interface PostProps {
  post: StenbolData;
}

export default function MmmPost({ post }: PostProps) {
  const attachments: Media[] = Array.isArray(post.attachments)
    ? (post.attachments as Media[])
    : [];

  const zedeke = async () => {
    try {
      const res = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: post.id, content: post.content }),
      });
      if (!res.ok) throw new Error(await res.text());
      alert("Sepete Eklendi!");
    } catch (err: any) {
      alert("Hata: " + (err?.message ?? "Bilinmeyen"));
    }
  };

  return (
    <article className="group/post space-y-3 rounded-2xl bg-card p-5 shadow-sm text-black">
      <div className="flex justify-between gap-3">
        <div className="flex flex-wrap gap-3">
          <div>
          </div>
        </div>
      </div>
     
      {!!post.attachments.length && (
        <MediaPreviews attachments={post.attachments} />
      )}

       <Linkify>
        <Card>
          <Card.Title>{post.content[0]}</Card.Title>
        <Card.Body>
          <Card.Text>{post.content[1]}</Card.Text>
        {post.content[2] && (
          <Card.Text>{post.content[2]}</Card.Text>
        )}
        </Card.Body>
        

        <Button onClick={zedeke} variant="outline" className="w-full">
         Sepete Ekle
        </Button>
        </Card>
</Linkify>
   {attachments.length > 0 && <MediaPreviews attachments={attachments} />}

      <hr className="text-muted-foreground" />
      <div className="flex justify-between gap-5">
        <div className="flex items-center gap-5">
          <Link
            href={`/malper/mmavahi/posts/${post.id}`}
            className="block text-sm text-muted-foreground hover:underline"
            suppressHydrationWarning
          >
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



