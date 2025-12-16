// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const payload = await req.json();

  const apiKey = process.env.KARGO_PANELS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing server API key" }, { status: 500 });
  }

  // TODO: uyarlayın: gerçek KargoPaneli endpoint ve body shape dokümana göre değişebilir
  const upstreamUrl = "https://api.kargopaneli.com/v1/shipments";

  const res = await fetch(upstreamUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Dokümana göre header değişebilir; çoğu durumda Bearer token kullanılır
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.text();
  const contentType = res.headers.get("content-type") ?? "";

  // Try parse JSON if possible
  let parsed: any = data;
  if (contentType.includes("application/json")) {
    try { parsed = JSON.parse(data); } catch {}
  }

  if (!res.ok) return NextResponse.json({ error: parsed }, { status: res.status });

  return NextResponse.json(parsed);
}