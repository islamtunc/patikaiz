// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import PostEditor from "../mmfrtn";

import MmPostEditor from "../mmkr";
export default function MmmHome() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">Satılık </TabsTrigger>
            
            <TabsTrigger value="mmm">Devren Satılık </TabsTrigger>

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
