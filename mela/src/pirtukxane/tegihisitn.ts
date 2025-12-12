// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
export async function kargoFetch<T>(path: string, options: {
  method?: string;
  body?: any;
} = {}): Promise<T> {

  const res = await fetch(`${process.env.KARGO_API_URL}${path}`, {
    method: options.method || "GET",
    headers: {
      "Authorization": `Bearer ${process.env.KARGO_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    cache: "no-store",
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Kargo API Error:", errorText);
    throw new Error(`Kargo API Error: ${res.status}`);
  }

  return res.json();
}
