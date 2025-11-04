// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import SearchField from "@/components/SearchField";
// Fix Radix Tabs imports (use named exports Root/List/Trigger/Content)
import {
  Root as Tabs,
  List as TabsList,
  Trigger as TabsTrigger,
  Content as TabsContent,
} from "@radix-ui/react-tabs";
import React from "react";
import Image from "react-bootstrap/Image";
import ForYouFeed from "./ForYouFeed";

function page() {
  return (
     <main className="flex w-full min-w-0 gap-5 p-">
      <div className="w-full min-w-0 space-y-5">
        <style>{`
          /* simple tab styles to avoid layout/CSS issues */
          .tabs-list { display:flex; gap:12px; align-items:center; border-bottom:1px solid #e6e6e6; padding:6px 0; }
          .tabs-trigger { padding:8px 12px; border-radius:8px; cursor:pointer; background:transparent; color:#333; font-weight:600; }
          .tabs-trigger[aria-selected="true"] { background:#0ea5a3; color:white; }
          .tabs-content { padding:12px 0; }
        `}</style>

        <Tabs defaultValue="mm">
          <TabsList className="tabs-list" aria-label="Takvim Sekmeleri">
            <TabsTrigger className="tabs-trigger" value="for-you">Sevgililer Gunu</TabsTrigger>
            <TabsTrigger className="tabs-trigger" value="dayik">Anneler Gunu</TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="bav">Babalar Gunu</TabsTrigger>
            <TabsTrigger className="tabs-trigger" value="mamoste">Ogretmenler Gunu</TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="rojbun">Dogum  Gunu</TabsTrigger>
          
          </TabsList>

                    <TabsContent className="tabs-content" value="for-you">
            <ForYouFeed />
          </TabsContent>
          <TabsContent className="tabs-content" value="dayik">
            <ForYouFeed />
          </TabsContent>
          <TabsContent className="tabs-content" value="bav">
            <ForYouFeed />
          </TabsContent>
          <TabsContent className="tabs-content" value="rojbun"></TabsContent>
        </Tabs>
           </div>
    </main>
  );
}

export default page;