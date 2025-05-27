// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbul Alemin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain

"use client";
import React from "react";

interface MessageButtonProps {
  targetUserId: string;
}

const MessageButton: React.FC<MessageButtonProps> = ({ targetUserId }) => {
  const handleClick = () => {
    // Implement your message logic here, e.g., open a chat modal or redirect
    alert(`Start messaging user: ${targetUserId}`);
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