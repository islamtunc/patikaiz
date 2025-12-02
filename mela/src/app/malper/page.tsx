// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah., Muhammedur Resulullah

import React from 'react';
import UncontrolledExample from './hemanen/slide';

export default async function Page() {
  return (
    <div>
      {/* Banner */}
      <img src="/mlg.jpeg" alt="Patikaiz Logo" className="w-full" />

      <main className="flex-grow container mx-auto py-8">
        {/* Title */}
       <UncontrolledExample/>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: Kişiye Özel Duvar Takvimi */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80"
              alt="Kişiye Özel Takvim"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Kişiye Özel Takvim</h3>
            <p className="text-gray-600">
              Fotoğraflarınızla tamamen size özel duvar takviminizi oluşturun.
            </p>
            <a
              href="/malper/takvim/ozel"
              className="text-blue-500 hover:underline mt-4 block"
            >
              Hemen Oluştur
            </a>
          </div>

          {/* Card 2: Minimalist Takvim Tasarımları */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80"
              alt="Minimal Takvim"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Minimalist Takvim</h3>
            <p className="text-gray-600">
              Modern ve sade bir görünüm isteyenler için özel minimalist koleksiyon.
            </p>
            <a
              href="/malper/takvim/minimal"
              className="text-blue-500 hover:underline mt-4 block"
            >
              Koleksiyonu Gör
            </a>
          </div>

          {/* Card 3: Kurdî Temalı Takvim */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80"
              alt="Kurdî Takvim"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Kurdî Temalı Takvim</h3>
            <p className="text-gray-600">
              Kürt kültürünü sevenler için eşsiz desen ve fotoğraflarla hazırlanan özel takvimler.
            </p>
            <a
              href="/malper/takvim/kurdi"
              className="text-blue-500 hover:underline mt-4 block"
            >
              Takvimlere Bak
            </a>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Son Güncellemeler</h2>
        
        </div>
      </main>
    </div>
  );
}


// Subhanallah, Elhamdulillah, Allahu Ekber, 
// La ilahe illallah, Muhammeden Abduhu ve Resuluhu
// La havle vela kuvvete illa billahil aliyyil azim
// Estağfirulllah El-Azim
// Elhmadulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbulalemin