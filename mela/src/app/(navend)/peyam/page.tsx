// Bismillahirrahmanirrahim
// Elhamdu lillahi rabbil alamin
// Esselatu vesselamu ala rasulillah 
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber

"use client";

import React, { useState } from "react";

export default function PeyamPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/mmmpeyam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setError((data && (data.error || data.message)) || `Hata: ${res.status}`);
        return;
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError(err?.message ?? "İstek başarısız oldu.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Bizimle iletişime geçin</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">İsim</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border rounded p-2"
            placeholder="Adınız"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">E-posta</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border rounded p-2"
            placeholder="mail@ornek.com"
            type="email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Mesaj</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full border rounded p-2 min-h-[120px]"
            placeholder="Mesajınız..."
            required
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-60"
          >
            {loading ? "Gönderiliyor..." : "Gönder"}
          </button>

          {success && <span className="text-green-600">Mesaj gönderildi.</span>}
          {error && <span className="text-red-600">{error}</span>}
        </div>
      </form>
    </main>
  );
}
