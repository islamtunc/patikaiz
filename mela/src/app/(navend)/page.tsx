// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
// La havle ve la kuvvete illa billahil aliyyil azim
// Allah u Ekber
// La ilahe illallah Muhammeden abduhu ve resuluhu
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
            <h2 className="text-xl font-semibold mb-2">Duvar Takvimleri</h2>
            <a href="/diwar" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">sayfaya git</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">İstanbul Temalı Takvimler</h2>
            <a href="/rojentaybet/stenbol" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">sayfaya git</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Hediye Kutusu</h2>
            <a href="/diyari" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">sayfaya git</a>
          </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Mase Takvimi</h2>
            <a href="/mase" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">sayfaya git</a>
          </div>
        </section>
           <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Manzara Temalı Takvimleri</h2>
            <a href="/rojentaybet/reng" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">sayfaya git</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Anne  Temalı Takvimler</h2>
            <a href="/rojentaybet/dayik" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">sayfaya git</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Baba Temalı Takvimler</h2>
            <a href="/rojentaybet/bav" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">sayfaya git</a>
          </div>
                    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Yalnızlık Temalı Takvimler</h2>
            <a href="/rojentaybet/tn" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">sayfaya git</a>
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