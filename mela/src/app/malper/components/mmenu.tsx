// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// Suphanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah

import { Button } from "@/components/ui/button";
import { Bookmark, Home, Mail, ShoppingCart } from "lucide-react";
import Link from "next/link";

interface MenuBarProps {
  className?: string;
}

const MenuBar = ({ className }: MenuBarProps) => {
  return (
    <nav className={`${className} fixed bottom-0 left-0 right-0 bg-white shadow-lg md:relative md:bg-transparent md:shadow-none`}>
      <div className="grid grid-cols-4 gap-2 p-4 md:flex md:flex-col">
        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center p-2 md:flex-row md:justify-start md:gap-3"
          title="Malper"
          asChild
        >
          <Link href="/malper" className="flex flex-col items-center md:flex-row md:gap-2">
            <Home className="h-6 w-6 text-primary" />
          </Link>
        </Button>
      
        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center p-2 md:flex-row md:justify-start md:gap-3"
          title="Yorumlar"
          asChild
        >
          <Link href="/malper/ecibandin" className="flex flex-col items-center md:flex-row md:gap-2">
            <Bookmark className="h-6 w-6 text-primary" />
          </Link>
        </Button>

        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center p-2 md:flex-row md:justify-start md:gap-3"
          title="Peyam"
          asChild
        >
          <Link href="/malper/peyam" className="flex flex-col items-center md:flex-row md:gap-2">
            <Mail className="h-6 w-6 text-primary" />
          </Link>
        </Button>

        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center p-2 md:flex-row md:justify-start md:gap-3"
          title="Sepet"
          asChild
        >
          <Link href="/malper/sepet" className="flex flex-col items-center md:flex-row md:gap-2">
            <ShoppingCart className="h-6 w-6 text-primary" />
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default MenuBar;
