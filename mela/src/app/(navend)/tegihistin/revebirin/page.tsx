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
import React, { useEffect, useState } from "react";

type Shipment = any;

export default function page() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [payload, setPayload] = useState<string>(
    JSON.stringify(
      {
        recipient: { name: "Alî", phone: "05XXXXXXXXX", address: "Adres örnek" },
        parcels: [{ weight: 1 }],
      },
      null,
      2
    )
  );

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/kargo/shipments");
      if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
      const data = await res.json();
      setShipments(Array.isArray(data) ? data : [data]);
    } catch (err: any) {
      setError(err?.message ?? "Failed to load");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function createShipment(e?: React.FormEvent) {
    e?.preventDefault();
    setCreating(true);
    setError(null);
    try {
      const body = JSON.parse(payload);
      const res = await fetch("/api/kargo/shipments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
      await load();
    } catch (err: any) {
      setError(err?.message ?? "Failed to create");
    } finally {
      setCreating(false);
    }
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Admin — Kargo Paneli</h2>

      <section style={{ marginTop: 12, display: "grid", gap: 12 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={load} disabled={loading}>
            Yenile
          </button>
          <button
            onClick={() =>
              fetch("/api/kargo/webhooks")
                .then((r) => r.json())
                .then((d) => alert(JSON.stringify(d.slice(0, 10), null, 2)))
                .catch((e) => alert(String(e)))
            }
          >
            Webhook Logları (incele)
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 12 }}>
          <div style={{ border: "1px solid #e6e6e6", padding: 12, borderRadius: 8 }}>
            <h3 style={{ marginTop: 0 }}>Gönderiler</h3>
            {loading ? (
              <div>Yükleniyor...</div>
            ) : error ? (
              <div style={{ color: "crimson" }}>{error}</div>
            ) : shipments.length === 0 ? (
              <div>Gönderi yok</div>
            ) : (
              <div style={{ display: "grid", gap: 8 }}>
                {shipments.map((s, i) => (
                  <div key={i} style={{ border: "1px solid #ddd", padding: 8, borderRadius: 6 }}>
                    <div style={{ fontWeight: 700 }}>{s.id ?? s.shipmentId ?? "—"}</div>
                    <div style={{ fontSize: 13, color: "#444" }}>{JSON.stringify(s, null, 2).slice(0, 300)}{JSON.stringify(s, null, 2).length>300?"...":""}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside style={{ border: "1px solid #e6e6e6", padding: 12, borderRadius: 8 }}>
            <h3 style={{ marginTop: 0 }}>Yeni Gönderi Oluştur</h3>
            <form onSubmit={createShipment} style={{ display: "grid", gap: 8 }}>
              <textarea rows={10} value={payload} onChange={(e) => setPayload(e.target.value)} style={{ width: "100%", fontFamily: "monospace", fontSize: 13 }} />
              <div style={{ display: "flex", gap: 8 }}>
                <button type="submit" disabled={creating}>
                  Oluştur
                </button>
                <button type="button" onClick={() => setPayload(JSON.stringify({ recipient: { name: "Alî", phone: "05XXXXXXXXX", address: "Adres örnek" }, parcels: [{ weight: 1 }] }, null, 2))}>
                  Örnek Yükle
                </button>
              </div>
              {error && <div style={{ color: "crimson" }}>{error}</div>}
            </form>
          </aside>
        </div>
      </section>
    </div>
  );
}
