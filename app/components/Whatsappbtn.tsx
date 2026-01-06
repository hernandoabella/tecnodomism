"use client";

import { FaWhatsapp } from "react-icons/fa";

type WhatsappBtnProps = {
  phone?: string; // formato internacional sin +
  message?: string;
};

export default function WhatsappBtn({
  phone = "573001234567", // CAMBIA ESTE NÚMERO
  message = "Hola, necesito soporte técnico",
}: WhatsappBtnProps) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center justify-center
        w-14 h-14
        rounded-full
        bg-green-500 hover:bg-green-600
        text-white
        shadow-lg
        transition-transform duration-200
        hover:scale-110
      "
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}
