"use client";

import { useRef } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Dueño de Negocio",
    comment: "Excelente servicio. Luis fue muy profesional, instaló las cámaras y dejó todo el sistema configurado en mi celular. Rapidez total.",
    initials: "CM"
  },
  {
    name: "María Giraldo",
    role: "Hogar Inteligente",
    comment: "Muy recomendado. Solucionó los problemas de red WiFi que nadie podía arreglar y configuró la domótica de la casa rápidamente.",
    initials: "MG"
  },
  {
    name: "Jorge Ramírez",
    role: "Soporte Corporativo",
    comment: "Servicio confiable y puntual. El mantenimiento preventivo dejó los servidores y computadores de la oficina como nuevos. Un crack.",
    initials: "JR"
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;

    // Animamos las tarjetas de forma individual para que no se oculten
    const cards = gsap.utils.toArray<HTMLElement>(".testimonial-card");
    
    cards.forEach((card) => {
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          y: 20, 
          scale: 0.95 
        }, 
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%", // Se activa casi apenas entra a la vista
            toggleActions: "play none none none",
            // Esto asegura que si el usuario ya hizo scroll, la tarjeta aparezca sí o sí
            onRefresh: (self) => self.progress > 0 && gsap.set(card, { opacity: 1, y: 0, scale: 1 })
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-slate-50 py-20 relative overflow-hidden">
      {/* Comillas decorativas - Opacidad reducida para no distraer */}
      <FaQuoteLeft className="absolute top-5 left-5 text-slate-200 text-8xl opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
            CLIENTES <span className="text-cyan-600 underline decoration-[#FFC107] decoration-4">SATISFECHOS</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">
            Testimonios reales de quienes confían en Tecno Domi SM.
          </p>
        </div>

        <div className="testimonial-grid grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="testimonial-card relative p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm transition-all duration-300 group"
            >
              <div className="flex gap-1 text-[#FFC107] mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>

              <p className="text-slate-700 text-base leading-relaxed mb-8 italic">
                “{t.comment}”
              </p>

              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-[#FFC107] font-black text-sm border-2 border-[#FFC107]">
                  {t.initials}
                </div>
                <div>
                  <p className="font-black text-slate-900 leading-none mb-1 uppercase text-sm">
                    {t.name}
                  </p>
                  <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Simple */}
        <div className="mt-16 flex flex-col items-center justify-center border-t border-slate-200 pt-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-black text-slate-900">4.9</span>
            <div className="flex text-yellow-400">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Rating en Google Business</p>
        </div>
      </div>
    </section>
  );
}