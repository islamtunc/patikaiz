// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
import { NextResponse } from "next/server";

async function getToken() {
  // prefer direct API key
  if (process.env.KARGO_PANELS_API_KEY) return process.env.KARGO_PANELS_API_KEY;

  // otherwise perform login to obtain a temporary token
  const secret = process.env.KARGO_PANELS_LOGIN_SECRET;
  const email = process.env.KARGO_PANELS_EMAIL;
  const password = process.env.KARGO_PANELS_PASSWORD;
  if (!secret || !email || !password) return null;

  const res = await fetch("https://api.kargopaneli.com/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${secret}`,
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) return null;
  const json = await res.json();
  // adjust property access to the field the API returns (access_token / token / data.token)
  return json.access_token ?? json.token ?? json.data?.token ?? null;
}

export async function POST(req: Request) {
  const body = await req.json();

  const token = await getToken();
  if (!token) {
    return NextResponse.json(
      { error: "Missing KargoPaneli credentials or API key on server" },
      { status: 500 }
    );
  }

  // call price endpoint (adjust path per docs)
  const upstream = "https://api.kargopaneli.com/v1/price";
  const res = await fetch(upstream, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  const contentType = res.headers.get("content-type") ?? "";
  const parsed = contentType.includes("application/json") ? JSON.parse(text) : text;

  if (!res.ok) return NextResponse.json({ error: parsed }, { status: res.status });
  return NextResponse.json(parsed);
}
