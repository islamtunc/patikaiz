// Bismillahirrahmanirahim
// Elhamdullillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Bismillahirrahmanirahim
// Elhamdullillahirabbulalemin
// SuphanAllahi velhamdulillahi ve la ilahe illAllah u vAllah u Ekber 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
"use client";

import { useState } from "react";

export default function Rupel() {
  const [tn, setTn] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  async function query() {
    if (!tn) return;
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch(`/api/kargo/track?tn=${encodeURIComponent(tn)}`);
      const json = await res.json();
      if (!res.ok) {
        setError(JSON.stringify(json));
      } else {
        setResult(json);
      }
    } catch (e: any) {
      setError(e?.message ?? "Request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">Kargo Takip</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={tn}
          onChange={(e) => setTn(e.target.value)}
          placeholder="Takip numarası"
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={query}
          disabled={loading || !tn}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Sorgulanıyor..." : "Sorgula"}
        </button>
      </div>

      {error && <pre className="text-red-600 mb-4">{error}</pre>}

      {result && (
        <section className="bg-white p-4 rounded shadow">
          <h2 className="font-medium mb-2">Sonuç</h2>
          <pre className="text-sm overflow-auto">{JSON.stringify(result, null, 2)}</pre>
        </section>
      )}
    </main>
  );
}