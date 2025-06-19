// Bismillahirrahmanirrahim 
// Elhamdulillahi Rabbil Alamin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber ve Lillahi'l-hamd

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

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    height: '100vh',
    width: '100%',
  };

  const sidebarStyle: React.CSSProperties = {
    width: isMobile ? '100%' : '250px',
    display: isMobile ? (sidebarOpen ? 'block' : 'none') : 'block',
    zIndex: 20,
    background: 'var(--card, #fff)',
    position: isMobile ? 'absolute' : 'static',
    top: 0,
    left: 0,
    height: isMobile ? '100vh' : 'auto',
  };

  const chatContentStyle: React.CSSProperties = {
    flex: isMobile ? 'none' : 1,
    width: '100%',
    position: 'relative',
  };

  return (
    <div style={containerStyle}>
      {/* Mobilde sidebar açma butonu */}
      {isMobile && !sidebarOpen && (
        <button
          className="m-2 rounded bg-primary px-4 py-2 text-white"
          onClick={() => setSidebarOpen(true)}
        >
          Kanallar
        </button>
      )}

      {/* Sidebar */}
      <div style={sidebarStyle}>
        <ChatSidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      {/* Chat içeriği */}
      <div style={chatContentStyle}>
        <ChatChannel
          open={!isMobile || !sidebarOpen}
          openSidebar={() => setSidebarOpen(true)}
        />
        {/* Mobilde sidebar açıksa, içerik gizlensin */}
        {isMobile && sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-10"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
}