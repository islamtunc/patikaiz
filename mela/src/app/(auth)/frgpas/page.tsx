// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecma'in
// Allahu Ekber velilahi'lhamd
// SubhanAllahi velhamdulillahi ve la ilahe illallahu vallahu ekber
// La ilahe illallah, Allahu Ekber Allahu Ekber, ve lillahi
"use client";
import Link from "next/link";
import { useState } from "react";



export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      // Simulate API call
      await new Promise((res) => setTimeout(res, 1200));
      // TODO: Replace with real API call
      setSuccess(true);
    } catch (err) {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex flex-col gap-6 rounded-2xl bg-card p-10 shadow-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Şifre Sıfırlama</h1>
        {success ? (
          <div className="text-green-600 text-center font-semibold">
            Sıfırlama linki e-posta adresinize gönderildi.
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="w-full rounded-lg border px-4 py-2"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-2 text-white font-semibold hover:bg-primary/90 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Gönderiliyor..." : "Sıfırlama Linki Gönder"}
            </button>
            {error && <div className="text-red-600 text-center">{error}</div>}
          </form>
        )}
        <Link
          href="/login"
          className="text-center text-sm text-muted-foreground hover:underline"
        >
          Girişe Dön
        </Link>
      </div>
    </main>
  );
}
