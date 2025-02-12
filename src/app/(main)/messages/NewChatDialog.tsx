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
import { useEffect } from "react";
import { StreamChat } from 'stream-chat';
import { useSession } from "../SessionProvider";
import { DefaultStreamChatGenerics, useChatContext } from "stream-chat-react";

interface NewChatDialogProps {
  onOpenChange: (open: boolean) => void;
  onChatCreated: () => void;
  userId: string;
  isOpen: boolean;
}

export const NewChatDialog: React.FC<NewChatDialogProps> = ({ onOpenChange, onChatCreated, userId, isOpen }) => {
  const { client, setActiveChannel } = useChatContext(); // Ensure setActiveChannel is imported correctly
  const { toast } = useToast();
  const { user: loggedInUser } = useSession();

  const handleCreateChat = async () => {
    try {
      const client = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_KEY!);

      // Replace this with your production token generation logic
      const response = await fetch('/api/get-token', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Token request failed');
      }

      const data = await response.json();
      const token = data.token;

      await client.connectUser(
        {
          id: loggedInUser.id,
          name: loggedInUser.name,
          image: loggedInUser.image,
        },
        token
      );

      const channel = client.channel("messaging", {
        members: [loggedInUser.id, userId],
      });
      await channel.create();
      setActiveChannel(channel); // Ensure setActiveChannel is used correctly
      onChatCreated();
      window.location.href = `/messages/${channel.id}`;
    } catch (error) {
      console.error("Konuşma başlatılamadı", error);
      toast({
        variant: "destructive",
        description: "Konuşma başlatılamadı, tekrar deneyin",
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Logic to open the dialog
    } else {
      // Logic to close the dialog
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Yeni konuşma başlat</DialogTitle>
        </DialogHeader>
        
        <DialogFooter className="px-6 pb-6">
          <LoadingButton
            loading={false}
            onClick={handleCreateChat}
          >
            Başla
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}