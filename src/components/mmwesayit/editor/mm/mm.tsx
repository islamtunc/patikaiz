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
            <TabsTrigger value="for-you">Otomobil </TabsTrigger>
            <TabsTrigger value="following">Arazi, Suv ve Pickup</TabsTrigger>
            <TabsTrigger value="for-you">Motosiklet</TabsTrigger>
          
            
            
            
          </TabsList>
       <TabsList>

       <TabsTrigger value="for-you">Minivan</TabsTrigger>

       <TabsTrigger value="following">Ticari Araçlar</TabsTrigger>





       <TabsTrigger value="for-you">Elektrikli Araçlar </TabsTrigger>

       </TabsList>



      <TabsList>

            <TabsTrigger value="following">Deniz Araçları</TabsTrigger>
            <TabsTrigger value="for-you">Hasarlı Araçlar</TabsTrigger>
            <TabsTrigger value="following">Karavan</TabsTrigger>
            

      </TabsList>



          <TabsList>
            <TabsTrigger value="following">Klasik Araçlar</TabsTrigger>
            <TabsTrigger value="for-you">Hava Araçları</TabsTrigger>
            <TabsTrigger value="following">ATV</TabsTrigger>
            
            
            
            
          </TabsList>
          <TabsList>
            <TabsTrigger value="for-you"> Engelli Plakalı Araçlar</TabsTrigger>
           
            
            
            
          </TabsList>



         
          <TabsContent value="mm1">
         
         <MmHome/>
          </TabsContent>
          <TabsContent value="mm3">

<MmmHome/>
          </TabsContent>
    





        <TabsContent value="mm5">


    </TabsContent>

    <TabsContent value="mm7">
         
         <MmHome/>
          </TabsContent>
          <TabsContent value="mm9">

<MmmHome/>
          </TabsContent>
    





        <TabsContent value="mm11">


    </TabsContent>
    <TabsContent value="mm13">
         
         <MmHome/>
          </TabsContent>
          <TabsContent value="mm15">

<MmmHome/>
          </TabsContent>
    





        <TabsContent value="mm17">


    </TabsContent>


    <TabsContent value="mm19">
         
         <MmHome/>
          </TabsContent>
          <TabsContent value="mm21">

<MmmHome/>
          </TabsContent>
    





        <TabsContent value="mm23">


    </TabsContent>


    <TabsContent value="mm25">
         
         <MmHome/>
          </TabsContent>
          <TabsContent value="mm27">

<MmmHome/>
          </TabsContent>
    





        <TabsContent value="mm29">


    </TabsContent>

  
    <TabsContent value="mm35">
         
         <MmHome/>
          </TabsContent>
          <TabsContent value="mm37">

<MmmHome/>
          </TabsContent>
    





        <TabsContent value="mm39">


    </TabsContent>


    <TabsContent value="mm41">
         
         <MmHome/>
          </TabsContent>
          <TabsContent value="mm43">

<MmmHome/>
          </TabsContent>
    





        <TabsContent value="mm45">


    </TabsContent>


    <TabsContent value="mm47">
         
         <MmHome/>
          </TabsContent>
          <TabsContent value="mm49">

<MmmHome/>
          </TabsContent>
    





        <TabsContent value="mm51">


    </TabsContent>


    <TabsContent value="mm53">
         
         <MmHome/>
          </TabsContent>
          <TabsContent value="mm55">

<MmmHome/>
          </TabsContent>
    





        <TabsContent value="mm57">


    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
