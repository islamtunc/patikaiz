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
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Bkrhnr : FC = () => {
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
          title="Gizlilik Politikası"
          aria-label="Gizlilik Politikası"
        >
          <span>Kullanici Sozleşmesi</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[640px]">
        <DialogHeader>
          <DialogTitle>Gizlilik Politikası</DialogTitle>
          <DialogDescription>
            Uygulamamızın kullanıcı verilerini nasıl topladığı, kullandığı ve koruduğu hakkında bilgi.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <section>
            <h3 className="text-lg font-semibold">Toplanan Bilgiler</h3>
            <p className="text-sm text-muted-foreground">
              Kayıt sırasında verdiğiniz ad, e-posta ve profil bilgileri ile kullanım sırasında toplanan teknik veriler (cihaz, tarayıcı, IP adresi) toplanabilir.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Bilgi Kullanımı</h3>
            <p className="text-sm text-muted-foreground">
              Toplanan bilgiler hizmetlerin sunulması, güvenliğin sağlanması, müşteri desteği ve yasal yükümlülüklerin yerine getirilmesi için kullanılır. Pazarlama amaçlı kullanım yalnızca açık rıza ile yapılır.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Çerezler</h3>
            <p className="text-sm text-muted-foreground">
              Site deneyimini iyileştirmek için çerezler kullanılabilir. Çerezleri tarayıcı ayarlarınızdan devre dışı bırakabilirsiniz; ancak bazı özellikler çalışmayabilir.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Veri Güvenliği</h3>
            <p className="text-sm text-muted-foreground">
              Kişisel verilerinizin güvenliği için uygun teknik ve idari önlemler uygulanır. İnternet üzerinden iletim her zaman risk içerir.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">İletişim</h3>
            <p className="text-sm text-muted-foreground">
              Gizlilik ile ilgili sorularınız için:{" "}
              <a className="text-primary" href="mailto:privacy@example.com">
                privacy@example.com
              </a>
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
