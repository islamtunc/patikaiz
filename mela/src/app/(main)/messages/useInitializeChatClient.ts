// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbul Alemin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Allah u Ekber, Allah u Ekber, ve lillahi'l-hamd
import kyInstance from "@/lib/ky";
import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { useSession } from "../SessionProvider";

export default function useInitializeChatClient() {
  const { user } = useSession();
  const [chatClient, setChatClient] = useState<StreamChat | null>(null);

  useEffect(() => {
    const client = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_KEY!);

    client
      .connectUser(
        {
          id: user.id,
          name: user.displayName,
          image: user.avatarUrl,
          user_details: {
            username: user.username,
          },
        },
        async () =>
          kyInstance
            .get("/api/get-token")
            .json<{ token: string }>()
            .then((data) => data.token),
      )
      .then(() => setChatClient(client))
      .catch((error) => console.error("Failed to connect user", error));

    // !!! disconnectUser() KULLANMA !!!
    // return () => {
    //   setChatClient(null);
    //   client.disconnectUser();
    // };

  }, [user.id, user.username, user.displayName, user.avatarUrl]);

  return chatClient;
}