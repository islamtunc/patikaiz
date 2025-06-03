// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbul Alemin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
"use client";
import { useRouter } from "next/navigation";
import { useChatContext } from "stream-chat-react";

interface MessageButtonProps {
  targetUserId: string;
}

export default function MessageButton({ targetUserId }: MessageButtonProps) {
  const router = useRouter();
  const { client } = useChatContext();

  const handleClick = async () => {
    if (!client.userID || client.userID === targetUserId) return;
    // Kanalı oluştur veya varsa getir
    const channel = client.channel("messaging", {
      members: [client.userID, targetUserId],
    });
    await channel.watch();
    // Otomatik "merhaba" mesajı gönder
    await channel.sendMessage({ text: "merhaba" });
    // Kanal oluşturulduktan ve mesaj atıldıktan sonra yönlendir
    router.push(`/messages?userId=${targetUserId}`);
  };

  return (
    <button
      className="w-full rounded bg-primary px-4 py-2 font-semibold text-white hover:bg-primary/90"
      onClick={handleClick}
      type="button"
    >
      Mesaj Gönder
    </button>
  );
}