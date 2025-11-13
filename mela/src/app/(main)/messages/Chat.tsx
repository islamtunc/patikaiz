// Bismillahirrahmanirrahim 

"use client";

import { Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Chat as StreamChat } from "stream-chat-react";
import ChatChannel from "./ChatChannel";
import ChatSidebar from "./ChatSidebar";
import useInitializeChatClient from "./useInitializeChatClient";

export default function Chat() {
  const chatClient = useInitializeChatClient();
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

  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
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
        <ChatSidebar />
      </div>
      <div style={chatContentStyle}>
        <StreamChat client={chatClient}>
          <ChatChannel />
        </StreamChat>
      </div>
    </div>
  );
}