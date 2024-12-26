// Bismillahirahmanirahim



import React from 'react' 

export default async function Layout({ children }

) {



  

  return (
      <div className="flex min-h-screen flex-col">






        <div className="mx-auto flex w-full max-w-7xl grow gap-5 p-5">
          
          {children}
        </div>
        

      </div>
  );
}