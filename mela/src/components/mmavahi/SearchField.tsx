// Bismillahirahmanirahim 
// Elhamdulillahirabbulalemin
// Essalatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allahu Ekber velilahi'lhamd
// SubhanAllahi velhamdulillahi ve la ilahe illallahu vallahu ekber
// La ilahe illallah, Allahu Ekber Allahu Ekber, ve lillahi'lhamd

"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import React from "react";

export default function SearchField() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState<any[]>([]);
  const [searching, setSearching] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.q as HTMLInputElement).value.trim();
    if (!q) return;
    setSearching(true);
    const res = await fetch(`/api/posts/mmavahi/search?q=${encodeURIComponent(q)}`);
    const data = await res.json();
    setResults(data.posts || []);
    setSearching(false);
  }

  async function handleLocationSearch(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLoading(true);
    if (!navigator.geolocation) {
      alert("Tarayıcınız konum servisini desteklemiyor.");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        setLoading(false);
        setSearching(true);
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const res = await fetch(`/api/posts/mmavahi/search?lat=${lat}&lng=${lng}`);
        const data = await res.json();
        setResults(data.posts || []);
        setSearching(false);
      },
      (err) => {
        alert("Konum alınamadı: " + err.message);
        setLoading(false);
      }
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} method="GET" action="/mmavahi/search">
        <div className="relative flex gap-2">
          <Input name="q" placeholder="Emlak ilanı arayın" className="pe-10" />
          <button
            type="button"
            onClick={handleLocationSearch}
            className="absolute right-10 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-muted text-xs text-muted-foreground hover:bg-muted/80"
            disabled={loading}
          >
            {loading ? "Konum..." : "Konumumla Ara"}
          </button>
          <SearchIcon className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground" />
        </div>
      </form>
      <div className="mt-4">
        {searching && <div>Aranıyor...</div>}
        {!searching && results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {results.map((post) => (
              <div key={post.id} className="border rounded p-2">
                <div className="font-bold">{post.user?.displayName}</div>
                <div>{post.content}</div>
                {/* Daha fazla post detayı eklenebilir */}
              </div>
            ))}
          </div>
        )}
        {!searching && results.length === 0 && <div className="text-center text-muted-foreground">Sonuç bulunamadı.</div>}
      </div>
    </div>
  );
}
