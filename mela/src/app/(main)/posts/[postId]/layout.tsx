//Bismillahirrahmanirahim 
//Elhamdulillahirabbulalemin 
// Es selatu vesselamu ala rasulina Muhammed'in ve ala alihi ve sahbihi ecmain.
//SuphanAllah ul Azim ve Bihamdihi
//Allah U Ekber velillahilhamd
//La ilahe illAllah u vahdehu la şerike leh,lehul mulku ve lehul hamdu
//Ve huwe ala kulli şey in kadir







import ChatProviderClient from "../../ChatProviderClient";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ChatProviderClient />
      {children}
      <ChatProviderClient />
    </>
  );
}






