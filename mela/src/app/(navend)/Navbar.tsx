// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
// La ilahe illallah, Muhammedur Resulullah
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber ve lillahi'l-hamd

"use client";
import { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import UserButton from "@/hemanen/UserButton";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-card shadow-sm">
      <div
        ref={navRef}
        className="mx-auto flex items-center justify-between max-w-7xl px-4 py-3"
      >
        <div className="flex items-center gap-3">
          <Link href="/" className="text-2xl font-bold text-primary">
            Yekazad SC
          </Link>
        </div >

      
  
              <UserButton />
       
      </div>
    </header>
  );
}