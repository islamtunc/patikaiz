// Bismillahirrahmanirrahim 



import { StreamChat } from "stream-chat";

const streamServerClient = StreamChat.getInstance(
  process.env.NEXT_STREAM!,
  process.env.STREAM_SECRET,
);

export default streamServerClient;
