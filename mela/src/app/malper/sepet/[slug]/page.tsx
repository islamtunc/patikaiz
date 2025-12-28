// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah
// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Elhamdulillahirabbulalemin
// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 

import { notFound } from "next/navigation"

type Product = {
  id: string
  name: string
  price: number
  imageUrl?: string | null
}

type Mmselik = {
  id: string
  title: string
  content?: string[] | null
  products: Product[]
}

/* SEO */
export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/mmselik/${params.slug}`,
      { cache: "no-store" }
    )

    if (!res.ok) return { title: "Bulunamadı" }

    const selik: Mmselik = await res.json()

    return {
      title: selik.title,
      description: selik.content?.join(" ").slice(0, 150) || selik.title,
    }
  } catch {
    return { title: "Hata" }
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/mmselik/${params.slug}`,
      { cache: "no-store" }
    )

    if (!res.ok) {
      notFound()
    }

    const selik: Mmselik = await res.json()

    if (!selik || !selik.products) {
      notFound()
    }

    // if there are no products, render the page with a visible modal saying "Sepet boş"
    if (selik.products.length === 0) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="container px-4">
            <h1 className="text-4xl font-bold mb-4">{selik.title}</h1>

            {/* Modal overlay */}
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-white text-black rounded-2xl max-w-sm w-full p-6 shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">Sepet boş</h2>
                <p className="text-gray-700 mb-4">
                  Bu kategori için sepete eklenebilecek ürün bulunmamaktadır.
                </p>
                <div className="flex justify-end gap-2">
                  <a
                    href="/"
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:opacity-90 transition"
                  >
                    Ana Sayfaya Dön
                  </a>
                  <a
                    href="/malper"
                    className="px-4 py-2 bg-green-600 text-white rounded hover:opacity-90 transition"
                  >
                    Kategorilere Git
                  </a>
                </div>
              </div>
            </div>

            {/* Keep an empty container below so the page layout remains */}
            <div className="mt-8">
              <p className="text-gray-400 max-w-2xl">
                {selik.content?.join(" ") ?? ""}
              </p>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="container mx-auto px-4 py-10">
        {/* Başlık */}
        <h1 className="text-4xl font-bold mb-2">{selik.title}</h1>
        {selik.content?.length ? (
          <p className="text-gray-400 max-w-2xl mb-10">
            {selik.content.join(" ")}
          </p>
        ) : null}

        {/* Ürün Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {selik.products.map((p) => (
            <div
              key={p.id}
              className="border border-neutral-800 bg-neutral-950 rounded-2xl overflow-hidden hover:scale-[1.02] transition shadow-md"
            >
              <div className="w-full h-48 bg-black flex items-center justify-center">
                {p.imageUrl ? (
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">Resim yok</span>
                )}
              </div>

              <div className="p-4">
                <h2 className="font-semibold text-lg line-clamp-1">
                  {p.name}
                </h2>
                <span className="text-green-500 font-bold block mt-2">
                  {p.price.toLocaleString()} ₺
                </span>

                <button className="mt-4 w-full bg-white text-black rounded-xl py-2 font-medium hover:opacity-90 transition">
                  Sepete ekle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  } catch (error) {
    console.error(error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Bir hata oluştu
      </div>
    )
  }
}



// Subhanallah, Elhamdulillah, Allahu Ekber, 
// La ilahe illallah, Muhammeden Abduhu ve Resuluhu
// La havle vela kuvvete illa billahil aliyyil azim
// Allahu Ekber, Allahumma salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// LA ILAHE ILLALLAH 
// Estağfirulllah El-Azim
// Elhmadulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbulalemin
// Allahu Ekber, Allahu Ekber, La ilahe illallah
// Estağfirullah El-Azim
// Allahu Ekber ve lillahi'l-hamd