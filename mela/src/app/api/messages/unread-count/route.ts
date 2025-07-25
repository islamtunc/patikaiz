// Bismillahirahmanirahim 
// Elhamdulillahi Rabbul Alemin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Subhanallah Elhamdulillah Allahu Ekber
// HasbunAllahu ve ni'mel vekil
// Allah u Ekber, Allah u Ekber, ve lillahi'l-hamd
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah



import { validateRequest } from "@/auth";
import streamServerClient from "@/lib/stream";
import { MessageCountInfo } from "@/lib/types";

export async function GET() {
  try {
    const { user } = await validateRequest();

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("user.id:", user.id);
    const { total_unread_count } = await streamServerClient.getUnreadCount(
      user.id,
    );
    console.log("total_unread_count:", total_unread_count);

    const data: MessageCountInfo = {
      unreadCount: total_unread_count,
    };

    return Response.json(data);
  } catch (error) {
    console.error("unread-count error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
