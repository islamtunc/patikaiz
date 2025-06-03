// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Essalatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allahu Ekber velilahi'lhamd
// La ilahe illallah, Allahu Ekber Allahu Ekber, ve lillahi'lhamd
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ForYouFeed from "./ForYouFeed";
import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <Alert variant="info">Arabalar</Alert>
        <Tabs defaultValue="for-you">
          <TabsList>
            <TabsTrigger value="for-you">Satılık</TabsTrigger>
            <TabsTrigger value="rent">Kiralık</TabsTrigger>
            <TabsTrigger value="projects">Projeler</TabsTrigger>
            <TabsTrigger value="news">Haberler</TabsTrigger>
          </TabsList>
          <TabsContent value="for-you">
            <ForYouFeed />
          </TabsContent>
          <TabsContent value="rent">
            <div>Kiralık araba ilanları burada listelenecek.</div>
          </TabsContent>
          <TabsContent value="projects">
            <div>Araba projeleri burada listelenecek.</div>
          </TabsContent>
          <TabsContent value="news">
            <div>Araba haberleri burada listelenecek.</div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}