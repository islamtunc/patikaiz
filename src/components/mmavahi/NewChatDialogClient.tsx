// Bismillahirrahmanirrahim

// Elhamdülillahirabbülalemin 
// Es Salatu Es Selamu Ala Rasulina Muhammedin ve Ala Alihi ve Sahbihi Ecmain.

"use client";

import { useState } from "react";
import { NewChatDialog } from "@/app/(main)/messages/NewChatDialog";

interface NewChatDialogClientProps {
  postUserId: string;
}

const NewChatDialogClient: React.FC<NewChatDialogClientProps> = ({ postUserId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleChatCreated = () => {
    setIsOpen(false);
    // handle chat created
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Yeni Konuşma Başlat</button>
      <NewChatDialog 
        onOpenChange={handleOpenChange} 
        onChatCreated={handleChatCreated} 
        userId={postUserId} 
        isOpen={isOpen}
      />
    </>
  );
};

export default NewChatDialogClient;