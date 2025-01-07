// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import SearchField from "@/components/SearchField";
import ForYouFeed from "./ForYouFeed";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

        <h1 className="text-3xl font-semibold">Emlak</h1>
        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">İlanlar</TabsTrigger>
            <TabsTrigger value="following">Kategoride Ara</TabsTrigger>
            <TabsTrigger value="mm">Yeni ilan Ver</TabsTrigger>

          </TabsList>
          <TabsContent value="for-you">

            <ForYouFeed/>
          </TabsContent>
          <TabsContent value="following">

<SearchField/>
          </TabsContent>
    





        <TabsContent value="mm">
<h1 className="text-3xl font-semibold">İlan vermek için <a href="/signup">üye olun</a> </h1>

    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
