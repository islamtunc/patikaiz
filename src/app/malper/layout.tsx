// Bismillahirahmanirahim 

import MmmNavbar from "./mmnav";



export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
 

  return (
 

    <div>

<MmmNavbar/>
        {children}
    </div>
  );
}
