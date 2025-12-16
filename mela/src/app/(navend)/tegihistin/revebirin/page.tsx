// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
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

export default function CreateKargoPage() {
  const [form, setForm] = useState({
    recipientName: "",
    recipientPhone: "",
    address: "",
    weight: "0.5",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const res = await fetch("/api/tegihistin/nu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const json = await res.json();
    setResult(json);
    setLoading(false);
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">Yeni Kargo Oluştur</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input required value={form.recipientName} onChange={(e)=>setForm({...form, recipientName: e.target.value})} placeholder="Alıcı isim" className="w-full p-2 border rounded"/>
        <input required value={form.recipientPhone} onChange={(e)=>setForm({...form, recipientPhone: e.target.value})} placeholder="Telefon" className="w-full p-2 border rounded"/>
        <textarea required value={form.address} onChange={(e)=>setForm({...form, address: e.target.value})} placeholder="Adres" className="w-full p-2 border rounded"/>
        <input value={form.weight} onChange={(e)=>setForm({...form, weight: e.target.value})} placeholder="Ağırlık (kg)" className="w-full p-2 border rounded"/>
        <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
          {loading ? "Gönderiliyor..." : "Kargo Oluştur"}
        </button>
      </form>

      {result && (
        <pre className="mt-4 p-3 bg-gray-50 border rounded text-sm">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </main>
  );
}
