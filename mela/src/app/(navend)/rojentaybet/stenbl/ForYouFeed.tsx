// Bismillahirrahmanirrahim 
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// La ilahe illallah, Muhammeden Abduhu ve Resuluhu
// SuphanAllah velhamdulillah, Allahu Ekber

"use client";

import InfiniteScrollContainer from "@/hemanen/InfiniteScrollContainer";
import Post from "@/hemanen/diyari/Post";
import PostsLoadingSkeleton from "@/hemanen/rojentaybet/stenbl/PostsLoadingSkeleton";
import kyInstance from "@/pirtukxane/ky";
import { StenbolPage} from "@/pirtukxane/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

export default function ForYouFeed() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["post-feed", "for-you"],
    queryFn: ({ pageParam }) =>
      kyInstance
        .get(
          "/api/parvekirin/rojentaybet/stenbol",
          pageParam ? { searchParams: { cursor: pageParam } } : {},
        )
        .json<StenbolPage>(),
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const posts = data?.pages.flatMap((page) => page.posts) || [];

  if (status === "pending") {
    return <PostsLoadingSkeleton />;
  }

  if (status === "success" && !posts.length && !hasNextPage) {
    return (
      <p className="text-center text-muted-foreground">
        Hê kesî tiştek parvenekirî ye
      </p>
    );
  }

  if (status === "error") {
    return (
      <p className="text-center text-destructive">
        Pirsgirek derket 
      </p>
    );
  }

  return (
    <InfiniteScrollContainer
      className="space-y-5"
      onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
    >
      {posts.map((post) => (
        <Post
          key={post.id}
          post={{
            ...post,
            description: (post as any).description ?? null,
          }}
        />
      ))}
      {isFetchingNextPage && <Loader2 className="mx-auto my-3 animate-spin" />}
    </InfiniteScrollContainer>
  );
}
