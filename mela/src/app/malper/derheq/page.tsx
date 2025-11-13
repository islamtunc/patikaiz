// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah

"use client";

import Image from "next/image";
import PrivacyModal from "@/app/malper/components/yasal/mmvsrtn";
import KullaniciSozlesmesi from "@/app/malper/components/yasal/mmbikarhnr";
import Frtn from "@/app/malper/components/yasal/mmfrtn";

export default function Page() {
  return (
    <main className="flex-grow container mx-auto py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Yasal Belge ve Politikalar</h1>
        <p className="text-gray-600">
          Platform hakkında önemli yasal belgelerimizi inceleyebilirsiniz.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3050/3050159.png"
            alt="Gizlilik Politikası"
            width={48}
            height={48}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-3">Gizlilik Politikası</h2>
          <p className="text-sm text-gray-600 mb-4">
            Verilerinizin nasıl toplandığını ve korunduğunu öğrenin.
          </p>
          <PrivacyModal />
        </div>

        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3143/3143615.png"
            alt="Kullanıcı Sözleşmesi"
            width={48}
            height={48}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-3">Kullanıcı Sözleşmesi</h2>
          <p className="text-sm text-gray-600 mb-4">
            Platform kullanım şartlarını ve haklarınızı öğrenin.
          </p>
          <KullaniciSozlesmesi />
        </div>

        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"
            alt="İade ve Geri Ödeme"
            width={48}
            height={48}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-3">İade ve Geri Ödeme</h2>
          <p className="text-sm text-gray-600 mb-4">
            İade ve geri ödeme politikamızı inceleyebilirsiniz.
          </p>
          <Frtn />
        </div>
      </section>
    </main>
  );
}