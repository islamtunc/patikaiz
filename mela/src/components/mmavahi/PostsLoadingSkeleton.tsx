// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Essalatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allahu Ekber velilahi'lhamd
// La ilahe illallah, Allahu Ekber Allahu Ekber, ve lillahi'lhamd




import { Skeleton } from "../ui/skeleton";

export default function PostsLoadingSkeleton() {
  return (
    <div className="space-y-5 w-full max-w-lg mx-auto px-2">
      <PhotoOnlySkeleton />
      <PhotoOnlySkeleton />
      <PhotoOnlySkeleton />
    </div>
  );
}

function PhotoOnlySkeleton() {
  return (
    <div className="w-full animate-pulse rounded-2xl bg-card p-3 sm:p-5 shadow-sm flex justify-center">
      <Skeleton className="w-full max-w-md h-40 sm:h-64 rounded-2xl bg-primary/10" />
    </div>
  );
}
