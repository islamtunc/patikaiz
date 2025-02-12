// Bismillahirrahmanirrahim

// Elhamdülillahirabbülalemin 

// Allahu ekber
"use client";

import MmPost from "@/components/mmavahi/mmPost ";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import NewChatDialogClient from "@/components/mmavahi/NewChatDialogClient";

interface PageProps {
  post: any;
  userId: string;
}

export default function Page({ post, userId }: PageProps) {
  const [isChatDialogOpen, setIsChatDialogOpen] = useState(false);

  const handleChatButtonClick = () => {
    setIsChatDialogOpen(true);
  };

  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <MmPost post={post} />
        <Button onClick={handleChatButtonClick}>Mesaj Gönder</Button>
        {isChatDialogOpen && (
          <NewChatDialogClient postUserId={post.user.id} />
        )}
      </div>
    </main>
  );
}