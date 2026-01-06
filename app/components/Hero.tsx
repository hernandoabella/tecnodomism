"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaShieldAlt, 
  FaNetworkWired, 
  FaTools, 
  FaMicrochip 
} from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  
  // Lista de imágenes (Asegúrate de tenerlas en /public)
  const images = ["/img1.jpeg", "/img2.jpeg", "/img3.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const whatsappUrl = "https://wa.me/573135365766?text=Hola%20Luis,%20vengo%20de%20tu%20página%20web.%20Me%20gustaría%20solicitar%20una%20cotización%20para%20un%20servicio.";

  // Lógica de rotación de imágenes cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  // Animaciones de entrada inicial (Solo una vez)
  useGSAP(() => {
    if (!container.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".nav-item", { 
      y: -100, 
      opacity: 0, 
      duration: 1, 
      stagger: 0.1 
    })
    .from(".hero-text", { 
      x: -50, 
      opacity: 0, 
      duration: 0.8, 
      stagger: 0.2 
    }, "-=0.5")
    .from(".hero-badge", { 
      scale: 0, 
      opacity: 0, 
      duration: 0.5 
    }, "-=0.8")
    .from(".hero-image-wrapper", { 
      x: 100, 
      opacity: 0, 
      duration: 1.2,
      rotate: 5
    }, "-=1")
    .from(".cta-btn", { 
      scale: 0, 
      opacity: 0, 
      duration: 0.6, 
      ease: "back.out(1.7)" 
    }, "-=0.6")
    .from(".service-tag", { 
      y: 20, 
      opacity: 0, 
      duration: 0.5, 
      stagger: 0.1 
    }, "-=0.3");

    // Animación de flotación constante para la imagen
    gsap.to(".hero-image-wrapper", {
      y: 15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: container });

  // Animación de Crossfade cuando cambia la imagen
  useGSAP(() => {
    gsap.fromTo(".current-img", 
      { opacity: 0, filter: "blur(10px)", scale: 1.1 }, 
      { opacity: 1, filter: "blur(0px)", scale: 1, duration: 1, ease: "power2.out" }
    );
  }, [currentIndex]);

  return (
    <div ref={container} className="relative bg-[#FFC107] min-h-screen font-sans selection:bg-cyan-500 overflow-x-hidden">
      
      {/* Luces decorativas de fondo (Glow) */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-25"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-white rounded-full mix-blend-overlay filter blur-[100px] opacity-30"></div>

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="nav-item transition-transform hover:scale-105 active:scale-95">
            <Image 
              src="/logo.png" 
              alt="Tecno Domi SM Logo" 
              width={160} 
              height={60} 
              className="object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-6">
            <a 
              href="tel:+573135365766" 
              className="nav-item hidden lg:flex items-center gap-2 text-sm font-black text-slate-800 hover:text-cyan-600 transition-colors"
            >
              <div className="p-2 bg-slate-900 rounded-lg text-white font-normal">
                <FaPhoneAlt size={12} />
              </div>
              313 536 5766
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-item flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] text-white font-bold shadow-[0_10px_20px_-5px_rgba(37,211,102,0.4)] hover:brightness-110 active:scale-95 transition-all"
            >
              <FaWhatsapp size={20} />
              <span className="hidden sm:inline">Contáctanos</span>
            </a>
          </div>
        </div>
      </header>

      {/* --- HERO CONTENT --- */}
      <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Columna Texto */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-cyan-400/40 shadow-xl">
              <FaMicrochip className="animate-pulse" />
              Luis Oribe • Soluciones Tech
            </div>
            
            <h1 className="hero-text text-5xl md:text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              TECNOLOGÍA <br />
              <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">A TU NIVEL</span>
            </h1>
            
            <p className="hero-text mt-8 text-xl text-slate-800 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              Instalación de cámaras, redes y soporte especializado con la <span className="font-bold underline decoration-cyan-500 decoration-4 underline-offset-4">rapidez</span> que Tecno Domi SM garantiza.
            </p>

            <div className="cta-btn mt-10">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 px-8 py-5 bg-slate-900 text-white font-black rounded-2xl overflow-hidden transition-all shadow-2xl hover:shadow-cyan-500/30 active:scale-95"
              >
                <span className="relative z-10 font-black">SOLICITAR COTIZACIÓN AHORA</span>
                <FaWhatsapp size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-cyan-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>

            {/* Tags de Servicios */}
            <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { icon: <FaShieldAlt />, label: "CCTV" },
                { icon: <FaNetworkWired />, label: "REDES" },
                { icon: <FaTools />, label: "SOPORTE" }
              ].map((item, idx) => (
                <div key={idx} className="service-tag flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/30 backdrop-blur-md border border-white/50 shadow-lg transition-transform hover:-translate-y-1">
                  <span className="text-cyan-700 text-xl">{item.icon}</span>
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Imagen con Slider Automático */}
          <div className="hero-image-wrapper relative order-1 lg:order-2">
            {/* Resplandor decorativo */}
            <div className="absolute -inset-4 bg-white/40 rounded-[3.5rem] blur-3xl opacity-50"></div>
            
            <div className="relative rounded-[3rem] overflow-hidden border-[12px] md:border-[20px] border-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] bg-slate-800">
              {/* Contenedor de imagen con transición GSAP */}
              <div className="relative h-[400px] md:h-[550px] w-full">
                <img 
                  key={currentIndex}
                  src={images[currentIndex]} 
                  alt={`Luis Oribe Servicio ${currentIndex + 1}`}
                  className="current-img w-full h-full object-cover"
                />
              </div>
              
              {/* Indicador de Status Estilo Consola */}
              <div className="absolute top-6 right-6 bg-slate-900/90 text-cyan-400 px-4 py-2 rounded-xl text-[10px] font-mono font-bold border border-cyan-400/30 backdrop-blur-sm z-20">
                SYSTEM_VIEW: 0{currentIndex + 1}
              </div>

              {/* Pie de foto dinámico */}
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]"></div>
                  <span className="text-white font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
                    Luis Oribe Service Active
                  </span>
                </div>
              </div>
            </div>

            {/* Indicadores de Slider laterales (barritas) */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
              {images.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 transition-all duration-500 rounded-full ${i === currentIndex ? 'h-8 bg-slate-900' : 'h-4 bg-slate-900/20'}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}