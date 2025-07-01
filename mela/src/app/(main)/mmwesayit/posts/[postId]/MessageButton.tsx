// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbul Alemin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
"use client";
import { useRouter } from "next/navigation";
import { useChatContext } from "stream-chat-react";
import { useState } from "react";

interface MessageButtonProps {
  targetUserId: string;
}

export default function MessageButton({ targetUserId }: MessageButtonProps) {
  const router = useRouter();
  const { client } = useChatContext();
  const [info, setInfo] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      if (!client.userID || client.userID === targetUserId) return;
      const channel = client.channel("messaging", {
        members: [client.userID, targetUserId],
      });
      await channel.watch();
     
      router.push("/messages");
    } catch (err) {
      setInfo("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div>
      <button
        className="w-full rounded bg-primary px-4 py-2 font-semibold text-white hover:bg-primary/90"
        onClick={handleClick}
        type="button"
      >
        Mesaj Gönder
      </button>
      {info && (
        <div className="mt-2 text-sm text-green-600 text-center">
          {info}
        </div>
      )}
    </div>
  );
}