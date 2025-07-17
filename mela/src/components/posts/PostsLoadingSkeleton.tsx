// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ec
// Allah u Ekber velilahi'lhamd
// SubhAnAllah, SubhanAllah, SubhanAllah, ve'l-hamdulillah
// HasbunAllahu ve ni'mel vekil
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
 




import { Skeleton } from "../ui/skeleton";

export default function PostsLoadingSkeleton() {
  return (
    <div className="space-y-5 w-full max-w-lg mx-auto px-2">
      <PostLoadingSkeleton />
      <PostLoadingSkeleton />
      <PostLoadingSkeleton />
    </div>
  );
}

function PostLoadingSkeleton() {
  return (
    <div className="w-full animate-pulse space-y-3 rounded-2xl bg-card p-3 sm:p-5 shadow-sm border border-primary/30">
      <div className="flex flex-wrap gap-3 items-center">
        <Skeleton className="size-10 sm:size-12 rounded-full bg-primary/20" />
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-24 sm:w-32 rounded bg-primary/20" />
          <Skeleton className="h-4 w-16 sm:w-24 rounded bg-primary/10" />
        </div>
        <Skeleton className="h-4 w-16 sm:w-20 rounded bg-primary/10 ml-auto" />
      </div>
      <Skeleton className="h-8 rounded bg-primary/10" />
      <Skeleton className="h-40 rounded bg-primary/10" />
      <div className="flex gap-3 mt-2">
        <Skeleton className="h-8 w-20 sm:w-24 rounded bg-primary/20" />
        <Skeleton className="h-8 w-20 sm:w-24 rounded bg-primary/20" />
      </div>
    </div>
  );
}
