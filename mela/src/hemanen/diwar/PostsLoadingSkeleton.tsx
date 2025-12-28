// Bismillahir Rahmanir Rahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin
// La ilahe illallah, Muhammedur Resulullah
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber


import { Skeleton } from "../ui/skeleton";

export default function PostsLoadingSkeleton() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-card rounded-lg space-y-4">
      <CalendarLoadingSkeleton />
      <CalendarLoadingSkeleton />
      <CalendarLoadingSkeleton />
    </div>
  );
}

function CalendarLoadingSkeleton() {
  // 7 x 6 calendar grid (42 cells)
  const cells = Array.from({ length: 42 });

  return (
    <div className="border rounded-lg p-3 bg-white">
      <div className="flex items-center justify-between mb-3">
        <Skeleton className="h-6 w-40 rounded" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-xs text-muted-foreground mb-2">
        {["Su","Du","Se","Çar","Pên","În","Şem"].map((d) => (
          <div key={d} className="text-center">
            <Skeleton className="h-4 w-8 rounded mx-auto" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {cells.map((_, i) => (
          <div
            key={i}
            className="p-2 min-h-[3.25rem] flex flex-col justify-between rounded border bg-muted/30"
          >
            <div className="flex justify-between items-start">
              <Skeleton className="h-4 w-4 rounded" />
              {/* small badge for posts count */}
              <Skeleton className="h-4 w-6 rounded" />
            </div>
            <div className="mt-1">
              <Skeleton className="h-3 w-full rounded mb-1" />
              <Skeleton className="h-3 w-3/4 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* removed avatar/author area to match calendar style */}
    </div>
  );
}
