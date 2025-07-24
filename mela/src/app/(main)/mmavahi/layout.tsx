// Bismillahirahmanirahim 
// Elhamdulillahi Rabbil Alamin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber ve Lillahi'l-hamd
// La ilahe illallah u vahdehu la şerike leh, lehul mulku lehul hemdu ve
// huve ala kulli şeyin kadir

import 'bootstrap/dist/css/bootstrap.css'
import "stream-chat-react/dist/css/v2/index.css";
import ChatProviderClient from "../ChatProviderClient";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
      <div className="flex min-h-screen flex-col">
      <ChatProviderClient>
            {children}
          </ChatProviderClient>
        </div>
      
  );
}
