// Bismillahirahmanirahim



import ForYouFeed from "@/app/(main)/ForYouFeed";
import PostEditor from "./posts/editor/PostEditor";
import SearchField from "@/components/SearchField";
import TrendsSidebar from "@/components/TrendsSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

      <h5 style={{textAlign:"center",color:"green",fontSize:35}} >Araba  </h5>

        <Tabs defaultValue="PostEditor">
          <TabsList>
        
            <TabsTrigger value="for-you">ilanlar</TabsTrigger>
        
            <TabsTrigger value="following">Kategoride Ara</TabsTrigger>
        
            <TabsTrigger value="PostEditor">Yeni İlan ver</TabsTrigger>

          </TabsList>
          <TabsContent value="PostEditor">


<PostEditor/>
          </TabsContent>
          <TabsContent value="following">



            <SearchField/>
          </TabsContent>
          <TabsContent value="for-you">

<ForYouFeed/>

</TabsContent>
        </Tabs>
      </div>
      <TrendsSidebar />
    </main>
  );
}
