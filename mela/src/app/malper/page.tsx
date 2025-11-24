// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah
// Bismillahirrahmanirrahim
// Elhamdulillahirabbilalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah, Muhammedur Resulullah

import React from 'react'

function Page() {
  return (
    <main className="flex-grow container mx-auto py-10">
      {/* Başlık Bölümü */}
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-2">Mimar Nurullah Demir</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Klasik Osmanlı mimarisinden ilham alarak; estetik, fonksiyonel ve zamansız projeler tasarlıyoruz.
        </p>
      </section>

      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Projeler */}
        <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
          <img src="/assets/proje.jpg" alt="Projeler" className="w-24 h-24 object-cover rounded-full mb-4" />
          <h2 className="text-xl font-semibold mb-2">Projelerimiz</h2>
          <p className="text-gray-500 mb-4 text-center">Tamamladığımız mimari projeleri inceleyin.</p>
          <a href="/malper/mmavahi" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Projeleri Gör</a>
        </div>

        {/* Hizmetler */}
        <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
          <img src="/assets/hizmet.jpg" alt="Hizmetler" className="w-24 h-24 object-cover rounded-full mb-4" />
          <h2 className="text-xl font-semibold mb-2">Hizmetlerimiz</h2>
          <p className="text-gray-500 mb-4 text-center">Tasarım, uygulama ve danışmanlık hizmetleri sunuyoruz.</p>
          <a href="/malper/mmhewcedari" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Hizmetleri Gör</a>
        </div>

        {/* Referanslar */}
        <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
          <img src="/assets/referans.jpg" alt="Referanslar" className="w-24 h-24 object-cover rounded-full mb-4" />
          <h2 className="text-xl font-semibold mb-2">Referanslar</h2>
          <p className="text-gray-500 mb-4 text-center">İş birliği yaptığımız kişi ve kurumlar.</p>
          <a href="/malper/mmkedkar" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Referansları Gör</a>
        </div>

        {/* İletişim */}
        <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
          <img src="/assets/iletisim.jpg" alt="İletişim" className="w-24 h-24 object-cover rounded-full mb-4" />
          <h2 className="text-xl font-semibold mb-2">İletişim</h2>
          <p className="text-gray-500 mb-4 text-center">Bize ulaşın, teklif alın veya soru sorun.</p>
          <a href="/malper/mmwesayit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">İletişime Geç</a>
        </div>
      </div>

      {/* Ekibimiz ve Vizyonumuz */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Ekibimiz & Vizyonumuz</h2>
        <p className="text-gray-700 mb-4">
          Deneyimli mimarlardan oluşan ekibimizle, çevreye duyarlı ve estetik değeri yüksek projeler üretiyoruz. 
          Amacımız; mekânları yalnızca yapılar olarak değil, yaşanacak sanat eserleri olarak tasarlamaktır.
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Modern konut ve ticari yapı projeleri</li>
          <li>Restorasyon ve tarihi yapı çalışmaları</li>
          <li>Mimari danışmanlık ve proje yönetimi</li>
          <li>3D görselleştirme ve modelleme</li>
        </ul>
      </section>
    </main>
  )
}

export default Page
