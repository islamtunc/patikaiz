// Bismillahirrahmanirahim
// Elhamdullillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Bismillahirrahmanirahim
// Elhamdullillahirabbulalemin
// SuphanAllahi velhamdulillahi ve la ilahe illAllah u vAllah u Ekber 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah


import React from "react";

function Tegihistin() {
  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Kargo ve Stok</h1>
          <nav className="flex justify-center gap-4 mt-2">
            <a href="/tegihistin/nu" className="text-sm text-green-700 hover:underline">Yeni Kargo </a>
            <a href="/tegihistin/sopandin" className="text-sm text-green-700 hover:underline">Kargo Takip</a>
          </nav>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img src="/assets/avatar-placeholder.png" alt="Proje Görseli" className="w-32 h-32 object-cover rounded-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">Kargo Geçmişi</h2>
            <a href="/tegihistin/revebirin/paseroj" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">sayfaya git</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img src="/assets/box-icon.png" alt="Kargo" className="w-32 h-32 object-cover rounded-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">Stok</h2>
            <a href="/tegihistin/revebirin/embar" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Kargomu Sorgula</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img src="/assets/login-image.jpg" alt="Hizmetler" className="w-32 h-32 object-cover rounded-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">ödemeler</h2>
            <a href="/tegihistin/muce" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">sayfaya git</a>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Ayarlar</h2>
            <a href="/tegihistin/revebirin" className="text-green-700 font-medium hover:underline">Siteye Git</a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Tegihistin;