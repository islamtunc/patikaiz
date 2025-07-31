// Bismillahirahmanirahim 
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SuphanAllah, Elhamdulillah, Allahu Ekber



"use client";

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
import { ClipboardEvent, useRef, useState, useEffect } from "react";
import { useSubmitPostMutation } from "./mutations";
import "./styles.css";
import useMediaUpload, { Attachment } from "./useMediaUpload";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function JobPostTabs() {
  const sectors = [
    { value: "bilisim", label: "Bilişim" },
    { value: "egitim", label: "Eğitim" },
    { value: "saglik", label: "Sağlık" },
    { value: "insaat", label: "İnşaat" },
    { value: "diger", label: "Diğer" },
  ];

  return (
    <Tabs defaultValue="bilisim" className="w-full max-w-2xl mx-auto">
      <TabsList>
        {sectors.map((sector) => (
          <TabsTrigger key={sector.value} value={sector.value}>
            {sector.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {sectors.map((sector) => (
        <TabsContent key={sector.value} value={sector.value}>
          <JobPostForm sector={sector.label} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function JobPostForm({ sector }: { sector: string }) {
  // content dizisi: [sektör, başlık, şehir, adres, ücret, açıklama]
  const [content, setContent] = useState([sector, "", "", "", "", ""]);
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

  // Sektör değişirse content[0] güncellensin
  useEffect(() => {
    setContent((prev) => [sector, ...prev.slice(1)]);
  }, [sector]);

  function handleChange(index: number, value: string) {
    setContent((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  }

  function onSubmit() {
    mutation.mutate(
      {
        content,
        mediaIds: attachments.map((a) => a.mediaId).filter(Boolean) as string[],
      },
      {
        onSuccess: () => {
          setContent([sector, "", "", "", "", ""]);
          resetMediaUploads();
        },
      }
    );
  }

  return (
    <div className="flex flex-col gap-4 bg-card p-5 rounded-xl shadow">
      <input
        type="text"
        value={content[0]}
        disabled
        className="input font-bold"
        style={{ background: "#f3f4f6" }}
      />
      <input
        type="text"
        placeholder="İlan Başlığı"
        value={content[1]}
        onChange={(e) => handleChange(1, e.target.value)}
        className="input"
        required
      />
      <input
        type="text"
        placeholder="Şehir"
        value={content[2]}
        onChange={(e) => handleChange(2, e.target.value)}
        className="input"
        required
      />
      <input
        type="text"
        placeholder="Adres"
        value={content[3]}
        onChange={(e) => handleChange(3, e.target.value)}
        className="input"
        required
      />
      <input
        type="text"
        placeholder="Ücret"
        value={content[4]}
        onChange={(e) => handleChange(4, e.target.value)}
        className="input"
      />
      <textarea
        placeholder="Açıklama"
        value={content[5]}
        onChange={(e) => handleChange(5, e.target.value)}
        className="input"
        rows={4}
        required
      />
      {/* Medya ekleme ve önizleme kodları burada olabilir */}
      <LoadingButton
        onClick={onSubmit}
        loading={mutation.isPending}
        disabled={
          content.slice(1, 6).some((v) => !v.trim()) || isUploading
        }
      >
        İlanı Yayınla
      </LoadingButton>
    </div>
  );
}

function PostEditor() {
  const { user } = useSession();
  // content dizisi: [başlık, kategori, şehir, adres, ücret, açıklama]
  const [content, setContent] = useState(["", "", "", "", "", ""]);

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
      StarterKit.configure({ bold: {}, italic: false }),
      Placeholder.configure({ placeholder: "Yazınızı buraya yazın..." }),
    ],
  });

  function handleChange(index: number, value: string) {
    setContent((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  }

  function onSubmit() {
    mutation.mutate(
      {
        content,
        mediaIds: attachments.map((a) => a.mediaId).filter(Boolean) as string[],
      },
      {
        onSuccess: () => {
          setContent(["", "", "", "", "", ""]);
          editor?.commands.clearContent();
          resetMediaUploads();
        },
      }
    );
  }

  return (
    <Tabs defaultValue="ilanlar" className="w-full max-w-2xl mx-auto">
      <TabsList>
        <TabsTrigger value="ilanlar">İlanlar</TabsTrigger>
        <TabsTrigger value="yeni">Yeni İlan Ver</TabsTrigger>
      </TabsList>
      <TabsContent value="ilanlar">
        <div>İş ilanları burada listelenecek.</div>
      </TabsContent>
      <TabsContent value="yeni">
        <div className="flex flex-col gap-5 rounded-2xl bg-card p-3 sm:p-5 shadow-sm text-black w-full max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <UserAvatar avatarUrl={user.avatarUrl} className="hidden sm:inline" />
            <div className="w-full space-y-3">
              <input
                type="text"
                placeholder="İlan Başlığı"
                className="w-full rounded-lg border px-4 py-2"
                value={content[0]}
                onChange={(e) => handleChange(0, e.target.value)}
                maxLength={100}
                required
              />
              <input
                type="text"
                placeholder="Kategori"
                className="w-full rounded-lg border px-4 py-2"
                value={content[1]}
                onChange={(e) => handleChange(1, e.target.value)}
                maxLength={50}
                required
              />
              <input
                type="text"
                placeholder="Şehir"
                className="w-full rounded-lg border px-4 py-2"
                value={content[2]}
                onChange={(e) => handleChange(2, e.target.value)}
                maxLength={50}
                required
              />
              <input
                type="text"
                placeholder="Adres"
                className="w-full rounded-lg border px-4 py-2"
                value={content[3]}
                onChange={(e) => handleChange(3, e.target.value)}
                maxLength={200}
                required
              />
              <input
                type="text"
                placeholder="Ücret"
                className="w-full rounded-lg border px-4 py-2"
                value={content[4]}
                onChange={(e) => handleChange(4, e.target.value)}
                maxLength={20}
              />
              <textarea
                placeholder="Açıklama"
                className="w-full rounded-lg border px-4 py-2"
                value={content[5]}
                onChange={(e) => handleChange(5, e.target.value)}
                rows={4}
                required
              />
            </div>
          </div>
          <div {...rootProps} className="w-full">
            <EditorContent
              editor={editor}
              className={cn(
                "max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-3 py-3 text-black prose prose-green",
                isDragActive && "outline-dashed",
              )}
              onPaste={(e) => {
                const files = Array.from(e.clipboardData.items)
                  .filter((item) => item.kind === "file")
                  .map((item) => item.getAsFile()) as File[];
                startUpload(files);
              }}
            />
            <input {...getInputProps()} />
          </div>
          {!!attachments.length && (
            <AttachmentPreviews
              attachments={attachments}
              removeAttachment={removeAttachment}
            />
          )}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
            {isUploading && (
              <>
                <span className="text-sm">{uploadProgress ?? 0}%</span>
                <Loader2 className="size-5 animate-spin text-primary" />
              </>
            )}
            <AddAttachmentsButton
              onFilesSelected={startUpload}
              disabled={isUploading || attachments.length >= 10}
            />
            <LoadingButton
              onClick={onSubmit}
              loading={mutation.isPending}
              disabled={
                content.slice(0, 6).some((v) => !v.trim()) || isUploading
              }
              className="min-w-20"
            >
              Yayınla
            </LoadingButton>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}

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

function AttachmentPreviews({
  attachments,
  removeAttachment,
}: {
  attachments: Attachment[];
  removeAttachment: (fileName: string) => void;
}) {
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

function AttachmentPreview({
  attachment: { file, mediaId, isUploading },
  onRemoveClick,
}: {
  attachment: Attachment;
  onRemoveClick: () => void;
}) {
  const src = URL.createObjectURL(file);

  return (
    <div className={cn("relative mx-auto size-fit", isUploading && "opacity-50")}>
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
          className="absolute right-3 top-3 rounded-full bg-foreground p-1.5 text-background hover:bg-foreground/60"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
}