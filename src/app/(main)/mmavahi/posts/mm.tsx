// Bismillahirrahmanirahim
// Elhamdulillahirrabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain.
"use server"
import { StreamChat } from 'stream-chat';




export default async function handleMessageClick  (userId: string, loggedInUserId: string) {
  
  
  
  
  
  
  
  
  
         
  const client = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_KEY!);
  const channel = client.channel("messaging", {
    members: [loggedInUserId, userId],
  });
  await channel.watch();


  const text = "I’m mowing the air Randy, I’m mowing the air.";

const response = await channel.sendMessage({
  text,
  customField: "123",
});
}




