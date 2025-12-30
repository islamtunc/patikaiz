// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
import { kargoFetch } from "@/pirtukxane/tegihisitn";

export async function GET(
  req: Request,
  params: { params: { tracking: string } }
) {
  const { tracking } = params.params;

  const data = await kargoFetch(`/track/${tracking}`);

  return Response.json(data);
}
