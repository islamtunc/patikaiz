// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// Suphanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah

"use client"

import { Button } from "@/components/ui/button";
import { Bookmark, Home, User, ShoppingCart, ShoppingBasketIcon } from "lucide-react";
import Link from "next/link";
import { Modal } from "./mmodel";

interface MenuBarProps {
  className?: string;
}

const MenuBar = ({ className }: MenuBarProps) => {
  return (
    <nav
      className={`${className} z-50 bg-white shadow-lg fixed bottom-0 left-0 right-0 md:relative md:top-20 md:sticky md:h-[calc(100vh-5rem)] md:w-64 md:rounded-lg md:shadow-md`}
      aria-label="Main menu"
    >
      <div className="grid grid-cols-4 gap-2 p-2 md:flex md:flex-col md:py-6">
        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center p-2 md:flex-row md:items-center md:justify-start md:gap-3 w-full"
          title="Malper"
          asChild
        >
          <Link href="/malper" className="flex flex-col items-center md:flex-row md:gap-2">
            <Home className="h-6 w-6 text-primary" aria-hidden />
            <span className="sr-only md:not-sr-only md:inline ml-2">Malper</span>
          </Link>
        </Button>
      
        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center p-2 md:flex-row md:items-center md:justify-start md:gap-3 w-full"
          title="Ecibandin"
          asChild
        >
          <Link href="/malper/ecibandin" className="flex flex-col items-center md:flex-row md:gap-2">
            <Bookmark className="h-6 w-6 text-primary" aria-hidden />
            <span className="sr-only md:not-sr-only md:inline ml-2">Ecibandin</span>
          </Link>
        </Button>

        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center p-2 md:flex-row md:justify-start md:gap-3 w-full"
          title="Sepet"
          asChild
        >
        
        </Button>

        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center p-2 md:flex-row md:items-center md:justify-start md:gap-3 w-full"
          title="Profil"
          asChild
        >
          <Link href="/login" className="flex flex-col items-center md:flex-row md:gap-2">
            <User className="h-6 w-6 text-primary" aria-hidden />
            <span className="sr-only md:not-sr-only md:inline ml-2">Profil</span>
          </Link>
        </Button>

        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center p-2 md:flex-row md:items-center md:justify-start md:gap-3 w-full"
          title="Profil"
          asChild
        >
          <Link href="/login" className="flex flex-col items-center md:flex-row md:gap-2">


   <ShoppingBasketIcon className="h-6 w-6 text-primary" aria-hidden />  
            <span className="sr-only md:not-sr-only md:inline ml-2">Profil</span>
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default MenuBar;
