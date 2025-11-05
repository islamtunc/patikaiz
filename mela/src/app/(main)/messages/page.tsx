// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ese-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// La ilahe illallah, Muhammeden Rasulullah
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
"use client";

import React from "react";
import ContactForm from "@/app/malper/components/mmfrm";

export default function MessagesPage() {
  return (
    <main className="container py-6">
      <h1 className="mb-4">Bize Yazın</h1>
      <div style={{ maxWidth: 720 }}>
        <ContactForm />
      </div>
    </main>
  );
}
