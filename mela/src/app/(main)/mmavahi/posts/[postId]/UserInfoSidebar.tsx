// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbul Alemin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u  Ekber ve Lillahi'l Hamd
// La ilahe illallah, Allahu Ekber, Allahu Ekber, Allahu Ekber
// SubhAnAllah, SubhanAllah, SubhanAllah, ve'l-hamd
"use client";
import Link from "next/link";
import Linkify from "@/components/Linkify";
import UserAvatar from "@/components/UserAvatar";
import UserTooltip from "@/components/UserTooltip";
import dynamic from "next/dynamic";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import type { UserData } from "@/lib/types";

// Update the import path below if MessageButton is located elsewhere
const MessageButton = dynamic(() => import("./MessageButton"), { ssr: false });

interface UserInfoSidebarProps {
  user: UserData;
  loggedInUserId: string;
}

export default function UserInfoSidebar({ user, loggedInUserId }: UserInfoSidebarProps) {
  const whatsapp = user.whatsapp ?? "";
  const contact = user.contact ?? "";

  if (!loggedInUserId) return null;

  return (
    <div className="space-y-5 rounded-2xl bg-card p-5 shadow-sm">
      <div className="text-xl font-bold">Bu kullanıcı hakkında</div>
      <UserTooltip user={user}>
        <Link
          href={`/users/${user.username}`}
          className="flex items-center gap-3"
        >
          <UserAvatar avatarUrl={user.avatarUrl} className="flex-none" />
          <div>
            <p className="line-clamp-1 break-all font-semibold hover:underline">
              {user.displayName}
            </p>
            <p className="line-clamp-1 break-all text-muted-foreground">
              @{user.username}
            </p>
          </div>
        </Link>
      </UserTooltip>
      <Linkify>
        <div className="line-clamp-6 whitespace-pre-line break-words text-muted-foreground">
          {user.bio}
        </div>
      </Linkify>
      {/* WhatsApp ve Telefon ikonları */}
      {(whatsapp || contact) && (
        <div className="flex flex-col gap-2 mt-2">
          {whatsapp && typeof whatsapp === "string" && (
            <div className="flex items-center gap-2 text-green-600">
              <FaWhatsapp size={20} />
              <span className="font-medium">WhatsApp:</span>
              <a
                href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {whatsapp}
              </a>
            </div>
          )}
          {contact && typeof contact === "string" && (
            <div className="flex items-center gap-2 text-blue-600">
              <FaPhone size={20} />
              <span className="font-medium">Telefon:</span>
              <a
                href={`tel:${contact}`}
                className="hover:underline"
              >
                {contact}
              </a>
            </div>
          )}
        </div>
      )}
      {loggedInUserId !== user.id && (
        <MessageButton targetUserId={user.id} />
      )}
    </div>
  );
}

