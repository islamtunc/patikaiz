// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbul Alemin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useChatContext } from "stream-chat-react";

interface MessageButtonProps {
  targetUserId: string;
}

const MessageButton: React.FC<MessageButtonProps> = ({ targetUserId }) => {
  const router = useRouter();
  const { client, setActiveChannel } = useChatContext();

  const handleClick = async () => {
    // Kanalı oluştur veya bul
    if (!client.userID || !targetUserId) {
      console.error("User IDs are not defined");
      return;
    }
    const channel = client.channel(
      "messaging",
      undefined,
      { members: [client.userID, targetUserId] }
    );
    await channel.watch();
    setActiveChannel(channel);
    router.push(`/messages?userId=${targetUserId}`);
  };

  return (
    <button
      className="w-full rounded bg-primary px-4 py-2 font-semibold text-white hover:bg-primary/90"
      onClick={handleClick}
      type="button"
    >
      Message
    </button>
  );
};

export default MessageButton;