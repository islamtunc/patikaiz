// Bismillahirrahmanirrahim 
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// La ilahe illallah, 
// Muhammedur Resulullah
// SuphanAllah velhamdulillah, Allahu Ekber
// LA İLAHE İLLALAHU VAHDEHU LA ŞERİKE LEH, LEHUL MULKU LEHUL HAMDU YUHHİYİ VE YUMİTU VE HÜVE ALA KULLİ ŞEYİN KADİR
// SEYYİDİNA MUHAMMEDEN ABDUHU VE RESULUH
// LA İLAHE İLLALLAH
"use client";

import InfiniteScrollContainer from "@/hemanen/InfiniteScrollContainer";
import Post from "@/hemanen/diyari/Post";
import PostsLoadingSkeleton from "@/hemanen/diwar/PostsLoadingSkeleton";
import kyInstance from "@/pirtukxane/ky";
import { MmkedkarPage} from "@/pirtukxane/types";
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
          "/api/posts/mmkedkar",
          pageParam ? { searchParams: { cursor: pageParam } } : {},
        )
        .json<MmkedkarPage>(),
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
        <Post key={post.id} post={post} />
      ))}
      {isFetchingNextPage && <Loader2 className="mx-auto my-3 animate-spin" />}
    </InfiniteScrollContainer>
  );
}
