// Bismillahirrahmanirrahim 
// Elhamdulillahi Rabbil Alamin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber ve Lillahi'l-hamd
"use client";

import { Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Chat as StreamChat } from "stream-chat-react";
import ChatChannel from "./ChatChannel";
import ChatSidebar from "./ChatSidebar";
import useInitializeChatClient from "./useInitializeChatClient";

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
    flexDirection: isMobile ? 'column' as const : 'row' as const,
    height: '100vh',
  };

  const sidebarStyle = {
    width: isMobile ? '100%' : '250px',
  };

  const chatContentStyle = {
    flex: isMobile ? 'none' : 1,
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <ChatSidebar open={false} onClose={function (): void {
          throw new Error("Function not implemented.");
        }} />
      </div>
      <div style={chatContentStyle}>
        <ChatChannel open={false} openSidebar={function (): void {
          throw new Error("Function not implemented.");
        }} />
      </div>
    </div>
  );
}