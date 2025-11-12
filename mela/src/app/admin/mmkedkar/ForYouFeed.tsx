// Bismillahirrahmanirrahim 
// Elhamdulillahi Rabbil Alamin
// Ve salatu ve selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah ümmetimizi korusun, birlik ve beraberliğimizi daim eylesin.
// Allah bizleri doğru yoldan ayırmasın, İslam'ı en güzel şekilde yaşamayı nasip etsin.
// Allah bizleri Kur'an ve Sünnet'e bağlı, salih ameller işleyen kullarından eylesin.
// Allah bizleri Peygamber Efendimiz'in (s.a.v) izinden giden, O'na layık bir ümmet eylesin.
// SuphanAllah velhamdulillah, Allahu Ekber.
// La ilahe illallah, Muhammedur Resulullah.
"use client";

import InfiniteScrollContainer from "@/components/InfiniteScrollContainer";
import Post from "@/components/posts/Post";
import PostsLoadingSkeleton from "@/components/posts/PostsLoadingSkeleton";
import kyInstance from "@/lib/ky";
import { PostsPage } from "@/lib/types";
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
          "/mapi/posts/mmkedkar",
          pageParam ? { searchParams: { cursor: pageParam } } : {},
        )
        .json<PostsPage>(),
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
