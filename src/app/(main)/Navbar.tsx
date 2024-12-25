// Bismillahirahmanirahim 

// Elhamdulillahirabbilalemin.
// Es-selatu vesselamu ala rasulina muhammedin ve ala alihi ve sahbihi ecmain.
"use client"
import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Link from "next/link";
import { use } from "react";
import { useSession } from "./SessionProvider";

export default function Navbar() { 





  const { user } = useSession();
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
        <Link href="/" className="text-2xl font-bold text-primary">
             Müşterisi Burada
       </Link>
      {user ? <UserButton /> : <Link href="/login">Giriş yap</Link>}

        <SearchField />

      </div>
    </header>
  );
}
