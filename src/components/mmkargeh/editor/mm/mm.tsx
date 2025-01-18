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
            <TabsTrigger value="for-you">Ev</TabsTrigger>
            <TabsTrigger value="following">Arsa</TabsTrigger>
            <TabsTrigger value="for-you">İş Yeri</TabsTrigger>
            <TabsTrigger value="following">Bina</TabsTrigger>
            <TabsTrigger value="for-you">Devre Mülk</TabsTrigger>
            <TabsTrigger value="following">Turistik Tesis</TabsTrigger>
            
            
            
            
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
