// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
"use client";

import { useState } from "react";

interface PriceResponse {
  total_price: number;
  currency: string;
  [key: string]: any;
}

export default function PricePage() {
  const [data, setData] = useState<PriceResponse | null>(null);

  async function calculate() {
    const res = await fetch("/api/tegihistin/muce", {
      method: "POST",
      body: JSON.stringify({
        origin_country: "TR",
        destination_country: "US",
        weight: 2.5,
        length: 30,
        width: 20,
        height: 15,
      }),
    });

    setData(await res.json());
  }

  return (
    <div className="p-10">
      <button
        onClick={calculate}
        className="bg-blue-600 text-white p-3 rounded"
      >
        Fiyat Hesapla
      </button>

      {data && (
        <pre className="mt-5 bg-gray-900 text-white p-5 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
