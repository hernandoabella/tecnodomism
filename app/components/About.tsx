"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaCheckCircle, FaUserTie, FaAward, FaTools } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Animación de la imagen
    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: ".about-image",
        start: "top 80%",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animación del contenido de texto
    gsap.from(".about-content > *", {
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-white py-24 overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFC107]/5 -skew-x-12 transform origin-top"></div>

      <div className="max-w-7xl mx-auto px-6 grid gap-16 md:grid-cols-2 items-center">
        
        {/* Lado de la Imagen con Frame Tecnológico */}
        <div className="about-image relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-cyan-500 z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-slate-900 z-10"></div>
          
          <div className="relative w-full h-[500px] rounded-br-[80px] rounded-tl-[80px] overflow-hidden shadow-2xl">
            <Image
              src="/about.jpeg" 
              alt="Luis Oribe - Tecno Domi SM"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              priority
            />
            {/* Overlay de Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>

          {/* Badge de Experiencia flotante */}
          <div className="absolute -bottom-8 left-10 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border-b-4 border-cyan-500">
            <div className="bg-[#FFC107] p-3 rounded-xl text-slate-900">
              <FaAward size={30} />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 leading-none">100%</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Garantizado</p>
            </div>
          </div>
        </div>

        {/* Lado del Texto */}
        <div className="about-content relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-100 text-cyan-700 text-xs font-black uppercase tracking-widest mb-6">
            <FaUserTie />
            Liderazgo Técnico
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
            Sobre <span className="text-cyan-600">Tecno Domi SM</span> <br />
          </h2>

          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Más que un servicio técnico, somos tu aliado estratégico en conectividad y seguridad. 
            Bajo el liderazgo de <span className="text-slate-900 font-bold border-b-2 border-[#FFC107]">Luis Oribe</span>, 
            nos hemos especializado en llevar soluciones de nivel empresarial a hogares y negocios locales.
          </p>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Nuestra filosofía es simple: <span className="italic">"Tecnología que funciona sin complicaciones"</span>. 
            Desde el diseño de un circuito cerrado hasta la optimización de tu red WiFi, cada cable y cada configuración se entrega con precisión quirúrgica.
          </p>

          {/* Beneficios con Iconos Tech */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { text: "Atención personalizada", icon: <FaCheckCircle className="text-cyan-500" /> },
              { text: "Servicio a domicilio", icon: <FaCheckCircle className="text-cyan-500" /> },
              { text: "Hardware de última generación", icon: <FaCheckCircle className="text-cyan-500" /> },
              { text: "Soporte post-instalación", icon: <FaCheckCircle className="text-cyan-500" /> },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="transition-transform group-hover:scale-125">
                  {item.icon}
                </div>
                <span className="font-bold text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-200">
            <FaTools />
            Conoce mi metodología
          </button>
        </div>
      </div>
    </section>
  );
}