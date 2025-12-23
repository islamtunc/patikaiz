// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Ve salatu ve selamu ala Resulina Muhammedin 
// La ilahe illallah, Muhammedur Resulullah
// SuphanAllah velhamdulillah, Allahu Ekber
// Allah ümmetimizi korusun, birlik ve beraberliğimizi daim eylesin.


import { useSession } from "@/app/(navend)/SessionProvider";
import { useToast } from "@/hemanen/ui/use-toast";
import { DiyariPage } from "@/pirtukxane/types";
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

      queryClient.setQueriesData<InfiniteData<DiyariPage, string | null>>(
        queryFilter,
        (oldData) => {
          if (!oldData) return oldData;
          const firstPage = oldData.pages[0];
          if (!firstPage) return oldData;

          // return a new InfiniteData with the updated first page
          return {
            ...oldData,
            pages: [
              {
                ...firstPage,
                posts: [newPost, ...firstPage.posts],
              },
              ...oldData.pages.slice(1),
            ],
          };
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