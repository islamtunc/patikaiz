// Bismillahirahmanirahim 
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
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

export default function PostEditor() {
  const { user } = useSession();

  // Emlak ilanı için ek alanlar
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("satilik");
  const [address, setAddress] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState<{ lat: number; lng: number; city?: string } | null>(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

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
        placeholder: "İlan açıklaması (ör: 3+1 daire, yeni tadilatlı, merkezi konum...)",
      }),
    ],
  });

  const description =
    editor?.getText({
      blockSeparator: "\n",
    }) || "";

  function onSubmit() {
    // Tüm inputları bir dizi olarak content'e ekle
    const contentArr = [
      title,
      price,
      category,
      address,
      whatsapp,
      contact,
      location?.city || city || "",
      location ? `${location.lat},${location.lng}` : "",
      description,
    ];
    mutation.mutate(
      {
        content: JSON.stringify(contentArr),
        mediaIds: attachments.map((a) => a.mediaId).filter(Boolean) as string[],
        title,
        price,
        category,
        address,
        whatsapp,
        contact,
        city: location?.city || city || "",
        lat: location?.lat ?? 0,
        lng: location?.lng ?? 0,
        description,
      },
      {
        onSuccess: () => {
          setTitle("");
          setPrice("");
          setCategory("satilik");
          setAddress("");
          setWhatsapp("");
          setContact("");
          setCity("");
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

  async function handleLocationSearch(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLoading(true);
    if (!navigator.geolocation) {
      alert("Tarayıcınız konum servisini desteklemiyor.");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        // OpenStreetMap Nominatim ile reverse geocoding
        let city = "";
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`);
          const data = await res.json();
          city = data.address?.city || data.address?.town || data.address?.village || data.address?.state || "";
        } catch {}
        setLocation({ lat, lng, city });
        setLoading(false);
      },
      (err) => {
        alert("Konum alınamadı: " + err.message);
        setLoading(false);
      }
    );
  }

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex gap-5">
        <UserAvatar avatarUrl={user.avatarUrl} className="hidden sm:inline" />
        <div className="w-full space-y-3">
          <input
            type="text"
            placeholder="İlan Başlığı"
            className="w-full rounded-lg border px-4 py-2"
            value={title}
            onChange={e => setTitle(e.target.value)}
            maxLength={100}
            required
          />
          <div className="flex gap-3">
            <input
              type="number"
              placeholder="Fiyat (₺)"
              className="w-1/2 rounded-lg border px-4 py-2"
              value={price}
              onChange={e => setPrice(e.target.value)}
              min={0}
              required
            />
            <select
              className="w-1/2 rounded-lg border px-4 py-2"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="satilik">Satılık</option>
              <option value="kiralik">Kiralık</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Adres"
            className="w-full rounded-lg border px-4 py-2"
            value={address}
            onChange={e => setAddress(e.target.value)}
            maxLength={200}
            required
          />
        </div>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="WhatsApp Numarası (örn: 05XXXXXXXXX)"
          className="w-1/2 rounded-lg border px-4 py-2"
          value={whatsapp}
          onChange={e => setWhatsapp(e.target.value)}
          maxLength={20}
        />
        <input
          type="text"
          placeholder="İletişim Bilgisi (örn: e-posta veya telefon)"
          className="w-1/2 rounded-lg border px-4 py-2"
          value={contact}
          onChange={e => setContact(e.target.value)}
          maxLength={50}
        />
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleLocationSearch}
          className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground hover:bg-muted/80"
          disabled={loading}
        >
          {loading ? "Konum Alınıyor..." : "Konumumu Al"}
        </button>
        {location && (
          <span className="text-xs text-muted-foreground">
            Konumunuz: {location.lat.toFixed(5)}, {location.lng.toFixed(5)}
            {location.city && ` (${location.city})`}
          </span>
        )}
      </div>
      <div {...rootProps} className="w-full">
        <EditorContent
          editor={editor}
          className={cn(
            "max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3",
            isDragActive && "outline-dashed",
          )}
          onPaste={onPaste}
        />
        <input {...getInputProps()} />
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
          disabled={isUploading || attachments.length >= 10}
        />
        <LoadingButton
          onClick={onSubmit}
          loading={mutation.isPending}
          disabled={
            !title.trim() ||
            !price.trim() ||
            !address.trim() ||
            !description.trim() ||
            isUploading
          }
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
