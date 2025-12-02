// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd


import React from "react";
import { Toaster } from "@/hemanen/ui/toaster";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { extractRouterConfig } from "uploadthing/server";
import { fileRouter } from "./api/uploadthing/core";
import ReactQueryProvider from "./ReactQueryProvider";

import Alert from 'react-bootstrap';
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
    template: "%s | Patika",
    default: "Patika - Duvar Takvimi",
  },
  description:
    "Patika - Kişiye özel ve temalı duvar takvimleri. Hızlı üretim, farklı kağıt seçenekleri, toplu sipariş indirimleri. A3 / A2 boyutları.",
  keywords: [
    "duvar takvimi",
    "hediyelik takvim",
    "patikaiz",
    "takvim baskı",
    "duvar takvimi 2026",
    "sanat takvimi",
    "yapraklı günlük takvim",
    "estetik  duvar takvimi",
    "dekoratif duvar takvimi",
    "koleksiyon takvimi",
    "sevgiliye anlamlı hediye"
  
  ],
  openGraph: {
    title: "Patika - Duvar Takvimi",
    description:
      "Kişiye özel ve temalı duvar takvimleri. Hızlı üretim, farklı kağıt seçenekleri, toplu sipariş indirimleri.",
    url: "https://patikaiz.com",
    siteName: "Patika",
    images: [
      {
        url: "https://patikaiz.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Patika Duvar Takvimi Örnek",
      },
    ],
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patika - Duvar Takvimi",
    description:
      " Hediyelik ve temalı duvar takvimleri. Hızlı üretim, farklı kağıt seçenekleri.",
    images: ["https://patikaiz.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://www.patikaiz.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // basic structured data for site (replace domain / logos dynamically)
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://patikaiz.com",
    "name": "Patika - Duvar Takvimi",
    "publisher": {
      "@type": "Organization",
      "name": "Yekazad Software Center",
      "logo": {
        "@type": "ImageObject",
        "url": "https://patikaiz.com/logo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://patikaiz.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ReactQueryProvider>

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />

        <Toaster />
      </body>
    </html>
  );
}

export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-16 bg-gray-800 text-white">
      <p className="text-sm">© {new Date().getFullYear()} Yekazad Software Center</p>
    </footer>
  );
}
