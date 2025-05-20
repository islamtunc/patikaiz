// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecma'in
// Allahu Ekber velilahi'lhamd

import { Toaster } from "@/components/ui/toaster";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { extractRouterConfig } from "uploadthing/server";
import { fileRouter } from "./api/uploadthing/core";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | İş İlanları",
    default: "İş İlanları",
  },
  description: "En güncel iş ilanlarını burada bulabilirsiniz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header>
              <h1 style={{ textAlign: "center", margin: "20px 0" }}>
                İş İlanları
              </h1>
            </header>
            <main>{children}</main>
          </ThemeProvider>
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}