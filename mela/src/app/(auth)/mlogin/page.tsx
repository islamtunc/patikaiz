// Bismillahirahmanirahim

// Bismillahirahmanirahim 
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Subhanallah , Elhamdulillah, Allahu Ekber
// Hasbunallahu ve ni'mel vekil
// La havle ve la kuvvete illa billahil aliyyil azim



import loginImage from "@/assets/login-image.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import LoginForm from "./LoginForm";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Giriş Yap",
};

export default function Page() {
  return (
    <main  className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <h1 className="text-center text-3xl font-bold">PatikaiZ </h1>
          <div className="space-y-5">
            
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-muted" />
              <span>.....</span>
              <div className="h-px flex-1 bg-muted" />
            </div>
            <LoginForm />
   <Link href="/signup" className="block text-center hover:underline">
              
        Hesabin Yok mu ? Kaydol
            </Link>

  
<Button>
            <Link href="/malper" className="block text-center hover:underline">
              
        Giriş yapmadan devam et
            </Link>

            </Button>
          </div>
        </div>
        <Image
          src={loginImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
