// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



export default function MmHome() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">Hukuk</TabsTrigger>
            <TabsTrigger value="following">Sağlık</TabsTrigger>
            <TabsTrigger value="mm">Eğitim</TabsTrigger>
            
            <TabsTrigger value="for-you">Teknoloji </TabsTrigger>
            <TabsTrigger value="following">Resmi Kurum</TabsTrigger>
            <TabsTrigger value="mm"> Güzellik ve Bakım</TabsTrigger>

          </TabsList>
          <TabsList>
            <TabsTrigger value="for-you">IT ve Yazılım Kaynakları</TabsTrigger>
            <TabsTrigger value="following">İşletme ve Stratejik Yönetim</TabsTrigger>
            <TabsTrigger value="mm">Koruma ve Güvenlik</TabsTrigger>
            
            <TabsTrigger value="for-you">Lojistik ve Taşıma </TabsTrigger>
            <TabsTrigger value="following">Mağazacılık ve Perakendecilik</TabsTrigger>
            <TabsTrigger value="mm">Muhasebe,Finans ve Bankacılık </TabsTrigger>

          </TabsList>
          <TabsList>
            <TabsTrigger value="for-you">Mühendislik </TabsTrigger>
            <TabsTrigger value="following">Müşteri Hizmetleri</TabsTrigger>
            <TabsTrigger value="mm">Ofis Yönetimi ve İdari İşler</TabsTrigger>
            
            <TabsTrigger value="for-you">Part Time ve Ek İşler </TabsTrigger>
            <TabsTrigger value="following">Pazarlama ve Ürün Yönetimi</TabsTrigger>
            <TabsTrigger value="mm"> Radyo ,Sinema ve Televizyon</TabsTrigger>

          </TabsList>
          <TabsList>
            <TabsTrigger value="for-you">Mühendislik </TabsTrigger>
            <TabsTrigger value="following">Müşteri Hizmetleri</TabsTrigger>
            <TabsTrigger value="mm">Ofis Yönetimi ve İdari İşler</TabsTrigger>
            
            <TabsTrigger value="for-you">Part Time ve Ek İşler </TabsTrigger>
            <TabsTrigger value="following">Pazarlama ve Ürün Yönetimi</TabsTrigger>
            <TabsTrigger value="mm"> Radyo ,Sinema ve Televizyon</TabsTrigger>

          </TabsList>
          <TabsList>
            <TabsTrigger value="for-you">Tamir ve Bakım</TabsTrigger>
            <TabsTrigger value="following">Tarım ve Hayvancılık</TabsTrigger>
            <TabsTrigger value="mm">Tasarım </TabsTrigger>
            
            <TabsTrigger value="for-you">Tekstil ve Konfeksiyon </TabsTrigger>
            <TabsTrigger value="following">Üretim ve İmalat</TabsTrigger>
            <TabsTrigger value="mm"> Satış</TabsTrigger>

          </TabsList>
          <TabsContent value="for-you">
          </TabsContent>
          <TabsContent value="following">

          </TabsContent>
    





        <TabsContent value="mm">


    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
