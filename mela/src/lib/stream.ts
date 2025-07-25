// Bismillahirrahmanirahim 
// Elhamdulillahi Rabbul Alemin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Subhanallah Elhamdulillah Allahu Ekber
// HasbunAllahu ve ni'mel vekil
// Allah u Ekber, Allah u Ekber, ve lillahi'l-hamd
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah


import { StreamChat } from "stream-chat";

// Sunucu tarafında sadece API_KEY ve SECRET kullanılmalı!
const streamServerClient = StreamChat.getInstance(
  process.env.NEXT_PUBLIC_STREAM_API_KEY!,
  process.env.STREAM_API_SECRET!
);

// Timeout ayarını artırmak için:
streamServerClient.axiosInstance.defaults.timeout = 10000; // 10 saniye

export default streamServerClient;
