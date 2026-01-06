"use client";

import { FaWhatsapp, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Contáctanos
            </h2>

            <p className="text-slate-300 mb-6">
              ¿Necesitas instalación, mantenimiento o soporte técnico?
              Escríbenos o llámanos y coordinamos la visita.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-400" />
                <a
                  href="tel:+573001234567"
                  className="font-semibold hover:underline"
                >
                  +57 300 123 4567
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-400" />
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="text-green-400" />
                <span className="text-slate-300">
                  Lunes a Sábado • 8:00 AM – 6:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Callout */}
          <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700">
            <h3 className="text-xl font-semibold mb-3">
              Servicio técnico a domicilio
            </h3>
            <p className="text-slate-300 mb-6">
              Atención personalizada en hogares y pequeños negocios dentro de
              nuestra área de servicio.
            </p>

            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition"
            >
              <FaWhatsapp />
              Escríbenos por WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
