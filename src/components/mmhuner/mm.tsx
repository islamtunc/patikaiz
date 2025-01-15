// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



export default function MmHome() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">Satılık </TabsTrigger>
            <TabsTrigger value="following">Kiralık</TabsTrigger>
            <TabsTrigger value="mm">Eğlence</TabsTrigger>
            
            <TabsTrigger value="for-you">Devren Satılık </TabsTrigger>
            <TabsTrigger value="following">Kategoride Ara</TabsTrigger>
            <TabsTrigger value="mm">Yeni ilan Ver</TabsTrigger>

          </TabsList>
         
          <TabsContent value="for-you">
          </TabsContent>
          <TabsContent value="following">

          </TabsContent>
    





        <TabsContent value="mm">


    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
