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

import { useState, useEffect, type FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/hemanen/ui/dialog";
import { Button } from "@/hemanen/ui/button";
import { FileText } from "lucide-react";

const GizlilikSozlesmesi: FC = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Gizlilik Sözleşmesi
        </Button>
      </DialogTrigger>

      <DialogContent
        className={`${
          isMobile ? "w-[96%] max-h-[92vh]" : "max-w-3xl"
        } overflow-hidden`}
      >
        <DialogHeader>
          <DialogTitle>GİZLİLİK SÖZLEŞMESİ</DialogTitle>
          <DialogDescription>Patikaiz – patikaiz.com</DialogDescription>
        </DialogHeader>

        <div className="mt-4 max-h-[65vh] overflow-y-auto pr-2 space-y-6 text-sm leading-relaxed">

          <p>
            Patikaiz olarak kişisel verilerinizin gizliliğini ve güvenliğini en üst
            düzeyde korumayı taahhüt ediyoruz. Bu Gizlilik Politikası,
            <strong> patikaiz.com </strong> üzerinden işlem yapan ziyaretçiler ve
            müşterilerimizin bilgilerinin nasıl toplandığını, işlendiğini,
            korunduğunu ve hangi koşullarda paylaşılabileceğini açıklar.
          </p>

          {/* 1 */}
          <section>
            <h3 className="font-semibold text-base mb-1">
              1. Kişisel Verilerin Toplanması
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Ad – soyad</li>
              <li>Telefon numarası</li>
              <li>E-posta adresi</li>
              <li>Fatura ve teslimat adresi</li>
              <li>Sipariş detayları</li>
              <li>Tercihler, yorumlar</li>
              <li>Teknik bilgiler (IP, tarayıcı, cihaz, çerez)</li>
            </ul>
            <p className="text-muted-foreground mt-1">
              Bu bilgiler; üyelik formu, sipariş formu, iletişim formları
              ve <strong>PayTR</strong> ödeme modülleri aracılığıyla toplanır.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h3 className="font-semibold text-base mb-1">
              2. Kişisel Verilerin Kullanım Amaçları
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Siparişlerin hazırlanması ve kargolanması</li>
              <li>Ödemelerin PayTR üzerinden güvenle gerçekleştirilmesi</li>
              <li>Müşteri destek hizmeti</li>
              <li>Fatura süreçleri</li>
              <li>Kampanya ve bilgilendirme</li>
              <li>Güvenlik ve performans</li>
              <li>Yasal yükümlülükler</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h3 className="font-semibold text-base mb-1">
              3. PayTR Entegrasyonu Kapsamında Veri Aktarımı
            </h3>
            <p className="text-muted-foreground">
              Ödemeler tamamen PayTR güvenli ödeme sayfasında gerçekleşir.
              Patikaiz sistemine kart bilgisi hiçbir şekilde ulaşmaz.
            </p>

            <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
              <li>Sipariş tutarı</li>
              <li>İşlem sonucu</li>
              <li>Müşteri adı, e-posta ve IP bilgisi</li>
              <li>Fraud/güvenlik için teknik veriler</li>
            </ul>

            <p className="mt-1 text-muted-foreground">
              PayTR, PCI DSS ve 3D Secure standartlarına uygundur.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h3 className="font-semibold text-base mb-1">
              4. Üçüncü Taraflara Veri Aktarımı
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Kargo firmaları (ad, adres, telefon)</li>
              <li>Ödeme kuruluşu: PayTR</li>
              <li>Teknik servis sağlayıcıları</li>
              <li>Yasal makamlar (zorunlu haller)</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h3 className="font-semibold text-base mb-1">
              5. Kredi Kartı Güvenliği
            </h3>
            <p className="text-muted-foreground">
              Kart bilgileri Patikaiz tarafından saklanmaz. Tüm işlemler SSL/TLS
              şifreleme altında PayTR üzerinden yapılır.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h3 className="font-semibold text-base mb-1">
              6. Ticari İletiler (KVKK & ETK)
            </h3>
            <p className="text-muted-foreground">
              Onayınız ile kampanya, duyuru ve bilgilendirmeler gönderilebilir.
              İstediğiniz zaman iptal edebilirsiniz.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h3 className="font-semibold text-base mb-1">
              7. Veri Güvenliği
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>SSL sertifikası</li>
              <li>Güvenli sunucu altyapısı</li>
              <li>Erişim kısıtlamaları</li>
              <li>KVKK uyumlu saklama politikası</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h3 className="font-semibold text-base mb-1">
              8. Üçüncü Taraf Bağlantıları
            </h3>
            <p className="text-muted-foreground">
              Diğer web sitelerinin içeriklerinden Patikaiz sorumlu değildir.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h3 className="font-semibold text-base mb-1">
              9. Kullanıcı Hakları (KVKK)
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Verilerinize erişme</li>
              <li>Düzeltme talebi</li>
              <li>Silme talebi</li>
              <li>İtiraz etme</li>
              <li>Kayıtları öğrenme</li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h3 className="font-semibold text-base mb-1">
              10. E-posta Güvenliği
            </h3>
            <p className="text-muted-foreground">
              Kart bilgisi ve hassas verileri e-posta ile göndermeyiniz.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h3 className="font-semibold text-base mb-1">
              11. Politika Değişikliği
            </h3>
            <p className="text-muted-foreground">
              Güncellenen metin sitede yayınlandığı anda geçerli olur.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h3 className="font-semibold text-base mb-1">
              12. İletişim Bilgileri
            </h3>
            <p className="text-muted-foreground">
              E-posta: patikaizinfo.com
              <br />
              Telefon: 0543 636 69 42
              <br />
              Adres: Leylekpınar mah. 1703 sok. No:41
              Piraye Kitabevi Cafe, Merkez / AĞRI
            </p>
          </section>
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={() => setOpen(false)}>Kapat</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GizlilikSozlesmesi;
