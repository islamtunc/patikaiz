// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Ve salatu ve selamu ala Resulina Muhammedin 
// La ilahe illallah, Muhammedur Resulullah
// SuphanAllah velhamdulillah, Allahu Ekber
// Allah ümmetimizi korusun, birlik ve beraberliğimizi daim eylesin.


import { useSession } from "@/app/(navend)/SessionProvider";
import { useToast } from "@/hemanen/ui/use-toast";
import { MasePage } from "@/pirtukxane/types";
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

  const { session } = useSession();
  // session type may not declare 'user'; cast to any to access optional user property safely
  const user = (session as any)?.user;

  const mutation = useMutation({
    mutationFn: submitPost,
    onSuccess: async (newPost) => {
      const queryFilter = {
        queryKey: ["post-feed"],
        predicate(query) {
          const userId = user?.id;
          return (
            query.queryKey.includes("for-you") ||
            (userId &&
              query.queryKey.includes("user-posts") &&
              query.queryKey.includes(userId))
          );
        },
      } satisfies QueryFilters;

      await queryClient.cancelQueries(queryFilter);

      queryClient.setQueriesData<InfiniteData<MasePage, string | null>>(
        queryFilter,
        (oldData) => {
          if (!oldData) return oldData;
          const firstPage = oldData.pages[0];
          if (!firstPage) return oldData;

          // quick fix: cast newPost to any (or to the expected post type) to satisfy TS.
          // Better long-term: align the post types so casting is unnecessary.
          const updated = {
            ...oldData,
            pages: [
              {
                ...firstPage,
                posts: [newPost as any, ...firstPage.posts],
              },
              ...oldData.pages.slice(1),
            ],
          } as InfiniteData<MasePage, string | null>;

          return updated;
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