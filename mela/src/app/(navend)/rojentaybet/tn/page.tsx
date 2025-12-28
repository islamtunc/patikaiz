// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Ve salatu ve selamu ala Resulina Muhammedin 
// Allah ümmetimizi korusun, birlik ve beraberliğimizi daim eylesin.
// Allah bizleri doğru yoldan ayırmasın, İslam'ı en güzel şekilde yaşamayı nasip etsin.
// Allah bizleri Kur'an ve Sünnet'e bağlı, salih ameller işleyen kullarından eylesin.
// Allah bizleri Peygamber Efendimiz'in (s.a.v) izinden giden, O'na layık bir ümmet eylesin.
// SuphanAllah velhamdulillah, Allahu Ekber.
// La ilahe illallah, Muhammeden abduhu ve resuluh.
import PostEditor from "@/hemanen/rojentaybet/tn/editor/PostEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/hemanen/ui/tabs";

import ForYouFeed from "./ForYouFeed";

import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5 p-">
      <div className="w-full min-w-0 space-y-5">

      <Alert variant="success">  Yalnızlık Temalı Takvimler Sayfasını Yönetin </Alert>
        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">Yayınlananlar</TabsTrigger>
            <TabsTrigger value="mm">Yeni Ürün</TabsTrigger>
          </TabsList>
          <TabsContent value="for-you">
            <ForYouFeed />
          </TabsContent>
          <TabsContent value="following">

          </TabsContent>
    





        <TabsContent value="mm">

  <PostEditor />

    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
