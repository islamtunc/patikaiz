// Bismillahirrahmanirrahim 
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber


"use client";

import InfiniteScrollContainer from "@/hemanen/InfiniteScrollContainer";
import Post from "@/hemanen/mase/Post";
import PostsLoadingSkeleton from "@/hemanen/mase/PostsLoadingSkeleton";
import kyInstance from "@/pirtukxane/ky";
import { MasePage } from "@/pirtukxane/types";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { toast } from "@/hemanen/ui/use-toast";
import { useSession } from "@/app/(navend)/SessionProvider";


export default function ForYouFeed() {
  const { user } = useSession();
  const queryClient = useQueryClient();
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
          "/api/parvekirin/mase",
          pageParam ? { searchParams: { cursor: pageParam } } : {},
        )
        .json<MasePage>(),
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const posts = data?.pages.flatMap((page) => page.posts) || [];

  const deleteMutation = useMutation({
    mutationFn: async (postId: string) => {
      await kyInstance.delete(`/api/parvekirin/mase/${postId}`);
    },
    onSuccess: () => {
      toast({
        description: "Gönderi silindi",
        variant: "default",
      });
      // invalidate feed so UI refreshes without full reload
      queryClient.invalidateQueries({ queryKey: ["post-feed"] });
    },
    onError: () => {
      toast({
        description: "Silme işlemi başarısız",
        variant: "destructive",
      });
    },
  });

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
        <div key={post.id} className="relative">
          <div className="mb-2 flex gap-2 justify-end">
            {user?.id === post.user.id && (
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => deleteMutation.mutate(post.id)}
                disabled={deleteMutation.isPending}
              >
                Sil
              </Button>
            )}
          </div>
          <Post post={post as any} />
        </div>
      ))}
      {isFetchingNextPage && <Loader2 className="mx-auto my-3 animate-spin" />}
    </InfiniteScrollContainer>
  );
}
