// Bismillahirrahmanirrahim



import PostEditor from "@/components/mmavahi/editor/PostEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ForYouFeed from "./ForYouFeed";

import MmHome from "@/components/mmavahi/mmmal/mm";
import MmmmmmHome from "@/components/mmavahi/mm";

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
            <ForYouFeed />
          </TabsContent>
          <TabsContent value="following">

          </TabsContent>
    





        <TabsContent value="mm">
<MmmmmmHome/>

    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
