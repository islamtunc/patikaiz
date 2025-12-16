// Bismillahirrahmanirahim
// Elhamdullillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Bismillahirrahmanirahim
// Elhamdullillahirabbulalemin
// SuphanAllahi velhamdulillahi ve la ilahe illAllah u vAllah u Ekber 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah


"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "./malper/Ewlehi";

function Tegihistin() {
  const router = useRouter();
  const { login: sessionLogin } = useSession();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [token, setToken] = useState<string | null>(null);

   async function submit(e: React.FormEvent) {
     e.preventDefault();
     setLoading(true);
     setError(null);

 try {
   const res = await fetch("/api/tegihistin/", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ email, password }),
   });

   const json = await res.json().catch(() => ({ error: "Invalid JSON" }));

   if (!res.ok) {
     setError(json?.error ?? "Login failed");
     return;
   }

   const receivedToken = json?.token ?? json?.access_token ?? null;
   if (receivedToken) {
     setToken(receivedToken);
     // persist in session provider + localStorage (SessionProvider also persists)
     try { sessionLogin(receivedToken); localStorage.setItem("kargo_token", receivedToken); } catch {}
     // redirect after successful login
     router.push("/(navend)/tegihistin/malper"); // adjust target route as needed
   } else {
     setError("No token returned");
   }
 } catch (err: any) {
       setError(err?.message ?? "Request failed");
     } finally {
       setLoading(false);
     }
   }

  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center">Giriş Yap</h2>
          <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta</label>
              <input
                id="email"
                type="email"
                required
                placeholder="E-posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Şifre</label>
              <input
                id="password"
                type="password"
                required
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
            </button>
            {error && <p className="mt-3 text-red-600 text-center">{error}</p>}
            {token && (
              <div className="mt-4 p-3 bg-green-50 border rounded">
                <p className="text-sm">Token alındı. (localStorage içine kaydedildi)</p>
                <pre className="mt-2 text-xs break-words">{token}</pre>
              </div>
            )}
          </form>
        </section>
      </div>
    </main>
  );
}

export default Tegihistin;