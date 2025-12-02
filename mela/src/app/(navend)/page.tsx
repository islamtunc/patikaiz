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
        </header>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img src="/assets/avatar-placeholder.png" alt="Proje Görseli" className="w-32 h-32 object-cover rounded-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">Duvar Takvimleri</h2>
            <a href="/mmavahi" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">sayfaya git</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img src="/assets/login-image.jpg" alt="Hizmetler" className="w-32 h-32 object-cover rounded-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">Özel Günler</h2>
            <a href="/mmkedkar" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">sayfaya git</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img src="/assets/signup-image.jpg" alt="İletişim" className="w-32 h-32 object-cover rounded-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">Hediye Kutusu</h2>
            <a href="/mmhewcedari" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">sayfaya git</a>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Siteye Git</h2>
            <a href="/malper" className="text-green-700 font-medium hover:underline">Siteye Git</a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ArchitectHomePage;