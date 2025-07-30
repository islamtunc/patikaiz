// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammed'in ve ala alihi ve sahbihi ecma'in
// Allahu Ekber velilahi'lhamd
// SUPHANALLAH VELHAMDULİLLAH VE ALLAH U EKBER
// LA İLAHE İLLALLAH U VAHDEHU LA ŞERİKE LEH LEHUL MULKU LEHUL HEMDU VE
// HUVE ALA KULLİ ŞEYİN KADİR




"use client";
import React from "react";

import PostEditor from "@/components/posts/editor/PostEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ForYouFeed from "./ForYouFeed";

import SearchField from "@/components/SearchField";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

        <h1 className="text-3xl font-semibold">İş İlanları </h1>
        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">İlanlar</TabsTrigger>
            <TabsTrigger value="following">Kategoride Ara</TabsTrigger>
            <TabsTrigger value="mm">Yeni İlan ver</TabsTrigger>

          </TabsList>
          <TabsContent value="for-you">
            <ForYouFeed viewerId={""} />
          </TabsContent>
          <TabsContent value="following">

      <SearchField/>
          </TabsContent>






        <TabsContent value="mm">

  <PostEditor />

    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}