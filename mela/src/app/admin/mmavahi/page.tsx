// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd


"use client";

import PostEditor from "@/mcomponents/mmavahi/editor/PostEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ForYouFeed from "./ForYouFeed";
import SearchField from "@/mcomponents/mmavahi/SearchField";
import { Alert } from "react-bootstrap";
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5 p-5">
      <div className="w-full min-w-0 space-y-5">
        <Alert variant="success">Manage Products Page</Alert>
        
        <Tabs defaultValue="mm">
          <TabsList className="w-full">
            <TabsTrigger value="for-you">For You</TabsTrigger>
            <TabsTrigger value="mm">New Post</TabsTrigger>
          </TabsList>
          
          <TabsContent value="for-you">
            <Suspense fallback={<div>Loading...</div>}>
              <ForYouFeed />
            </Suspense>
          </TabsContent>
          
          <TabsContent value="following">
            <SearchField />
          </TabsContent>
          
          <TabsContent value="mm">
            <Suspense fallback={<div>Loading editor...</div>}>
              <PostEditor />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}