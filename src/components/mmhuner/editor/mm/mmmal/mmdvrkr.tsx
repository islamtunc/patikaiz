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
import useMediaUpload, { Attachment } from "../../useMediaUpload";
import { Input } from "@/components/ui/input";
import { useSubmitPostMutation } from "../../mutations";


export default function MmKrPostEditor() {
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



  const [selectedOption1, setSelectedOption1] = useState("Belirtilmemiş");

  const [selectedOption3, setSelectedOption3] = useState("Belirtilmemiş");

  const [selectedOption5, setSelectedOption5] = useState("Belirtilmemiş");

  const [selectedOption7, setSelectedOption7] = useState("mm");



  const [selectedOption9, setSelectedOption9] = useState("mm");

  const [selectedOption11, setSelectedOption11] = useState("mm");

  const [selectedOption13, setSelectedOption13] = useState("mm");

  const [selectedOption15, setSelectedOption15] = useState("mm");

  const [selectedOption17, setSelectedOption17] = useState("mm");

  const [selectedOption19, setSelectedOption19] = useState("mm");

  const [selectedOption21, setSelectedOption21] = useState("mmal");
  const handleSelectChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption1(event.target.value);
  };

  const handleSelectChange3 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption3(event.target.value);
  };

  const handleSelectChange5 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption5(event.target.value);
  };

  const handleSelectChange7 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption7(event.target.value);
  };
  const handleSelectChange9 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption9(event.target.value);
  };
  const handleSelectChange13= (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption13(event.target.value);
  };

  const handleSelectChange11 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption11(event.target.value);
  };
  function onSubmit() {
    mutation.mutate(
      {
        content: ["Satılık Konut",selectedOption1,selectedOption5,selectedOption7,selectedOption9,selectedOption11,selectedOption13,selectedOption15,selectedOption17,selectedOption19,selectedOption21],
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
       <h5> Yeni  Satılık Ev İlanı</h5>

      <br></br>   <br></br>








       <div style={{display:"flex",flexDirection:"column"}}>
           <Input placeholder="ilan adı"/>








    
    
           <select
            className="mt-3 p-2 border rounded"
            value={selectedOption1}
            onChange={handleSelectChange1}
          >
            <option value="Belirtilmemiş">Konut Türü</option>
           <br></br>
           <option value="Daire">Daire</option>

            <option value="Villa">Villa</option>
            <option value="Müstakil Ev">Müstakil Ev</option>
         
            <option value="Residans">Residans</option>

            <option value="Stüdyo Daire">Stüdyo Daire</option>
       
            <option value="Dubleks/Tripleks">Dubleks/Tripleks</option>
         

         <option value="Loft">Loft</option>

<option value="Prefabrik Ev">Prefabrik Ev</option>
<option value="Çiftlik Evi">Çiftlik Evi</option>

<option value="Yatırım Amaçlı">Yatırım Amaçlı</option>

          </select>
   
          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption3}
            onChange={handleSelectChange3}
          >
            <option value="">Oda Sayısı</option><br></br>
           <br></br>
           <option value="1+1">1+1</option>

            <option value="option2">2+1</option>
            <option value="option3">3+1</option>
            
            <option value="option2">4+1 ve üzeri</option>
            <option value="option3">1+0 (Studyo Daire)</option>
          </select>
      

          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption5}
            onChange={handleSelectChange5}
          >
            <option value="">Isınma Sistemi</option>
            <option value="Doğal Gaz">Doğal Gaz</option>
            <option value="Kömür Merkezi Sitem">Kömür Merkezi Sistem</option>
            <option value="Şehir Merkezi">Jeotermal </option>
            <option value="option2"></option>
          </select>

    
          </div>

          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption7}
            onChange={handleSelectChange7}
          >

            

            <option value=""> Asansor durumu</option>
            <option value="Asansör var">Asansor var</option>
            <option value="Asansör yok">Asansor yok</option>

            
          </select>




          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption9}
            onChange={handleSelectChange9}
          >
            <option value="">Otopark durumu</option>
            <option value="Otopark var">Otopark var</option>

            <option value="Otopark yok">Otopark yok</option>

          </select>

          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption11}
            onChange={(e) => setSelectedOption11(e.target.value)}
          >
            <option value="">Bahçe durumu</option>
            <option value="Bahçesiz">Bahçesiz</option>

            <option value="Bahçeli">Bahçesiz</option>

          </select>

          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption13}
            onChange={handleSelectChange13}
          >
            <option value="Şehir Merkezi">Havuz var</option>
            <option value="option2">Havuz yok</option>
          </select>

          
          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption15}
            onChange={(e) => setSelectedOption15(e.target.value)}
          >
            <option value="Şehir Merkezi">Balkon var</option>
            <option value="option2">Balkon yok</option>
          </select>
          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption17}
            onChange={(e) => setSelectedOption17(e.target.value)}
          >
            <option value="Şehir Merkezi">Teras var</option>
            <option value="option2">Teras yok</option>
          </select>
          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption19}
            onChange={(e) => setSelectedOption19(e.target.value)}
          >
            <option value="Şehir Merkezi">Klimalı</option>
            <option value="option2">Klimasız</option>
          </select>


           
          <select
            className="mt-3 p-2 border rounded"
            value={selectedOption21}
            onChange={(e) => setSelectedOption21(e.target.value)}
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
          
          İlanı Yayınla
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