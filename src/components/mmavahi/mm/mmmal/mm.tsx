// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostEditor from "../editor/mmfrtn";
import MmPostEditor from "../editor/mmkr";



export default function MmHome() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">Satılık </TabsTrigger>
            <TabsTrigger value="following">Kiralık</TabsTrigger>
            
            <TabsTrigger value="mmm">Devren Satılık </TabsTrigger>
            <TabsTrigger value="mmmmm">Devren Kiralık</TabsTrigger>

          </TabsList>
         
          <TabsContent value="for-you">
            <PostEditor/>
          </TabsContent>
          <TabsContent value="following">
        <MmPostEditor/>
          </TabsContent>
    





        <TabsContent value="mm">


    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
