// Bismillahirrahmanirrahim 
// Elhamdulillahi Rabbil Alamin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber ve Lillahi'l-hamd
// HasbunAllahu ve ni'mel vekil
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'lhamd
// Elhamdulillahi Rabbil Alamin
"use client";

import { Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import ChatChannel from "./ChatChannel";
import ChatSidebar from "./ChatSidebar";

export default function Chat() {
  const { resolvedTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={
        isMobile
          ? "absolute inset-x-0 top-0 z-[100] flex flex-col w-full h-[calc(100dvh-55px)] min-h-0 bg-background"
          : "flex flex-row w-full h-screen min-h-0 bg-background"
      }
    >
      {/* Sidebar */}
      <div
        className={
          isMobile
            ? `fixed top-0 left-0 h-full w-4/5 max-w-[320px] z-10 transition-transform duration-300 bg-card shadow-lg ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
            : "w-80 min-w-[250px] h-full border-r bg-card"
        }
        style={isMobile ? { minHeight: 0 } : {}}
      >
        <ChatSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
      {/* Mobilde sidebar açıksa, içerik karartılsın */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-0"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Chat içeriği */}
      <div
        className={
          isMobile
            ? `flex-1 w-full h-full min-h-0 ${sidebarOpen ? 'hidden' : 'block'}`
            : "flex-1 w-full h-full min-h-0"
        }
        style={isMobile ? { minHeight: 0, paddingBottom: 55 } : { minHeight: 0 }}
      >
        <ChatChannel open={!isMobile || !sidebarOpen} openSidebar={() => setSidebarOpen(true)} />
      </div>
    </div>
  );
}