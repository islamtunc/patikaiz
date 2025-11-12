// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
"use client";

import React, { useState, type CSSProperties } from "react";
import { useTheme } from "next-themes";
import { StreamChat } from "stream-chat";
import { Chat as StreamChatUI } from "stream-chat-react";
import useInitializeChatClient from "./useInitializeChatClient";
import ChatChannel from "./ChatChannel";
import ChatSidebar from "./ChatSidebar";

export default function ChatPage() {
  // keep resolvedTheme but prefix to silence "declared but never read" warning
  const { resolvedTheme: _resolvedTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // initialize chat client (returns StreamChat | null)
  const chatClient = useInitializeChatClient() as StreamChat | null;
  if (!chatClient) return null;

  // explicit CSSProperties so TS accepts style object
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  return (
    <div style={containerStyle}>
      <ChatSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <StreamChatUI client={chatClient}>
        <ChatChannel open={true} openSidebar={() => setSidebarOpen(true)} />
      </StreamChatUI>
    </div>
  );
}