// Bismillahirahmanirahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd
"use client";

import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function ContactFloating() {
  const whatsappNumber = "+905436366942";
  const telNumber = "+905436366942";
  const waLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Merhaba, takvim hakkında bilgi almak istiyorum."
  )}`;
  const telLink = `tel:${telNumber}`;

  const commonStyle: React.CSSProperties = {
    width: 56,
    height: 56,
    borderRadius: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
    zIndex: 9999,
    textDecoration: "none",
  };

  return (
    <>
      {/* WhatsApp - bottom right */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp ile ulaş"
        style={{
          ...commonStyle,
          position: "fixed",
          right: 16,
          bottom: 16,
          background: "#25D366",
        }}
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Telefon - bottom left */}
      <a
        href={telLink}
        aria-label="Telefon"
        title="Telefon ile ara"
        style={{
          ...commonStyle,
          position: "fixed",
          left: 16,
          bottom: 16,
          background: "#007bff",
        }}
      >
        <FaPhone size={20} />
      </a>
    </>
  );
}