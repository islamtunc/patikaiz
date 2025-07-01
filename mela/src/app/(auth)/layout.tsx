// Bismillahirahmanirahim
// Elhamdulillahi Rabbil Alamin
// Es-salatu was-salamu 'ala Rasulillah ve ala alihi ve sahbihi ecmain
// Allah u Ekber velillahilhamd
// SuphanAllah, SubhanAllah, SubhanAllah
// Allah u Ekber ve Lillahi'l Hamd
// La ilahe illallah, Allahu Ekber, Allahu Ekber, Allahu Ekber

import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();
  console.log("validateRequest result:", user);

  if (user) {
    console.log("Kullanıcı bulundu, anasayfaya yönlendiriliyor...");
    redirect("/");
  }

  return <>{children}</>;
}
