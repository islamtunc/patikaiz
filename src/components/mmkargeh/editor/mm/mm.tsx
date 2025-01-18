// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MmmHome from "./mmerd/mm";
import MmHome from "./mmmal/mm";




export default function MmmmmmHome() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">Sağlık </TabsTrigger>
            <TabsTrigger value="following">Hukuk</TabsTrigger>
            <TabsTrigger value="for-you">Eğlence</TabsTrigger>
          
            
            
            
          </TabsList>
       <TabsList>

       <TabsTrigger value="for-you">IT ve Yazılım Kaynaakları</TabsTrigger>

       <TabsTrigger value="following">Güzellik ve Bakım</TabsTrigger>





       <TabsTrigger value="for-you">İşletme ve Stratejik Yöntem </TabsTrigger>

       </TabsList>



      <TabsList>

            <TabsTrigger value="following">İnsan Kaynakları</TabsTrigger>
            <TabsTrigger value="for-you">Muhasebe ,Finans ve Bankacılık</TabsTrigger>
            <TabsTrigger value="following">Mühendsilik</TabsTrigger>
            

      </TabsList>



          <TabsList>
            <TabsTrigger value="following">Koruma ve Güvenlik</TabsTrigger>
            <TabsTrigger value="for-you">Lojistik ve Taşıma</TabsTrigger>
            <TabsTrigger value="following">Mağazacılık ve Perakendecilik</TabsTrigger>
            
            
            
            
          </TabsList>
          <TabsList>
            <TabsTrigger value="for-you">Müşteeri Hizmetleri  </TabsTrigger>
            <TabsTrigger value="following">Ofis Yönetimi ve İdari İşler</TabsTrigger>
            <TabsTrigger value="for-you">Part Time ve Ek İş Fırsatları</TabsTrigger>
          
            
            
            
          </TabsList>











         <TabsList>

         <TabsTrigger value="for-you">Tekstil ve Konfeksiyon</TabsTrigger>
            <TabsTrigger value="following">Üretim ve İmalat</TabsTrigger>
            

         <TabsTrigger value="following">Restoran ve Konaklama</TabsTrigger>

         </TabsList>









          <TabsList>

          <TabsTrigger value="following">Pazarlama ve Ürün Yönetimi</TabsTrigger>
            <TabsTrigger value="for-you">Radyo,Sinema ve Televizyon</TabsTrigger>
            
          </TabsList>
          <TabsList>
            <TabsTrigger value="for-you">Satış  </TabsTrigger>
            <TabsTrigger value="following">Tamir ve Bakım</TabsTrigger>
            <TabsTrigger value="for-you">Tasarım </TabsTrigger>
            <TabsTrigger value="following">Tarım ve Hayvancılık</TabsTrigger>
            
            
            
            
          </TabsList>
         
          <TabsContent value="for-you">
         
         <MmHome/>
          </TabsContent>
          <TabsContent value="following">

<MmmHome/>
          </TabsContent>
    





        <TabsContent value="mm">


    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
