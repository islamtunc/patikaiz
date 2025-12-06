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

import { useState, useEffect } from "react";
import type { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/hemanen/ui/dialog";
import { Button } from "@/hemanen/ui/button";

const Frtn: FC = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function update() {
      setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2"
          title="Mesafeli Satış Sözleşmesi"
          aria-label="Mesafeli Satış Sözleşmesi"
        >
          <span>Mesafeli Satış Sözleşmesi</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>MESAFELİ SATIŞ SÖZLEŞMESİ</DialogTitle>
          <DialogDescription>
            İşbu sözleşme, ALICI’nın patikaiz.com üzerinden yaptığı alışverişlerde geçerlidir.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4 text-sm leading-relaxed">
          <section>
            <p>
              İşbu Mesafeli Satış Sözleşmesi, aşağıdaki şartlar çerçevesinde,
              ALICI’nın patikaiz.com internet sitesi üzerinden yaptığı
              alışverişlerde uygulanmak üzere düzenlenmiştir.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold mb-2">1. TARAFLAR</h3>
            <p>
              <strong>SATICI (Hizmet Sağlayıcı):</strong> www.patikaiz.com/patikaiz.com <br />
              <strong>Unvan:</strong> <br />
              <strong>Adres:</strong> (Firma adresiniz) <br />
              <strong>Telefon:</strong> (Telefon numaranız) <br />
              <strong>E-posta:</strong> patikaizinfo@gmail.com <br />
              <strong>Web sitesi:</strong> www.patikaiz.com
            </p>
            <p className="mt-2">
              <strong>ALICI (Müşteri):</strong> <br />
              Adı / Soyadı: <br />
              Adres: <br />
              Telefon: <br />
              E-posta: <br />
              (Sipariş ekranında alıcı tarafından doldurulan bilgiler esas alınır.)
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold mb-2">
              2. SÖZLEŞMENİN KONUSU
            </h3>
            <p>
              İşbu sözleşmenin konusu, ALICI’nın patikaiz.com üzerinden
              elektronik ortamda satın aldığı ürünlerin satışı ve teslimine
              ilişkin tarafların hak ve yükümlülüklerini, 6502 sayılı
              Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler
              Yönetmeliği hükümleri çerçevesinde düzenlemektedir.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold mb-2">
              3. ÜRÜN VE HİZMET BİLGİLERİ
            </h3>
            <p>
              ALICI tarafından satın alınan ürünlerin adı, miktarı, adeti,
              toplam satış bedeli, KDV dahil tutarı ve teslimat ücreti (varsa)
              sipariş ekranında gösterilen değerlerdir ve bu bilgiler işbu
              sözleşmenin ayrılmaz bir parçasıdır.
            </p>
            <p className="mt-2">
              Patikaiz; takvim, özel gün ürünleri, hediyelik eşyalar, kişiye
              özel olmayan ürünler ve diğer tüm kategorilerde ürün satışı
              yapmaktadır.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold mb-2">
              4. ÖDEME YÖNTEMLERİ
            </h3>
            <p>patikaiz.com üzerinde ödemeler aşağıdaki sistem aracılığıyla yapılır:</p>
            <p className="mt-2">
              <strong>4.1. PayTR Sanal POS</strong><br />
              PayTR üzerinden yapılan ödemelerde kart bilgileri PayTR'ın güvenli
              ödeme sayfasında işlenir. Kart bilgileriniz Patikaiz tarafından
              görüntülenmez veya saklanmaz.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold mb-2">
              5. TESLİMAT KOŞULLARI
            </h3>
            <p>
              Ürünler, ALICI’nın sipariş sırasında belirttiği teslimat adresine
              gönderilir. Kargoya verilme süresi genellikle aynı gün veya 2 iş
              günü olup, yoğun dönemlerde değişiklik gösterebilir. Kargo firması
              teslimattan sorumludur.
            </p>
            <p className="mt-2">
              ALICI teslim alma sırasında ürünü kontrol etmekle yükümlüdür.
              Hasarlı veya eksik ürünler için teslim tutanağı tutulmalı ve
              Patikaiz’e bildirilmelidir.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold mb-2">
              6. CAYMA HAKKI
            </h3>
            <p>
              ALICI, ürünün kendisine tesliminden itibaren 3 gün içinde cayma
              hakkını kullanabilir.
            </p>
            <p className="mt-2 font-medium">
              Cayma hakkının kullanılamadığı durumlar:
            </p>
            <ul className="list-disc pl-5">
              <li>Kişiye özel olarak hazırlanan ürünler</li>
              <li>
                Ambalajı açılmış, kullanılmış veya iade edilemeyecek derecede
                zarar görmüş ürünler
              </li>
              <li>Hijyen gerektiren ürünler</li>
            </ul>
            <p className="mt-2">
              Cayma hakkı için ALICI’nın yazılı bildirim yapması yeterlidir.
              Cayma hakkı kullanıldığında ürün iade edilir, ürün bedeli 14 gün
              içinde iade edilir.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold mb-2">
              7. İADE KOŞULLARI
            </h3>
            <ul className="list-disc pl-5">
              <li>Eksiksiz olmalıdır</li>
              <li>Kutusu, ambalajı zarar görmemiş olmalıdır</li>
              <li>Yeniden satılabilir durumda olmalıdır</li>
            </ul>
            <p className="mt-2">
              Ürün Patikaiz’e ulaştıktan sonra inceleme yapılır ve iade süreci
              başlatılır.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold mb-2">
              8. KARGO VE TESLİMAT ÜCRETLERİ
            </h3>
            <p>Kargo ücretsizdir.</p>
            <p>
              Cayma hakkı kullanıldığında iade kargo ücreti, mevzuat gereği
              ALICI tarafından karşılanır.
            </p>
            <p>Ayıplı ürünlerde kargo ücretsizdir.</p>
          </section>

          <section>
            <h3 className="text-base font-semibold mb-2">
              9. AYIPLI ÜRÜN
            </h3>
            <ul className="list-disc pl-5">
              <li>Ürünün ücretsiz onarımı</li>
              <li>Ürün değişimi</li>
              <li>Bedel iadesi</li>
            </ul>
            <p className="mt-2">
              ALICI, teslimattan itibaren 3 gün içinde ayıplı ürünü bildirmekle
              yükümlüdür.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold mb-2">
              10. KİŞİSEL VERİLERİN KORUNMASI (KVKK)
            </h3>
            <p>
              ALICI’ya ait kişisel veriler sipariş, teslimat, ödeme güvenliği ve
              müşteri destek süreçlerinde kullanılır. Yalnızca gerekli durumlarda
              kargo firmaları, PayTR ve teknik hizmet sağlayıcılar ile
              paylaşılır. Kart bilgileri kesinlikle saklanmaz.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold mb-2">
              11. MÜCBİR SEBEPLER
            </h3>
            <p>
              Doğal afet, savaş, terör, iletişim sorunları, sistem arızaları gibi
              durumlarda taraflar mücbir sebep hükümlerine dayanabilir.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold mb-2">
              12. UYUŞMAZLIKLARIN ÇÖZÜMÜ
            </h3>
            <p>
              Yetkili merciler, ALICI’nın yerleşim yerindeki Tüketici Hakem
              Heyetleri ve Tüketici Mahkemeleridir.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold mb-2">
              13. YÜRÜRLÜK
            </h3>
            <p>
              ALICI, patikaiz.com üzerinden sipariş verdiğinde işbu sözleşmenin
              tüm maddelerini okuduğunu, anladığını ve kabul ettiğini elektronik
              ortamda onaylamış sayılır. Sipariş onayıyla birlikte sözleşme
              yürürlüğe girer.
            </p>
          </section>

          <div className="mt-4 flex justify-end">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Kapat
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Frtn;
