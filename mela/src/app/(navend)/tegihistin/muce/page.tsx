// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
"use client";

import React, { useState } from "react";

interface PriceResponse {
  total_price?: number;
  currency?: string;
  [key: string]: any;
}

export default function PricePage() {
  const [origin, setOrigin] = useState("TR");
  const [destination, setDestination] = useState("US");
  const [weight, setWeight] = useState("2.5");
  const [length, setLength] = useState("30");
  const [width, setWidth] = useState("20");
  const [height, setHeight] = useState("15");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PriceResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function calculate() {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch("/api/tegihistin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          origin_country: origin,
          destination_country: destination,
          weight: parseFloat(weight),
          length: parseFloat(length),
          width: parseFloat(width),
          height: parseFloat(height),
        }),
      });

      const json = await res.json().catch(() => ({ error: "Invalid JSON response" }));

      if (!res.ok) {
        setError(JSON.stringify(json));
      } else {
        setData(json);
      }
    } catch (err: any) {
      setError(err?.message ?? "Request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Kargo Fiyat Hesapla</h1>

      <div className="space-y-3 mb-4">
        <div className="flex gap-2">
          <input className="flex-1 p-2 border rounded" value={origin} onChange={(e)=>setOrigin(e.target.value)} placeholder="Gönderen ülke (ISO)" />
          <input className="flex-1 p-2 border rounded" value={destination} onChange={(e)=>setDestination(e.target.value)} placeholder="Alıcı ülke (ISO)" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <input className="p-2 border rounded" value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder="Ağırlık (kg)" />
          <input className="p-2 border rounded" value={length} onChange={(e)=>setLength(e.target.value)} placeholder="Uzunluk (cm)" />
          <input className="p-2 border rounded" value={width} onChange={(e)=>setWidth(e.target.value)} placeholder="Genişlik (cm)" />
          <input className="p-2 border rounded col-span-3" value={height} onChange={(e)=>setHeight(e.target.value)} placeholder="Yükseklik (cm)" />
        </div>

        <button
          onClick={calculate}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Hesaplanıyor..." : "Hesapla"}
        </button>
      </div>

      {error && <pre className="text-red-600 mb-4">{error}</pre>}

      {data && (
        <section className="bg-white p-4 rounded shadow">
          <h2 className="font-medium mb-2">Sonuç</h2>
          <div className="text-sm">
            {data.total_price !== undefined && (
              <p>
                Fiyat: <strong>{data.total_price} {data.currency ?? "TRY"}</strong>
              </p>
            )}
            <pre className="mt-2 overflow-auto text-xs">{JSON.stringify(data, null, 2)}</pre>
          </div>
        </section>
      )}
    </main>
  );
}
