"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaShieldAlt, FaNetworkWired, FaTools } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative bg-[#FFC107]"> {/* Fondo amarillo del logo */}
      {/* --- HEADER INTEGRADO --- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Tecno Domi SM Logo" 
              width={150} 
              height={50} 
              className="object-contain"
            />
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="tel:+573135365766"
              className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-cyan-600 transition"
            >
              <FaPhoneAlt className="text-cyan-500" />
              +57 300 123 4567
            </a>
            <a
              href="https://wa.me/573135365766"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-lg transition-transform hover:scale-105"
            >
              <FaWhatsapp className="text-xl" />
              <span className="hidden sm:inline">Contáctanos</span>
            </a>
          </div>
        </div>
      </header>

      {/* --- HERO CONTENT --- */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto Principal */}
          <div className="z-10 text-center lg:text-left">
            <span className="inline-block px-4 py-1 rounded-full bg-cyan-500 text-white text-sm font-bold uppercase tracking-wider mb-4 shadow-sm">
              Servicio Técnico Profesional
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Tecnología y Rapidez con <br />
              <span className="text-cyan-600">Luis Oribe</span>
            </h1>
            <p className="mt-6 text-lg text-slate-800 font-medium max-w-xl mx-auto lg:mx-0">
              Expertos en seguridad electrónica, redes de datos y soporte informático. 
              Soluciones integrales para que tu hogar o empresa nunca se detengan.
            </p>

            {/* Tags de Servicios Rápidos */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20">
                <FaShieldAlt className="text-cyan-600" />
                <span className="text-sm font-bold">CCTV</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20">
                <FaNetworkWired className="text-cyan-600" />
                <span className="text-sm font-bold">Redes y Voz</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20">
                <FaTools className="text-cyan-600" />
                <span className="text-sm font-bold">Mantenimiento</span>
              </div>
            </div>

            <div className="mt-10">
              <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-2xl hover:-translate-y-1">
                Solicitar Cotización Gratis
              </button>
            </div>
          </div>

          {/* Imagen / Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-400/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl transform lg:rotate-2">
              <img 
                src="/luis.jpeg" 
                alt="Instalación de cámaras de seguridad"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 p-6 text-white">
                <p className="text-sm italic font-light">"Garantizando la seguridad de lo que más quieres"</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}