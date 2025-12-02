// Bismillahirrahmanirrahim



import PostEditor from "@/hemanen/diwar/editor/PostEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/hemanen/ui/tabs";

import ForYouFeed from "./ForYouFeed";

import SearchField from "@/hemanen/SearchField";
import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

      <Alert>Manage Course Page</Alert>
        <Tabs defaultValue="for-you">
          <TabsList>
            <TabsTrigger value="for-you">For You</TabsTrigger>
            <TabsTrigger value="mm">New Post</TabsTrigger>

          </TabsList>
          <TabsContent value="for-you">
            <ForYouFeed />
          </TabsContent>
        
    





        <TabsContent value="mm">

  <PostEditor />

    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
