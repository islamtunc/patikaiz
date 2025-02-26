// Bismillahirrahmanirrahim
//ELhamdulillahi Rabbil Alemin
//Es Salatu Es Selamu Ala Rasulina Muhammedin ve Ala Alihi ve Sahbihi Ecmain.
"use client"
import { PostData } from "@/lib/types";
import { cn, formatRelativeDate } from "@/lib/utils";
import { Media } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import UserAvatar from "../UserAvatar";
import Linkify from "../Linkify";
import UserTooltip from "../UserTooltip";
import { Button } from "@/components/ui/button";
import { StreamChat } from "stream-chat";
import { Phone } from "lucide-react";
import ReactWhatsapp from 'react-whatsapp';

interface PostProps {
  post: PostData;
}

export default async function MmPost({ post }: PostProps) {


  return (
    <article className="group/post space-y-3 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex justify-between gap-3">
        <div className="flex flex-wrap gap-3">
          <UserTooltip user={post.user}>
            <Link href={`/users/${post.user.username}`}>
              <UserAvatar avatarUrl={post.user.avatarUrl} />
            </Link>
          </UserTooltip>
          <div>
            <UserTooltip user={post.user}>
              <Link
                href={`/users/${post.user.username}`}
                className="block font-medium hover:underline"
              >
                {post.user.displayName}
              </Link>
            </UserTooltip>
            {post.user ? (
              <Link
                href={`/mmavahi/posts/${post.id}`}
                className="block text-sm text-muted-foreground hover:underline"
                suppressHydrationWarning
              >
                {formatRelativeDate(post.createdAt)}
              </Link>
            ) : (
              <Link
                href={`/malper/mmavahi/posts/${post.id}`}
                className="block text-sm text-muted-foreground hover:underline"
                suppressHydrationWarning
              >
                {formatRelativeDate(post.createdAt)}
              </Link>
            )}
          </div>
        </div>
      </div>

      {!!post.attachments.length && (
        <MediaPreviews attachments={post.attachments} />
      )}

      {post.content.map((text, index) => (
        <Linkify key={index}>
          <div className="whitespace-pre-line break-words">{text}</div>
        </Linkify>
      ))}

      

      <hr className="text-muted-foreground" />
      <Linkify>      <div className="whitespace-pre-line break-words">{post.content[0]}</div>
      </Linkify>
      <Linkify>      <div className="whitespace-pre-line break-words">{post.content[1]}</div>
      </Linkify>
      <Linkify>      <div className="whitespace-pre-line break-words">{post.content[2]}</div>
      </Linkify>
      <Linkify>      <div className="whitespace-pre-line break-words">{post.content[3]}</div>
      </Linkify>
      <Linkify>      <div className="whitespace-pre-line break-words">{post.content[4]}</div>
      </Linkify>
      <Linkify>      <div className="whitespace-pre-line break-words">{post.content[5]}</div>
      </Linkify>
      <Linkify>      <div className="whitespace-pre-line break-words">{post.content[6]}</div>
      </Linkify>
      <Linkify>      <div className="whitespace-pre-line break-words">{post.content[7]}</div>
      </Linkify>
      <Linkify>      <div className="whitespace-pre-line break-words">{post.content[8]}</div>
      </Linkify>
      <Linkify>      <div className="whitespace-pre-line break-words">{post.content[9]}</div>
      </Linkify>
      <Linkify>      <div className="whitespace-pre-line break-words">{post.content[10]}</div>
      </Linkify>






      <ReactWhatsapp element="button" number={"+90"+ post.content[9]} message="Selam Aleyküm" />


      <div className="flex justify-between gap-5">
        <Phone ><a href={`tel:${+905549765692}`}>Ara</a></Phone>





        <ReactWhatsapp element="button" number={"+90"+ post.content[9]} message="Selam Aleyküm" />
        <div className="flex items-center gap-5"></div>
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
        attachments.length > 1 && "sm:grid sm:grid-cols-2"
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