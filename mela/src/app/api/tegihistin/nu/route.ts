// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber

import { NextResponse } from "next/server";

async function getToken() {
  if (process.env.KARGO_PANELS_API_KEY) return process.env.KARGO_PANELS_API_KEY;

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
  return json.access_token ?? json.token ?? json.data?.token ?? null;
}

export async function POST(req: Request) {
  // try parse body (may be empty)
  let body: any = {};
  try { body = await req.json(); } catch {}

  // accept token from Authorization header or body.token/body.apiKey first
  const authHeader = req.headers.get("authorization") ?? req.headers.get("Authorization");
  let token = authHeader ? authHeader.replace(/^Bearer\s+/i, "") : null;
  if (!token && body?.token) token = body.token;
  if (!token && body?.apiKey) token = body.apiKey;

  // fallback to server-side login / API key env
  if (!token) token = await getToken();

  if (!token) {
    return NextResponse.json(
      {
        error:
          "Missing KargoPaneli token. Provide one of:\n" +
          "- KARGO_PANELS_API_KEY env var\n" +
          "- KARGO_PANELS_LOGIN_SECRET / KARGO_PANELS_EMAIL / KARGO_PANELS_PASSWORD env vars\n" +
          "- Authorization: Bearer <token> header\n" +
          "- { token: '<token>' } in request body",
      },
      { status: 401 }
    );
  }

  const base = process.env.KARGO_PANELS_BASE_URL ?? "https://api.kargopaneli.com";
  const endpoint = process.env.KARGO_PANELS_SHIP_ENDPOINT ?? "/v1/shipments";
  const upstream = `${base.replace(/\/$/, "")}${endpoint}`;

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
