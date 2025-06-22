// Bismillahirrahmanirrahim
// Konuma ve/veya arama sorgusuna göre mmavahi arama sonuçlarını gösterir

import { useInfiniteQuery } from "@tanstack/react-query";
import kyInstance from "@/lib/ky";
import Post from "./Post";
import PostsLoadingSkeleton from "./PostsLoadingSkeleton";
import InfiniteScrollContainer from "@/components/InfiniteScrollContainer";

export default function SearchFeed({ q, lat, lng }: { q?: string; lat?: number; lng?: number }) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["mmavahi-search", q, lat, lng],
    queryFn: ({ pageParam }) =>
      kyInstance
        .get("/api/posts/mmavahi/search", {
          searchParams: {
            ...(q ? { q } : {}),
            ...(lat && lng ? { lat, lng } : {}),
            ...(pageParam ? { cursor: pageParam } : {}),
          },
        })
        .json<any>(),
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const posts = data?.pages.flatMap((page) => page.posts) || [];

  if (status === "pending") return <PostsLoadingSkeleton />;
  if (status === "error")
    return <p className="text-center text-destructive">Bir hata oluştu.</p>;
  if (!posts.length)
    return <p className="text-center text-muted-foreground">Sonuç bulunamadı.</p>;

  return (
    <InfiniteScrollContainer
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
      onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
    >
      {posts.map((post) => (
        <Post key={post.id} post={post} viewerId={""} />
      ))}
      {isFetchingNextPage && <div className="mx-auto my-3">Yükleniyor...</div>}
    </InfiniteScrollContainer>
  );
}
