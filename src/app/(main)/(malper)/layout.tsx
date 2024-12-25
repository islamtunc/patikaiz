// Bismillahirahmanirahim

"use client"

import { validateRequest } from "@/auth";

import MenuBar from "../MenuBar";
import Navbar from "../Navbar";
import { redirect } from "next/navigation";
import { use } from "react";
import { useSession } from "../SessionProvider";
import { Link } from "lucide-react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
 

  const session = await validateRequest();
  
    
  return (
      <div className="flex min-h-screen flex-col">

        <div className="mx-auto flex w-full max-w-7xl grow gap-5 p-5">
          {children}
        </div>

      </div>
  );
}
