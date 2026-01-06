"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaTools, FaTimes, FaExpandAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  { src: "/gallery/work1.jpeg", alt: "CCTV Instalación Pro", size: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/work2.jpeg", alt: "Redes Estructuradas", size: "col-span-1" },
  { src: "/gallery/work3.jpeg", alt: "Servidores Rack", size: "col-span-1" },
  { src: "/gallery/work4.jpeg", alt: "Paneles Solares", size: "col-span-1 md:row-span-2" },
  { src: "/gallery/work5.jpeg", alt: "Mantenimiento PC", size: "md:col-span-2" },
  { src: "/gallery/work6.jpeg", alt: "Cámaras IP", size: "col-span-1" },
  { src: "/gallery/work7.jpeg", alt: "Seguridad Perimetral", size: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/work8.jpeg", alt: "WiFi Corporativo", size: "col-span-1" },
  { src: "/gallery/work9.jpeg", alt: "Configuración Router", size: "col-span-1" },
  { src: "/gallery/work10.jpeg", alt: "Energía Renovable", size: "col-span-1" },
  { src: "/gallery/work11.jpeg", alt: "Soporte Técnico", size: "md:col-span-2" },
  { src: "/gallery/work12.jpeg", alt: "Control de Acceso", size: "col-span-1" },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (currentIndex !== null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [currentIndex]);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="proyectos" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header con estilo minimalista */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-cyan-400 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4">
            <FaTools size={10} /> Portafolio Técnico
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            TRABAJOS <span className="text-cyan-600">RECIENTES</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mt-6"></div>
        </div>

        {/* Grid Maestro */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-slate-100 cursor-pointer border border-transparent hover:border-cyan-500/50 transition-all duration-500 ${img.size}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* Overlay refinado */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                        <FaExpandAlt className="text-cyan-400" size={12} />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Ver Detalle</span>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight uppercase">{img.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL / LIGHTBOX PRO */}
        {currentIndex !== null && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-300"
            onClick={() => setCurrentIndex(null)}
          >
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"></div>
            
            {/* Controles del Modal */}
            <button className="absolute top-8 right-8 z-[110] text-white/50 hover:text-white transition-colors" onClick={() => setCurrentIndex(null)}>
              <FaTimes size={30} />
            </button>

            <button onClick={prevImg} className="absolute left-4 md:left-8 z-[110] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all">
              <FaChevronLeft size={24} />
            </button>

            <button onClick={nextImg} className="absolute right-4 md:right-8 z-[110] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all">
              <FaChevronRight size={24} />
            </button>

            {/* Imagen Principal */}
            <div 
              className="relative w-full max-w-6xl h-full flex items-center justify-center z-[105]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] md:h-[80vh]">
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Info del Modal */}
              <div className="absolute bottom-0 md:bottom-10 left-0 right-0 text-center p-6">
                <span className="bg-cyan-500 text-slate-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
                  Imagen {currentIndex + 1} de {images.length}
                </span>
                <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter">
                  {images[currentIndex].alt}
                </h3>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}