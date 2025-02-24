// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain.

import React from "react";
import { useSession } from "@/app/(main)/SessionProvider";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";
import { cn } from "@/lib/utils";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useDropzone } from "@uploadthing/react";
import { ImageIcon, Loader2, X } from "lucide-react";
import Image from "next/image";
import { ClipboardEvent, useRef, useState } from "react";
import { useSubmitPostMutation } from "./mutations";
import "./styles.css";
import useMediaUpload, { Attachment } from "./useMediaUpload";
import { Input } from "@/components/ui/input";

export default function PostEditor() {
  const { user } = useSession();
  const mutation = useSubmitPostMutation();
  const {
    startUpload,
    attachments,
    isUploading,
    uploadProgress,
    removeAttachment,
    reset: resetMediaUploads,
  } = useMediaUpload();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: startUpload,
  });

  const { onClick, ...rootProps } = getRootProps();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
      }),
      Placeholder.configure({
        placeholder: "Selam aleykum,fermo...",
      }),
    ],
  });

  const [selectedOption, setSelectedOption] = useState("mmal");

  function onSubmit() {
    mutation.mutate(
      {
        content: [selectedOption],
        mediaIds: attachments.map((a) => a.mediaId).filter(Boolean) as string[],
      },
      {
        onSuccess: () => {
          editor?.commands.clearContent();
          resetMediaUploads();
        },
      }
    );
  }

  function onPaste(e: ClipboardEvent<HTMLInputElement>) {
    const files = Array.from(e.clipboardData.items)
      .filter((item) => item.kind === "file")
      .map((item) => item.getAsFile()) as File[];
    startUpload(files);
  }

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex gap-5">
        <UserAvatar avatarUrl={user.avatarUrl} className="hidden sm:inline" />
        <div {...rootProps} className="w-full">
          <h5>Yeni Emlak İlanı</h5>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input placeholder="İlan Adı" className="mt-3" />
            <Input placeholder="İlan Fiyatı" className="mt-3" />
            <Input placeholder="Alan (metrekare)" className="mt-3" />
            <Input placeholder="Açıklama" className="mt-3" />

            <select
              className="mt-3 p-2 border rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Şehir Merkezi">Emlak Türü</option>
              <option value="Konut">Konut</option>
              <option value="Arsa">Arsa</option>
            </select>

            <select
              className="mt-3 p-2 border rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Şehir Merkezi">Konut Kullanımı</option>
              <option value="Satılık">Satılık</option>
              <option value="Kiralık">Kiralık</option>
              <option value="Devren Satılık">Devren Satılık</option>
              <option value="Devren Kiralık">Devren Kiralık</option>
            </select>

            <select
              className="mt-3 p-2 border rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Şehir Merkezi">Oda Sayısı</option>
              <option value="1+1">1+1</option>
              <option value="2+1">2+1</option>
              <option value="3+1">3+1</option>
              <option value="4+1 ve üzeri">4+1 ve üzeri</option>
              <option value="1+0">1+0 (Stüdyo Daire)</option>
            </select>

            <select
              className="mt-3 p-2 border rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Şehir Merkezi">Isınma Sistemi</option>
              <option value="Doğal Gaz">Doğal Gaz</option>
              <option value="Kömür Merkezi Sistem">Kömür Merkezi Sistem</option>
              <option value="Jeotermal">Jeotermal</option>
            </select>

            <select
              className="mt-3 p-2 border rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Şehir Merkezi">Asansör</option>
              <option value="Var">Var</option>
              <option value="Yok">Yok</option>
            </select>

            <select
              className="mt-3 p-2 border rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Şehir Merkezi">Otopark</option>
              <option value="Var">Var</option>
              <option value="Yok">Yok</option>
            </select>

            <select
              className="mt-3 p-2 border rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Şehir Merkezi">Bahçeli</option>
              <option value="Var">Var</option>
              <option value="Yok">Yok</option>
            </select>

            <select
              className="mt-3 p-2 border rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Şehir Merkezi">Havuz</option>
              <option value="Var">Var</option>
              <option value="Yok">Yok</option>
            </select>

            <select
              className="mt-3 p-2 border rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Şehir Merkezi">Balkon</option>
              <option value="Var">Var</option>
              <option value="Yok">Yok</option>
            </select>

            <select
              className="mt-3 p-2 border rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Şehir Merkezi">Teras</option>
              <option value="Var">Var</option>
              <option value="Yok">Yok</option>
            </select>

            <select
              className="mt-3 p-2 border rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Şehir Merkezi">Klima</option>
              <option value="Var">Var</option>
              <option value="Yok">Yok</option>
            </select>

            <select
              className="mt-3 p-2 border rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Şehir Merkezi">Eşya Durumu</option>
              <option value="Eşyalı">Eşyalı</option>
              <option value="Eşyasız">Eşyasız</option>
            </select>
          </div>
        </div>
      </div>

      {!!attachments.length && (
        <AttachmentPreviews
          attachments={attachments}
          removeAttachment={removeAttachment}
        />
      )}
      <div className="flex items-center justify-end gap-3">
        {isUploading && (
          <>
            <span className="text-sm">{uploadProgress ?? 0}%</span>
            <Loader2 className="size-5 animate-spin text-primary" />
          </>
        )}
        <AddAttachmentsButton
          onFilesSelected={startUpload}
          disabled={isUploading || attachments.length >= 5}
        />
        <LoadingButton
          onClick={onSubmit}
          loading={mutation.isPending}
          className="min-w-20"
        >
          Parve bikin
        </LoadingButton>
      </div>
    </div>
  );
}

