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
  const envEndpoint = process.env.KARGO_PANELS_SHIP_ENDPOINT ?? "/v1/shipments";

  // try the configured endpoint, but fall back to common alternatives if route not found
  const triedEndpoints = [
    envEndpoint,
    // common alternative endpoints for pricing / shipments
    "/v1/price",
    "/v1/prices",
    "/v1/shipments",
  ].filter((v, i, a) => v && a.indexOf(v) === i); // unique

  let lastRes: Response | null = null;
  let lastText = "";
  let lastContentType = "";

  for (const ep of triedEndpoints) {
    const upstream = `${base.replace(/\/$/, "")}${ep}`;
    try {
      const res = await fetch(upstream, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      lastRes = res;
      lastText = await res.text();
      lastContentType = res.headers.get("content-type") ?? "";

      // if found or other non-404 status, stop trying
      if (res.ok || res.status !== 404) break;
      // otherwise continue to next alternative
    } catch (err) {
      // network error — keep trying alternatives
      lastRes = null;
    }
  }

  if (!lastRes) {
    return NextResponse.json({ error: "Upstream request failed (no response)" }, { status: 502 });
  }

  const parsed = lastContentType.includes("application/json")
    ? (() => {
        try { return JSON.parse(lastText); } catch { return lastText; }
      })()
    : lastText;

  if (!lastRes.ok) return NextResponse.json({ error: parsed }, { status: lastRes.status });
  return NextResponse.json(parsed);
}
