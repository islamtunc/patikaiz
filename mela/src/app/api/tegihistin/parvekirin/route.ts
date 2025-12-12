// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
import { kargoFetch } from "@/pirtukxane/tegihisitn";

export async function POST(req: Request) {
  const body = await req.json();

  const data = await kargoFetch("/shipments", {
    method: "POST",
    body,
  });

  return Response.json(data);
}
