// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin 
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah
"use client";
import { FileText } from "lucide-react";
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

const Bkrhnr: FC = () => {
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
          title="Kullanıcı Sözleşmesi"
          aria-label="Kullanıcı Sözleşmesi"
        >          <FileText className="w-4 h-4" />

          <span>Kullanıcı Sözleşmesi</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[640px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>KULLANICI SÖZLEŞMESİ</DialogTitle>
          <DialogDescription>
            Lütfen aşağıdaki sözleşme maddelerini dikkatlice okuyunuz.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4 text-sm text-muted-foreground">

          <section>
            <h3 className="text-base font-semibold text-foreground">1. Taraflar</h3>
            <p>
              Bu Kullanıcı Sözleşmesi (“Sözleşme”), patikaiz.com adresinde faaliyet gösteren marka ile
              (“Şirket”) internet sitesini kullanan tüm ziyaretçiler ve üyeler (“Kullanıcı”) arasında akdedilmiştir.
              Siteye erişim sağlayan herkes bu Sözleşme’yi okumuş ve kabul etmiş sayılır.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">2. Sözleşmenin Konusu</h3>
            <p>
              Bu Sözleşme; Kullanıcı’nın site üzerinden sunulan ürün ve hizmetlerden yararlanma koşullarını,
              tarafların hak ve yükümlülüklerini düzenler.
              Şirket; takvim, hediye kutuları ve ayrıca tekil olarak sunulan hediye ürünlerinin satışını yapmaktadır.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">3. Kullanım Koşulları</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Kullanıcı, site üzerindeki hiçbir içeriği izinsiz kopyalamayacağını kabul eder.</li>
              <li>Site hukuka aykırı amaçlarla kullanılamaz.</li>
              <li>Kayıt sırasında verilen bilgilerin doğru ve güncel olması zorunludur.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">4. Üyelik Hesabı ve Güvenlik</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Hesap güvenliğinden Kullanıcı sorumludur.</li>
              <li>Şirket gerekli durumlarda hesapları geçici olarak askıya alabilir.</li>
              <li>Başkasının hesabını izinsiz kullanmak hukuki sonuç doğurur.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">5. Fikri ve Sınai Haklar</h3>
            <p>
              Sitedeki tüm tasarım, görsel, metin, logo ve içerikler telif hakları ile korunmaktadır.
              Kullanıcı bu içerikleri izinsiz kullanamaz ve devredemez.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">6. Sipariş, Ödeme ve Güvenlik</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Verilen her sipariş bağlayıcıdır.</li>
              <li>Ödemeler PayTR üzerinden yapılır.</li>
              <li>Teknik arızalardan Şirket sorumlu değildir.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">7. İptal – İade – Değişim</h3>
            <p>
              Fiziksel ürünlerde iade ve değişim Mesafeli Satış Sözleşmesi’ne tabidir.
              Hasarlı ürünlerde fotoğraf ile bildirim yapılmalıdır.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">8. Sorumluluk Reddi</h3>
            <p>
              Şirket, hizmetin kesintisiz olacağını taahhüt etmez.
              Altyapı ve bağlantı sorunlarından sorumlu tutulamaz.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">9. Gizlilik ve Kişisel Veriler</h3>
            <p>
              Kişisel veriler, Gizlilik Politikası ve KVKK Aydınlatma Metni kapsamında işlenir.
              Kullanıcı bu metinleri kabul etmiş sayılır.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">10. Sözleşmenin Değiştirilmesi</h3>
            <p>
              Şirket, sözleşmeyi tek taraflı olarak güncelleyebilir.
              Güncellenen metin yayınlandığı anda geçerli olur.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">11. Uygulanacak Hukuk ve Yetki</h3>
            <p>
              Bu sözleşme Türk hukukuna tabidir.
              İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">12. Yürürlük</h3>
            <p>
              Kullanıcı siteyi kullanarak bu sözleşmenin tüm maddelerini kabul etmiş sayılır.
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

export default Bkrhnr;
