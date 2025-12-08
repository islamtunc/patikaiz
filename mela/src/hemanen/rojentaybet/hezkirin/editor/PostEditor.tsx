// Bismillahirahmanirahim 
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin 
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SuphanAllah, Elhamdulillah, Allahu Ekber



// Bismillahirrahmanirahim
"use client";

import { useSession } from "@/app/(navend)/SessionProvider";
import LoadingButton from "@/hemanen/LoadingButton";
import { Button } from "@/hemanen/ui/button";
import UserAvatar from "@/hemanen/UserAvatar";
import { cn } from "@/pirtukxane/utils";

import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { useDropzone } from "@uploadthing/react";
import { ImageIcon, Loader2, X } from "lucide-react";
import Image from "next/image";

import { ClipboardEvent, useRef, useState } from "react";
import useMediaUpload, { Attachment } from "./useMediaUpload";
import { useSubmitPostMutation } from "./mutations";

export default function NewProductPage() {
  const { user } = useSession();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("Hediyelik Takvim");

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

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ bold: {}, italic: false }),
      Placeholder.configure({ placeholder: "Ürün açıklamasını yaz..." }),
    ],
  });

  const description =
    editor?.getText({ blockSeparator: "\n" }) || "";

  function onPaste(e: ClipboardEvent<HTMLInputElement>) {
    const files = Array.from(e.clipboardData.items)
      .filter((item) => item.kind === "file")
      .map((item) => item.getAsFile()) as File[];

    startUpload(files);
  }

  function onSubmit() {
   
  mutation.mutate(
  {
    content: [
      `TITLE:${title}`,
      `ADDRESS:${address}`,
      `PRICE:${price}`,
      `STOCK:${stock}`,
      `SIZE:${size}`,
      `CATEGORY:${category}`,
      ...description
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    ],
    mediaIds: attachments
      .map((a) => a.mediaId)
      .filter((id): id is string => typeof id === "string"),
  },
  {
    onSuccess: () => {
      setTitle("");
      setAddress("");
      setPrice("");
      setStock("");
      setSize("");
      editor?.commands.clearContent();
      resetMediaUploads();
    }
  }
);

  }

  return (
    <div className="min-h-screen bg-muted py-10">
      <h1 className="text-center text-2xl font-bold mb-6">
        📅 Yeni Takvim Ürünü Ekle
      </h1>

      <div className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-md text-black w-full max-w-3xl mx-auto">

        <div className="flex gap-3">
          <div className="w-full space-y-3">

            <input
              type="text"
              placeholder="Ürün Başlığı"
              className="w-full rounded-lg border px-4 py-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Konu / Kısa açıklama"
              className="w-full rounded-lg border px-4 py-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="number"
                placeholder="Fiyat (₺)"
                className="w-full rounded-lg border px-4 py-2"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <input
                type="number"
                placeholder="Stok Adedi"
                className="w-full rounded-lg border px-4 py-2"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <select
              className="w-full rounded-lg border px-4 py-2"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">Takvim Boyutu Seç</option>
              <option value="A3">A3 Duvar Takvimi</option>
              <option value="A4">A4 Duvar Takvimi</option>
              <option value="Masa">Masa Takvimi</option>
              <option value="Cep">Cep Takvimi</option>
            </select>

          </div>
        </div>

        {/* Açıklama */}
        <div {...getRootProps()} className="w-full">
        
          <input {...getInputProps()} />
        </div>

        {attachments.length > 0 && (
          <AttachmentPreviews
            attachments={attachments}
            removeAttachment={removeAttachment}
          />
        )}

        {/* Alt toolbar */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2 items-center">
            {isUploading && (
              <>
                <span>{uploadProgress ?? 0}%</span>
                <Loader2 className="animate-spin w-4 h-4" />
              </>
            )}

            <AddAttachmentsButton
              onFilesSelected={startUpload}
              disabled={isUploading || attachments.length >= 10}
            />
          </div>

          <LoadingButton
            onClick={onSubmit}
            loading={mutation.isPending}
            disabled={
              !title ||
              !address ||
              !description ||
              !price ||
              !stock ||
              !size ||
              isUploading
            }
          >
            ✅ Ürünü Yayınla
          </LoadingButton>
        </div>

      </div>
    </div>
  );
}

/* ===================== FILE BUTTON ====================== */

function AddAttachmentsButton({
  onFilesSelected,
  disabled,
}: {
  onFilesSelected: (files: File[]) => void;
  disabled: boolean;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        disabled={disabled}
        onClick={() => fileInputRef.current?.click()}
      >
        <ImageIcon size={20} />
      </Button>

      <input
        type="file"
        multiple
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
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

/* ===================== PREVIEW ====================== */

function AttachmentPreviews({
  attachments,
  removeAttachment,
}: {
  attachments: Attachment[];
  removeAttachment: (fileName: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

function AttachmentPreview({
  attachment: { file, isUploading },
  onRemoveClick,
}: {
  attachment: Attachment;
  onRemoveClick: () => void;
}) {
  const src = URL.createObjectURL(file);

  return (
    <div className={cn("relative", isUploading && "opacity-50")}>
      <Image
        src={src}
        alt="image"
        width={500}
        height={500}
        className="rounded-xl"
      />

      {!isUploading && (
        <button
          onClick={onRemoveClick}
          className="absolute top-2 right-2 bg-black/80 text-white rounded-full p-1"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Estağfirulllah El-Azim
// SuphanAllah, Elhamdulillah, Allahu Ekber
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulillahirabbulalemin

