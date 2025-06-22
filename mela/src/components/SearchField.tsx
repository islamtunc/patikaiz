// Bismillahirahmanirahim 
// SuphanAllah ül Azim ve bihamdihi
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { useState, useRef } from "react";

export default function SearchField({ onActiveChange }: { onActiveChange?: (active: boolean) => void }) {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.q as HTMLInputElement).value.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    setActive(false);
    onActiveChange?.(false);
  }

  function handleActivate() {
    setActive(true);
    onActiveChange?.(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  function handleDeactivate() {
    setActive(false);
    onActiveChange?.(false);
  }

  // Mobile: show only search icon (cursor style), expand to input on focus/click
  return (
    <form
      onSubmit={handleSubmit}
      method="GET"
      action="/search"
      className="relative"
    >
      <div className="relative">
        {/* Mobile: collapsed state */}
        {!active && (
          <button
            type="button"
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-transparent border-none outline-none"
            tabIndex={0}
            aria-label="Ara"
            onClick={handleActivate}
          >
            <SearchIcon className="size-6 text-muted-foreground cursor-pointer" />
          </button>
        )}
        {/* Expanded input */}
        <Input
          ref={inputRef}
          name="q"
          placeholder={active ? "" : "İlan Ara"}
          className={`pe-10 transition-all duration-200 ${active ? 'w-full opacity-100' : 'w-0 opacity-0 md:w-full md:opacity-100'} md:block bg-background`}
          style={{ minWidth: active ? 120 : 0, paddingLeft: active ? 36 : 0 }}
          onFocus={handleActivate}
          onBlur={handleDeactivate}
          autoComplete="off"
        />
        {/* Desktop icon always visible, mobile only in expanded */}
        <SearchIcon className={`absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground ${active ? '' : 'hidden md:block'}`} />
      </div>
    </form>
  );
}
