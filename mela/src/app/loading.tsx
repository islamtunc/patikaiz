// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala Rasulillah



import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-60 gap-4 min-h-[40vh] sm:min-h-[60vh] w-full px-4">
      <Loader2 className="animate-spin text-primary" size={48} />
      <span className="text-lg font-semibold text-muted-foreground text-center">İlanlar yükleniyor, lütfen bekleyin...</span>
    </div>
  );
}
