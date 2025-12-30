// Bismillahirrahmanirahim
// Elhamdullillahirabbulalemin
// SuphanAllahi velhamdulillahi ve la ilahe illAllah u vAllah u Ekber 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah

import { SessionProvider } from "./Ewlehi";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
