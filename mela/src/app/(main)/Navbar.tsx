// Bismillahirahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// SuphanAllah ül Azim ve bihamdihi
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
"use client";

import Link from "next/link";
import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import { useState } from "react";

export default function Navbar() {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-5 py-3">
        {/* Logo */}
        {!searchActive && (
          <Link href="/" className="text-2xl font-bold text-primary whitespace-nowrap">
            Müşterisi Burada
          </Link>
        )}

        {/* Search Field */}
        <div className={`flex-1 flex ${searchActive ? 'justify-center' : 'justify-center md:justify-start md:mx-6'} min-w-0`}>
          <SearchField onActiveChange={setSearchActive} />
        </div>

        {/* User Button */}
        {!searchActive && <UserButton className="sm:ms-auto" />}
      </div>
    </header>
  );
}