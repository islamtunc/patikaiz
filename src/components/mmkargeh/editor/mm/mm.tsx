// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import MmkargehHome from "./mmkargeh/mm";
import MmerdHome from "./mmerd/mm";
import MmmalHome from "./mmmal/mm";
import MmbinaHome from "./mmbina/mm";
import MmmDvHome from "./mmdvr/mm";
import Mmm from "./mm/mm";




export default function MmmmmmHome() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="ev">Ev</TabsTrigger>
            <TabsTrigger value="arsa">Arsa</TabsTrigger>
            <TabsTrigger value="kargeh">İş Yeri</TabsTrigger>
            <TabsTrigger value="bina">Bina</TabsTrigger>
            <TabsTrigger value="dvr">Devre Mülk</TabsTrigger>
            <TabsTrigger value="mm">Turistik Tesis</TabsTrigger>
            
            
            
            
          </TabsList>
         
          <TabsContent value="ev">
         
         <MmmalHome/>
          </TabsContent>
          <TabsContent value="arsa">
          <MmerdHome/>

          </TabsContent>
          <TabsContent value="kargeh">
         
         <MmkargehHome/>
          </TabsContent>

          <TabsContent value="bina">
         
          <MmbinaHome/>
          </TabsContent>
          <TabsContent value="dvr">


          <MmmDvHome/>
          </TabsContent>
        <TabsContent value="mm">
          <Mmm/>
    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
