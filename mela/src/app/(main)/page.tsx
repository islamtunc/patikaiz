// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// La havle ve la kuvvete illa billahil aliyyil azim
// Allah u Ekber
// La ilahe illallah Muhammedur Resulullah
// Subhanallah, Elhamdulillah, Allahu Ekber, La ilahe illallah
// Estağfirulllah El-Azim
"use client"



import React from "react";

function ArchitectHomePage() {
  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Patikaiz Sitesi</h1>
          <p className="text-lg text-gray-600">Modern mimari projeler, hizmetler ve iletişim için hoş geldiniz.</p>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img src="/assets/avatar-placeholder.png" alt="Proje Görseli" className="w-32 h-32 object-cover rounded-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">Projelerimiz</h2>
            <p className="text-gray-500 mb-4 text-center">Gerçekleştirdiğimiz mimari projeleri inceleyin.</p>
            <a href="/mmavahi" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Projeleri Gör</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img src="/assets/login-image.jpg" alt="Hizmetler" className="w-32 h-32 object-cover rounded-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">Hizmetlerimiz</h2>
            <p className="text-gray-500 mb-4 text-center">Mimari tasarım, danışmanlık ve uygulama hizmetlerimiz.</p>
            <a href="/mmkargeh" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Hizmetleri Gör</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img src="/assets/signup-image.jpg" alt="İletişim" className="w-32 h-32 object-cover rounded-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">İletişim</h2>
            <p className="text-gray-500 mb-4 text-center">Bize ulaşın, teklif alın veya sorularınızı iletin.</p>
            <a href="/malper" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">İletişime Geç</a>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Referanslar</h2>
            <p className="text-gray-500 mb-4">Çalıştığımız kurum ve kişilerden aldığımız referanslar.</p>
            <a href="/mmwesayit" className="text-green-700 font-medium hover:underline">Referansları Gör</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Hakkımızda</h2>
            <p className="text-gray-500 mb-4">Ekibimiz ve vizyonumuz hakkında bilgi alın.</p>
            <a href="/malper" className="text-green-700 font-medium hover:underline">Hakkımızda</a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ArchitectHomePage;