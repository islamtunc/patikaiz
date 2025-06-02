// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbul Alemin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u  Ekber ve Lillahi'l Hamd
"use client";
import { Chat } from "stream-chat-react";
import useInitializeChatClient from "./messages/useInitializeChatClient";
// ...diğer importlar...

export default function ChatProviderClient({ children }: { children: React.ReactNode }) {
  const chatClient = useInitializeChatClient();

  if (!chatClient) return <div>Loading chat...</div>;

  return (
    <Chat client={chatClient} theme="str-chat__theme-light">
      {children}
    </Chat>
  );
}