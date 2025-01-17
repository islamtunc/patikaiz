// Bismillahirahmanirahim 

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
        content: selectedOption,
        mediaIds: attachments.map((a) => a.mediaId).filter(Boolean) as string[],
       
      },
      {
        onSuccess: () => {
          editor?.commands.clearContent();
          resetMediaUploads();
        },
      },
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
       <h5> Yeni Emlak İlanı</h5>










       <div style={{display:"flex",flexDirection:"column"}}>
           <Input placeholder="ilan adı"/>








    
    
           <select
            className="mt-3 p-2 border rounded"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Şehir Merkezi">Konut Türü</option><br></br>
           <br></br>
           <option value="option2">Daire</option>

            <option value="option2">Villa</option>
            <option value="option3">Müstakil Ev</option>
         
            <option value="option2">Residans</option>

            <option value="option2">Stüdyo Daire</option>
       
            <option value="option3">Dubleks/Tripleks</option>
         
         <option value="option2">Residans</option>

         <option value="option2">Loft</option>

<option value="option2">Prefabrik Ev</option>
<option value="option3">Çiftlik Evi</option>

<option value="option2">Yatırım Amaçlı</option>

          </select>
          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Şehir Merkezi">Konut Kullanımı</option>
            <option value="option2">Satılık </option>
            <option value="option3">Kiralık</option>
            
            <option value="Şehir Merkezi">Devren Kiralık</option>
            <option value="option2">Devren Satılık </option>
            <option value="option3">Devren Kiralık</option>
          </select>
          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Şehir Merkezi">Oda Sayısı</option><br></br>
           <br></br>
           <option value="option2">1+1</option>

            <option value="option2">2+1</option>
            <option value="option3">3+1</option>
            
            <option value="option2">4+1 ve üzeri</option>
            <option value="option3">1+0 (Studyo Daire)</option>
          </select>
      

          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Şehir Merkezi">Isınma Sistemi</option>
            <option value="option2">Doğal Gaz</option>
            <option value="option3">Kömür Merkezi Sistem</option>
            <option value="Şehir Merkezi">Jeotermal </option>
            <option value="option2"></option>
          </select>

    
          </div>

          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >

            

            <option value="Şehir Merkezi"> Asansor var</option>
            <option value="option2">Asansor yok</option>
            
            
          </select>




          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Şehir Merkezi">Otopark var</option>
            <option value="option2">Otopark yok</option>
          </select>

          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Şehir Merkezi">Bahçeli</option>
            <option value="option2">Bahçesiz</option>
          </select>

          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Şehir Merkezi">Havuz var</option>
            <option value="option2">Havuz yok</option>
          </select>

          
          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Şehir Merkezi">Balkon var</option>
            <option value="option2">Balkon yok</option>
          </select>
          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Şehir Merkezi">Teras var</option>
            <option value="option2">Teras yok</option>
          </select>
          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Şehir Merkezi">Klimalı</option>
            <option value="option2">Klimasız</option>
          </select>


           
          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Şehir Merkezi">Eşyalı</option>
            <option value="option2">Eşyasız</option>
          </select>
         

        </div>
        
      </div>


      
      <Input placeholder="ilan fiyatı"/>
          <Input placeholder="Alan(metrekare)"/>

          
          <Input placeholder="Açıklaması"/>

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
        attachments.length > 1 && "sm:grid sm:grid-cols-2",
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