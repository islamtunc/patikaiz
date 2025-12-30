// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Ve salatu ve selamu ala Resulina Muhammedin 
// La ilahe illallah, Muhammedur Resulullah
// SuphanAllah velhamdulillah, Allahu Ekber
// Allah ümmetimizi korusun, birlik ve beraberliğimizi daim eylesin.


import { useSession } from "@/app/(navend)/SessionProvider";
import { useToast } from "@/hemanen/ui/use-toast";
import { DayikPage} from "@/pirtukxane/types";
import {
  InfiniteData,
  QueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { submitPost } from "./actions";

export function useSubmitPostMutation() {
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const { user } = useSession();

  const mutation = useMutation({
    mutationFn: submitPost,
    onSuccess: async (newPost) => {
      const queryFilter = {
        queryKey: ["post-feed"],
        predicate(query) {
          return (
            query.queryKey.includes("for-you") ||
            (query.queryKey.includes("user-posts") &&
              query.queryKey.includes(user.id))
          );
        },
      } satisfies QueryFilters;

      await queryClient.cancelQueries(queryFilter);

      queryClient.setQueriesData<InfiniteData<DayikPage, string | null>>(
        queryFilter,
        (oldData) => {
          if (!oldData) return undefined;

          const firstPage = oldData.pages[0];
          if (!firstPage) return undefined;

          // Filter out any null posts and ensure types align with DayikPage
          const sanePosts = firstPage.posts.filter(Boolean) as typeof firstPage.posts;

          const newFirstPage = {
            ...firstPage,
            posts: [newPost as NonNullable<typeof sanePosts[number]>, ...sanePosts],
          };

          const newData: InfiniteData<DayikPage, string | null> = {
            pageParams: oldData.pageParams,
            pages: [newFirstPage, ...oldData.pages.slice(1)],
          };

          return newData;
        },
      );

      queryClient.invalidateQueries({
        queryKey: queryFilter.queryKey,
        predicate(query) {
          return queryFilter.predicate(query) && !query.state.data;
        },
      });

      toast({
        description: "gönderi yayınlandı",
      });
    },
    onError(error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: "Sorun çıktı tekrar deneyin devam ederse yekazad SC ile iletişime geçin.",
      });
    },
  });

  return mutation;
}