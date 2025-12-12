// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber

"use client";

import { useState } from "react";

export default function AdminKargoPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const loginKargo = async () => {
    setLoading(true);
    const res = await fetch("/api/kargo/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-10 flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold">Kargo Paneli — Yönetici</h1>

      <div className="w-full max-w-md flex flex-col gap-4 bg-white p-6 rounded-2xl shadow">
        <input
          className="border p-3 rounded-xl w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-3 rounded-xl w-full"
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginKargo}
          disabled={loading}
          className="bg-black text-white p-3 rounded-xl"
        >
          {loading ? "Bekleyin..." : "Kargoya Giriş Yap"}
        </button>
      </div>

      {result && (
        <pre className="bg-gray-100 p-4 rounded-xl w-full max-w-2xl overflow-auto text-sm">
{JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
