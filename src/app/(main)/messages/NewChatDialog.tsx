// Bismillahirrahmanirrahim

import LoadingButton from "@/components/LoadingButton";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import UserAvatar from "@/components/UserAvatar";
import useDebounce from "@/hooks/useDebounce";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Check, Loader2, SearchIcon, X } from "lucide-react";
import { useState } from "react";
import { UserResponse } from "stream-chat";
import { DefaultStreamChatGenerics, useChatContext } from "stream-chat-react";
import { useSession } from "../SessionProvider";
import { StreamChat } from 'stream-chat';

interface NewChatDialogProps {
  onOpenChange: (open: boolean) => void;
  onChatCreated: () => void;
  userId: string;
}

export default function NewChatDialog({
  onOpenChange,
  onChatCreated,
  userId,
}: NewChatDialogProps) {
  const { client, setActiveChannel } = useChatContext();

  const { toast } = useToast();

  const { user: loggedInUser } = useSession();

  const handleMessageClick = async () => {
    const client = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_KEY!);
    const channel = client.channel("messaging", {
      members: [loggedInUser.id, userId],
    });
    await channel.create();

    window.location.href = `/messages/${channel.id}`;
  };

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent className="bg-card p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Yeni konuşma başlat</DialogTitle>
        </DialogHeader>
        <DialogFooter className="px-6 pb-6">
          <LoadingButton onClick={handleMessageClick} loading={false}>
            Mesaj Yaz
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}