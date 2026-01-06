"use client";

import Image from "next/image";

const certs = [
  { src: "/certs/img1.png", alt: "Dahua" },
  { src: "/certs/img2.png", alt: "Bosch" },
  { src: "/certs/img3.png", alt: "TP-Link" },
  { src: "/certs/img4.png", alt: "Ezviz" },
  { src: "/certs/img5.png", alt: "Hikvision" },
  { src: "/certs/img6.png", alt: "Arlo" },
  // Repetimos para el efecto infinito
  { src: "/certs/img1.png", alt: "Dahua" },
  { src: "/certs/img2.png", alt: "Bosch" },
  { src: "/certs/img3.png", alt: "TP-Link" },
];

export default function Certs() {
  return (
    <section className="bg-white py-20 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
            Partners & Hardware
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">
            SOLUCIONES CON <span className="text-cyan-600">RESPALDO GLOBAL</span>
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto font-medium">
            Trabajamos exclusivamente con las marcas líderes en seguridad, redes y energía solar.
          </p>
        </div>

        {/* Slider Infinito */}
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-loop-scroll group-hover:paused space-x-12 items-center">
            {certs.map((cert, index) => (
              <div
                key={index}
                className="relative flex-none w-32 h-16 md:w-40 md:h-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicado para el loop perfecto */}
          <div className="flex animate-loop-scroll group-hover:paused space-x-12 items-center ml-12" aria-hidden="true">
            {certs.map((cert, index) => (
              <div
                key={`dup-${index}`}
                className="relative flex-none w-32 h-16 md:w-40 md:h-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agregar estos estilos en tu global.css o usar un style tag */}
      <style jsx>{`
        @keyframes loop-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-loop-scroll {
          animation: loop-scroll 30s linear infinite;
        }
        .paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}