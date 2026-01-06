"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          ¿Necesitas soporte técnico confiable?
        </h2>

        <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
          Contáctanos ahora y recibe atención rápida y profesional para tu hogar
          o negocio.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-green-600 font-semibold hover:bg-green-50 transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a
            href="tel:+573001234567"
            className="flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-green-600 transition"
          >
            <FaPhoneAlt />
            Llamar ahora
          </a>
        </div>

        <p className="mt-6 text-sm text-green-100">
          Servicio técnico a domicilio • Atención rápida • Confianza garantizada
        </p>
      </div>
    </section>
  );
}
