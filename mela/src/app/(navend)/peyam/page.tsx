// Bismillahirrahmanirrahim
// Elhamdu lillahi rabbil alamin
// Esselatu vesselamu ala rasulillah 
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber

"use client";

import React, { useEffect, useState } from "react";

type Peyam = {
  id: string;
  name?: string;
  email?: string;
  message?: string;
  createdAt?: string;
  [key: string]: any;
};

export default function PeyamPageAdmin() {
  const [items, setItems] = useState<Peyam[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/mmmpeyam");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setItems(Array.isArray(json) ? json : []);
    } catch (e: any) {
      setError(e?.message || "Yükleme hatası");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Gelen Mesajlar (Admin)</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={load}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            disabled={loading}
          >
            {loading ? "Yükleniyor..." : "Yenile"}
          </button>
        </div>
      </header>

      {error && <div className="text-red-600 mb-3">{error}</div>}

      {!items || items.length === 0 ? (
        <div className="text-muted">Henüz mesaj yok.</div>
      ) : (
        <ul className="space-y-3">
          {items.map((m) => (
            <li
              key={m.id}
              className="border rounded p-3 bg-white shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm text-gray-700">
                    <strong>{m.name ?? "Anonim"}</strong>{" "}
                    <span className="text-xs text-gray-400">— {m.email ?? ""}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {m.createdAt ? new Date(m.createdAt).toLocaleString() : ""}
                  </div>
                  <div className="mt-2 text-sm text-gray-800">
                    {m.message ? (m.message.length > 120 ? m.message.slice(0, 120) + "…" : m.message) : ""}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => setOpenId(openId === m.id ? null : m.id)}
                    className="px-2 py-1 text-sm bg-blue-600 text-white rounded"
                  >
                    {openId === m.id ? "Kapat" : "Oku"}
                  </button>
                </div>
              </div>

              {openId === m.id && (
                <div className="mt-3 border-t pt-3 text-sm text-gray-800 whitespace-pre-wrap">
                  {m.message ?? "(mesaj yok)"}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