interface AddAttachmentsButtonProps {
  onFilesSelected: (files: File[]) => void;
  disabled: boolean;
}

function AddAttachmentsButton({
  onFilesSelected,
  disabled,
}: AddAttachmentsButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-primary hover:text-primary"
        disabled={disabled}
        onClick={() => fileInputRef.current?.click()}
      >
        <ImageIcon size={20} />
      </Button>
      <input
        type="file"
        accept="image/*, video/*"
        multiple
        ref={fileInputRef}
        className="sr-only hidden"
        onChange={(e) => {
          const files = Array.from(e.target.files || []);
          if (files.length) {
            onFilesSelected(files);
            e.target.value = "";
          }
        }}
      />
    </>
  );
}

interface AttachmentPreviewsProps {
  attachments: Attachment[];
  removeAttachment: (fileName: string) => void;
}

function AttachmentPreviews({
  attachments,
  removeAttachment,
}: AttachmentPreviewsProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        attachments.length > 1 && "sm:grid sm:grid-cols-2"
      )}
    >
      {attachments.map((attachment) => (
        <AttachmentPreview
          key={attachment.file.name}
          attachment={attachment}
          onRemoveClick={() => removeAttachment(attachment.file.name)}
        />
      ))}
    </div>
  );
}

interface AttachmentPreviewProps {
  attachment: Attachment;
  onRemoveClick: () => void;
}

function AttachmentPreview({
  attachment: { file, mediaId, isUploading },
  onRemoveClick,
}: AttachmentPreviewProps) {
  const src = URL.createObjectURL(file);

  return (
    <div
      className={cn("relative mx-auto size-fit", isUploading && "opacity-50")}
    >
      {file.type.startsWith("image") ? (
        <Image
          src={src}
          alt="Attachment preview"
          width={500}
          height={500}
          className="size-fit max-h-[30rem] rounded-2xl"
        />
      ) : (
        <video controls className="size-fit max-h-[30rem] rounded-2xl">
          <source src={src} type={file.type} />
        </video>
      )}
      {!isUploading && (
        <button
          onClick={onRemoveClick}
          className="absolute right-3 top-3 rounded-full bg-foreground p-1.5 text-background transition-colors hover:bg-foreground/60"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
}
