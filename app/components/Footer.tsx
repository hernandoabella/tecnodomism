"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Tecno Domi SM
            </h3>
            <p className="text-sm text-slate-400">
              Servicios técnicos profesionales para hogares y pequeños negocios.
              Instalación, configuración y mantenimiento de soluciones
              tecnológicas.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                <a
                  href="tel:+573001234567"
                  className="hover:underline"
                >
                  +57 300 123 4567
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FaWhatsapp />
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="font-semibold text-white mb-3">
              Área de servicio
            </h4>
            <p className="text-sm text-slate-400">
              Bogotá, Soacha, Chía, Mosquera y municipios cercanos.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Servicio técnico a domicilio.
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-center text-slate-500">
          © {new Date().getFullYear()} Tecno Domi SM ·
          <span className="ml-1">Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
}
