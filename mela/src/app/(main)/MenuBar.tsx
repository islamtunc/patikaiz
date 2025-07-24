// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecma'in
// Allahu Ekber velilahi'lhamd
// SubhanAllahi ve bihamdi, SubhanAllahil Azim
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah


import { validateRequest } from "@/auth";
import { Button } from "@/components/ui/button";
import streamServerClient from "@/lib/stream";
import { Bookmark, Home } from "lucide-react";
import Link from "next/link";
import MessagesButton from "./MessagesButton";

// Bildirim (notification) ile ilgili hiçbir kod yok, ek bir kaldırma gerekmez.

interface MenuBarProps {
  className?: string;
}

export default async function MenuBar({ className }: MenuBarProps) {
  const { user } = await validateRequest();

  if (!user) return null;

  const unreadMessagesCount = (await streamServerClient.getUnreadCount(user.id)).total_unread_count;

  return (
    <div className={className}>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Home"
        asChild
      >
        <Link href="/">
          <Home />
          <span className="hidden lg:inline">Anasayfa</span>
        </Link>
      </Button>
      <MessagesButton initialState={{ unreadCount: unreadMessagesCount }} />
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Bêrika We"
        asChild
      >
        <Link href="/bookmarks">
          <Bookmark />
          <span className="hidden lg:inline">Favoriler</span>
        </Link>
      </Button>
    </div>
  );
}
