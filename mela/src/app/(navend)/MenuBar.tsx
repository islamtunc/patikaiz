// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin 
// Suphanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah

// @ts-ignore: missing type declarations for module alias "@/auth"
import { validateRequest } from "@/auth";
import {  CarIcon, Home, Mail } from "lucide-react";
import Link from "next/link";

interface MenuBarProps {
  className?: string;
}

export default async function MenuBar({ className }: MenuBarProps) {
  const { user } = await validateRequest();

  if (!user) return null ;

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
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>
    
    

      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="messages"
        asChild
      >
        <Link href="/peyam">
          <Mail />
          <span className="hidden lg:inline">Messages</span>
        </Link>
      </Button>
       <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="messages"
        asChild
      >
        <Link href="/tegihistin">
          <CarIcon />
          <span className="hidden lg:inline">Kargo</span>
        </Link>
      </Button>
    </div>
  );
}
