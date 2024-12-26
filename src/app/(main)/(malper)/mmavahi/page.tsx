// Bismillahirahmanirahim

// Elhamdulillahi Rabbul Alemin
// Allahumme Salli ala Muhammedin ve ala ali Muhammed


import PostEditor from "@/components/posts/editor/PostEditor";
import SearchField from "@/components/SearchField";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import { useSession } from "../../SessionProvider";


 
export default function Home() {


const { user } = useSession;


 
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

      <h5 style={{textAlign:"center",color:"green",fontSize:35}} >Emlak </h5>

        <Tabs defaultValue="PostEditor">
          <TabsList>
        
            <TabsTrigger value="for-you">ilanlar</TabsTrigger>
        
            <TabsTrigger value="following">Kategoride Ara</TabsTrigger>
        
            <TabsTrigger value="PostEditor">Yeni İlan ver</TabsTrigger>

          </TabsList>
          <TabsContent value="PostEditor">


{user ? <PostEditor /> : <p>İlan vermek için giriş yapmalısınız.</p>}
          </TabsContent>
          <TabsContent value="following">



            <SearchField/>
          </TabsContent>
          <TabsContent value="for-you">



</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
