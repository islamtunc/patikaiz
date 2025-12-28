// Bismillahirrahmanirahim
// Elhamdullillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Bismillahirrahmanirahim
// Elhamdullillahirabbulalemin
// SuphanAllahi velhamdulillahi ve la ilahe illAllah u vAllah u Ekber 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah

'use client';

import React, { useEffect, useState } from 'react';
import { SessionProvider, useSession } from './malper/Ewlehi';

function TegihistinContent() {
  const { session, login, logout } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchToken() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/tegihistin', { method: 'POST' });
      const json = await res.json();
      if (!res.ok) {
        setError(json?.error ?? 'Request failed');
        logout();
      } else {
        const token = json?.token ?? JSON.stringify(json);
        login(token);
      }
    } catch (err) {
      setError((err as Error).message);
      logout();
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Tegîhîstin — Token</h1>
      <button onClick={fetchToken} disabled={loading} style={{ marginBottom: 12 }}>
        {loading ? 'Dîtin...' : 'Nûvekirin / Wergirtin'}
      </button>

      {error && (
        <div style={{ color: 'crimson' }}>
          Error: {error}
        </div>
      )}

      {session?.token ? (
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', background: '#f3f3f3', padding: 12 }}>
          {session.token}
        </pre>
      ) : !loading && !error ? (
        <div>Token tune.</div>
      ) : null}
    </main>
  );
}

export default function TegihistinPage() {
  return (
    <SessionProvider>
      <TegihistinContent />
    </SessionProvider>
  );
}
