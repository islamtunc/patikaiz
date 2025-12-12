// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
"use client";

import { useState } from "react";
import { TrackingResponse } from "@/pirtukxane/types";

export default function TrackPage() {
  const [code, setCode] = useState("");
  const [data, setData] = useState<TrackingResponse | null>(null);
  const [loading, setLoading] = useState(false);

  async function check() {
    setLoading(true);
    const res = await fetch(`/api/kargo/track/${code}`);
    const json = await res.json();
    setData(json);
    setLoading(false);
  }

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Kargo Takip</h1>

      <input
        className="border p-2 w-full rounded mb-4"
        placeholder="Takip kodu gir..."
        value={code}
        onChange={e => setCode(e.target.value)}
      />

      <button
        onClick={check}
        className="bg-blue-600 text-white p-3 rounded w-full"
      >
        {loading ? "Sorgulanıyor..." : "Takip Et"}
      </button>

      {data && (
        <div className="mt-6 bg-gray-100 p-5 rounded">
          <h2 className="text-lg font-bold mb-2">Durum: {data.status}</h2>

          <p className="text-sm mb-4">
            Son Güncelleme: {data.last_update}
          </p>

          <h3 className="font-bold mb-2">Geçmiş Hareketler:</h3>

          <div className="space-y-2">
            {data.events.map((e, i) => (
              <div key={i} className="p-2 bg-white rounded shadow">
                <div className="font-semibold">{e.status}</div>
                <div className="text-sm">{e.location}</div>
                <div className="text-xs text-gray-600">{e.timestamp}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
