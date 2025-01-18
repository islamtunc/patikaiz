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
            <TabsTrigger value="ev">Ev</TabsTrigger>
            <TabsTrigger value="arsa">Arsa</TabsTrigger>
            <TabsTrigger value="kargeh">İş Yeri</TabsTrigger>
            <TabsTrigger value="bina">Bina</TabsTrigger>
            <TabsTrigger value="dvr">Devre Mülk</TabsTrigger>
            <TabsTrigger value="mm">Turistik Tesis</TabsTrigger>
            
            
            
            
          </TabsList>
         
          <TabsContent value="ev">
         
         <MmHome/>
          </TabsContent>
          <TabsContent value="arsa">

<MmmHome/>
          </TabsContent>
          <TabsContent value="kargeh">
         
         <MmHome/>
          </TabsContent>

          <TabsContent value="bina">
         
         <MmHome/>
          </TabsContent>
          <TabsContent value="dvr">

<MmmHome/>
          </TabsContent>



        <TabsContent value="mm">


    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
