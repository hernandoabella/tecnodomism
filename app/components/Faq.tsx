"use client";

import { useState } from "react";
import { FaChevronDown, FaQuestionCircle, FaWhatsapp } from "react-icons/fa";

const faqs = [
  {
    question: "¿Realizan servicio técnico a domicilio?",
    answer:
      "Sí, nos especializamos en asistencia técnica directa en sitio. Cubrimos Santa Marta, Ciénaga, Barranquilla y Zona Bananera, llevando herramientas y repuestos necesarios para soluciones inmediatas.",
  },
  {
    question: "¿Qué tipo de sistemas configuran o reparan?",
    answer:
      "Nuestro alcance incluye servidores, routers balanceadores, redes WiFi de alta capacidad, computadores de alto rendimiento y sistemas de energía solar fotovoltaica.",
  },
  {
    question: "¿Instalan cámaras de seguridad y sistemas CCTV?",
    answer:
      "Somos expertos en seguridad electrónica. Instalamos sistemas IP y análogos con configuración de monitoreo remoto en tiempo real para que veas todo desde tu celular.",
  },
  {
    question: "¿Ofrecen garantía por los trabajos realizados?",
    answer:
      "Totalmente. Todos nuestros servicios de instalación y mantenimiento preventivo cuentan con garantía técnica y respaldo post-venta para asegurar que tu inversión esté protegida.",
  },
  {
    question: "¿Cómo puedo agendar una visita técnica?",
    answer:
      "La forma más rápida es a través de nuestro botón de WhatsApp. Coordinamos la fecha y hora que mejor te convenga para realizar el diagnóstico o la instalación.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Encabezado Pulido */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-[#FFC107] rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <FaQuestionCircle /> Centro de Ayuda
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            DUDAS <span className="text-cyan-600">FRECUENTES</span>
          </h2>
          <p className="mt-4 text-slate-500 font-medium italic">
            Todo lo que necesitas saber sobre el soporte de Tecno Domi SM.
          </p>
        </div>

        {/* Acordeón de FAQs */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`group border transition-all duration-300 rounded-2xl overflow-hidden ${
                  isOpen 
                    ? "border-cyan-500/50 shadow-lg shadow-cyan-500/5 bg-white" 
                    : "border-slate-200 bg-slate-50/50 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className={`font-black text-sm md:text-base uppercase tracking-tight transition-colors ${
                    isOpen ? "text-cyan-600" : "text-slate-700 group-hover:text-slate-900"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-cyan-500" : "text-slate-400"}`}>
                    <FaChevronDown size={14} />
                  </div>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-slate-500 text-sm md:text-base leading-relaxed font-medium border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Final de FAQ */}
        <div className="mt-12 p-6 bg-slate-900 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white font-bold text-sm text-center md:text-left leading-tight">
                ¿No encontraste lo que buscabas? <br />
                <span className="text-slate-400 font-normal">Chatea directamente con Luis Oribe ahora mismo.</span>
            </p>
            <a 
                href="https://wa.me/573135365766"
                className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-black rounded-xl hover:scale-105 transition-transform text-sm uppercase tracking-widest shadow-lg"
            >
                <FaWhatsapp size={18} /> WhatsApp
            </a>
        </div>
      </div>
    </section>
  );
}