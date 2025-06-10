// Bismillahirrahmanirahim 
// Elhamdulillahi Rabbul Alemin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah


import { StreamChat } from "stream-chat";

// Sunucu tarafında sadece API_KEY ve SECRET kullanılmalı!
const streamServerClient = StreamChat.getInstance(
  process.env.NEXT_PUBLIC_STREAM_API_KEY!,   // DİKKAT: NEXT_PUBLIC değil!
  process.env.STREAM_API_SECRET! // DİKKAT: SECRET!
);

export default streamServerClient;
