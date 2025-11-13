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
import { ClipboardEvent, useRef, useState } from "react";
import "./styles.css";
import useMediaUpload, { Attachment } from "./useMediaUpload";

export default function PostEditor() {
  const { user } = useSession();
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState<string>("");
  const [sizes, setSizes] = useState<string>("A3"); // comma separated
  const [stock, setStock] = useState<string>("10");
  const [leadTime, setLeadTime] = useState<string>("3-7 iş günü");
  const [category, setCategory] = useState<string>("Duvar Takvimi");
  const [shortDesc, setShortDesc] = useState<string>("");

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
      Placeholder.configure({ placeholder: "Ürün detaylarını (malzeme, baskı, kişiselleştirme vb.) buraya yazın..." }),
    ],
    editorProps: { attributes: { spellCheck: "true" } },
  });

  const longDescription = editor?.getText({ blockSeparator: "\n" }) || "";

  function onPaste(e: ClipboardEvent<HTMLInputElement>) {
    const files = Array.from(e.clipboardData.items)
      .filter((item) => item.kind === "file")
      .map((item) => item.getAsFile()) as File[];
    startUpload(files);
  }

  function resetForm() {
    setProductName("");
    setSku("");
    setPrice("");
    setSizes("A3");
    setStock("10");
    setLeadTime("3-7 iş günü");
    setCategory("Duvar Takvimi");
    setShortDesc("");
    editor?.commands.clearContent();
    resetMediaUploads();
  }

  function onSubmit() {
    if (!productName.trim()) {
      alert("Ürün adı gerekli.");
      return;
    }
    const priceNum = parseFloat(price as string);
    if (isNaN(priceNum) || priceNum <= 0) {
      alert("Geçerli bir fiyat girin.");
      return;
    }

    const product = {
      id: "prod-" + Date.now(),
      seller: user?.id || "unknown",
      name: productName.trim(),
      sku: sku.trim(),
      price: priceNum,
      sizes: sizes.split(",").map((s) => s.trim()).filter(Boolean),
      stock: Number(stock) || 0,
      leadTime: leadTime.trim(),
      category: category.trim(),
      shortDesc: shortDesc.trim(),
      longDesc: longDescription.split("\n").map((l) => l.trim()).filter(Boolean),
      media: attachments.map((a) => ({
        name: a.file.name,
        type: a.file.type,
        size: a.file.size,
      })),
      createdAt: new Date().toISOString(),
    };

    try {
      const raw = localStorage.getItem("seller-products");
      const list = raw ? JSON.parse(raw) : [];
      list.unshift(product);
      localStorage.setItem("seller-products", JSON.stringify(list));
      alert("Ürün kaydedildi (localStorage). Gerçek entegrasyon için API çağrısı ekleyin.");
      resetForm();
    } catch (err) {
      console.error(err);
      alert("Kaydetme sırasında hata oluştu.");
    }
  }

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-card p-3 sm:p-5 shadow-sm text-black w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
        <UserAvatar avatarUrl={user?.avatarUrl} className="hidden sm:inline" />
        <div className="w-full space-y-3">
          <input
            type="text"
            placeholder="Ürün Adı (ör. Doğa Temalı Duvar Takvimi)"
            className="w-full rounded-lg border px-4 py-2"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            maxLength={120}
            required
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="SKU / Kod (opsiyonel)"
              className="rounded-lg border px-4 py-2"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
            />
            <input
              type="text"
              placeholder="Fiyat (TL)"
              className="rounded-lg border px-4 py-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              inputMode="decimal"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Boyutlar (virgülle ayırın, örn: A3,A2)"
              className="rounded-lg border px-4 py-2"
              value={sizes}
              onChange={(e) => setSizes(e.target.value)}
            />
            <input
              type="number"
              placeholder="Stok adedi"
              className="rounded-lg border px-4 py-2"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              min={0}
            />
          </div>
          <input
            type="text"
            placeholder="Teslim süresi / Üretim (ör. 3-7 iş günü)"
            className="w-full rounded-lg border px-4 py-2"
            value={leadTime}
            onChange={(e) => setLeadTime(e.target.value)}
          />
          <input
            type="text"
            placeholder="Kategori (ör. İslami, Doğa, Çocuk...)"
            className="w-full rounded-lg border px-4 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Kısa açıklama (satışta görülecek)"
            className="w-full rounded-lg border px-4 py-2"
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
            maxLength={200}
          />
        </div>
      </div>

      <div {...rootProps} className="w-full">
        <label className="block text-sm text-gray-600 mb-2">Detaylı Ürün Açıklaması</label>
        <EditorContent
          editor={editor}
          className={cn(
            "max-h-[18rem] w-full overflow-y-auto rounded-2xl bg-background px-3 py-3 text-black",
            isDragActive && "outline-dashed",
          )}
          onPaste={onPaste}
        />
        <input {...getInputProps()} />
        <div className="text-sm text-gray-500 mt-2">Görselleri sürükle veya ekleyin (max 10).</div>
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
          loading={false}
          disabled={
            !productName.trim() || !price.trim() || isUploading
          }
          className="min-w-20"
        >
          Ürünü Kaydet
        </LoadingButton>
      </div>
    </div>
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
