"use client";

import { useRef } from "react";
import { 
  FaVideo, FaNetworkWired, FaTools, FaMicrochip, 
  FaBolt, FaSolarPanel, FaHome 
} from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    title: "Seguridad Electrónica & CCTV",
    description: "Sistemas avanzados de videovigilancia IP y análoga. Monitoreo en tiempo real desde cualquier dispositivo móvil.",
    icon: <FaVideo />,
    color: "text-cyan-500",
  },
  {
    title: "Cercas Eléctricas Perimetrales",
    description: "Protección perimetral de alto voltaje con sistemas de alerta temprana para máxima seguridad.",
    icon: <FaBolt />,
    color: "text-yellow-400",
  },
  {
    title: "Energía Solar Fotovoltaica",
    description: "Instalación de paneles solares para reducir costos energéticos y promover el uso de energías limpias.",
    icon: <FaSolarPanel />,
    color: "text-orange-500",
  },
  {
    title: "Domótica & Hogar Inteligente",
    description: "Automatización de iluminación, cerraduras y control de dispositivos para un hogar eficiente.",
    icon: <FaHome />,
    color: "text-purple-500",
  },
  {
    title: "Redes & Cableado Estructurado",
    description: "Infraestructura robusta para voz y datos. Certificación de puntos de red y optimización de WiFi.",
    icon: <FaNetworkWired />,
    color: "text-blue-500",
  },
  {
    title: "Mantenimiento PC (Prev/Corr)",
    description: "Soporte técnico especializado, limpieza física, optimización de software y reparación de hardware.",
    icon: <FaTools />,
    color: "text-green-500",
  },
  {
    title: "Configuración TI",
    description: "Puesta a punto de servidores, routers balanceadores y periféricos para un ecosistema sin fallos.",
    icon: <FaMicrochip />,
    color: "text-red-500",
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    // 1. Animación del Título (Simple y directa)
    gsap.from(".services-header", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".services-header",
        start: "top 90%",
      }
    });

    // 2. Animación INDIVIDUAL por tarjeta para que ninguna se quede oculta
    const cards = gsap.utils.toArray<HTMLElement>(".service-card");
    
    cards.forEach((card) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,      // Cada tarjeta es su propio disparador
          start: "top 95%",   // Se activa apenas asoma la cabeza en el scroll
          toggleActions: "play none none none",
          // markers: true,    // Descomenta esto para ver cuándo se activan si sigue fallando
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="services"
      className="relative bg-slate-900 py-24 overflow-hidden"
    >
      {/* Fondo decorativo tech */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="services-header mb-16 text-center">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-[0.2em]">
            Servicios Garantizados
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Alta <span className="text-[#FFC107]">Ingeniería</span>
          </h2>
        </div>

        {/* Grid de servicios */}
        <div className="services-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md transition-all duration-500 hover:bg-slate-800 hover:border-cyan-500/50 hover:-translate-y-2"
            >
              <div className={`text-5xl ${service.color} mb-6 transition-transform group-hover:scale-110`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="pt-6 border-t border-slate-700/50 flex justify-between items-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase italic tracking-widest">Active_Service</span>
                <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_cyan] animate-pulse"></div>
              </div>
            </div>
          ))}

          {/* Tarjeta CTA Fija (Sin animación compleja para asegurar visibilidad) */}
          <div className="service-card p-8 rounded-3xl bg-[#FFC107] flex flex-col justify-center items-center text-center shadow-2xl">
            <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight uppercase">PROYECTOS</h3>
            <p className="text-slate-800 text-xs font-bold mb-6">Cotización inmediata con Luis Oribe.</p>
            <a 
              href="https://wa.me/573135365766"
              className="w-full py-4 bg-slate-900 text-white font-black rounded-xl text-center hover:bg-black transition-all"
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}