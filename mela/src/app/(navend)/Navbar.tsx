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
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/mmdashboard" className="text-sm font-medium text-secondary hover:text-primary">
            
          </Link>
          <Link href="/danegeh" className="text-sm font-medium text-secondary hover:text-primary">
            Veritabanı
          </Link>

          <div className="flex items-center gap-3">
            <Dropdown>
              <Dropdown.Toggle variant="link" className="text-sm font-medium text-secondary hover:text-primary px-0">
                Blog
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} href="/posts">Blog Yazıları</Dropdown.Item>
                <Dropdown.Item as={Link} href="/posts/new">Yeni Blog Yazısı</Dropdown.Item>
                <Dropdown.Item as={Link} href="/categories">Categories</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="link" className="text-sm font-medium text-secondary hover:text-primary px-0">
                Settings
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} href="/settings/profile">Profil Ayarları</Dropdown.Item>
                <Dropdown.Item as={Link} href="/settings/security">Güvenlik Ayarları</Dropdown.Item>
                <Dropdown.Item as={Link} href="/settings/notifications">Bildirim Ayarları</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Link href="/reports" className="text-sm font-medium text-secondary hover:text-primary">
            Raporlar
          </Link>
        </nav>

        <div className="hidden sm:flex sm:items-center sm:ms-auto">
          <UserButton />
        </div>

        <button
          className="lg:hidden p-2 rounded text-green-500"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Kapat" : "Menüyü Aç"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu — no semi-opaque backdrop, responsive and scrollable */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] z-30 transform transition-transform duration-200 ${
          menuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* No opaque overlay here (bg-transparent) so menu appears without backdrop opacity */}
        <div
          className="absolute inset-0 bg-transparent"
          onClick={() => setMenuOpen(false)}
        />
        <nav className="relative bg-card p-4 shadow-lg max-h-[calc(100vh-64px)] overflow-auto">
          <div className="flex flex-col gap-2">
            <Link href="/mmdashboard" className="block px-3 py-2 rounded hover:bg-muted" onClick={handleLinkClick}>
              Dashboard
            </Link>
            <Link href="/users" className="block px-3 py-2 rounded hover:bg-muted" onClick={handleLinkClick}>
              Kullanıcılar
            </Link>

            <div className="border-t my-2" />

            <div className="flex flex-col gap-1">
         

            
            </div>

            <Link href="/reports" className="block px-3 py-2 rounded hover:bg-muted" onClick={handleLinkClick}>
              Raporlar
            </Link>

            <div className="mt-3 border-t pt-3">
              <UserButton />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}