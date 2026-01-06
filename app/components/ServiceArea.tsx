"use client";

import { FaMapMarkerAlt, FaTruck, FaClock, FaCheckCircle } from "react-icons/fa";

const locations = [
  { city: "Santa Marta", detail: "Sede Principal y alrededores" },
  { city: "Ciénaga", detail: "Cobertura urbana y rural" },
  { city: "Barranquilla", detail: "Atención corporativa y hogar" },
  { city: "Zona Bananera", detail: "Servicio técnico especializado" },
];

export default function ServiceArea() {
  return (
    <section id="cobertura" className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado Simple */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <FaTruck size={12} /> Cobertura en el Caribe
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            ÁREA DE <span className="text-cyan-600">SERVICIO</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto font-medium">
            Llevamos soluciones tecnológicas y seguridad electrónica directamente a tu ubicación con rapidez y garantía.
          </p>
        </div>

        {/* Grid de Ciudades */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {locations.map((loc, index) => (
            <div 
              key={index}
              className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-xl hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-slate-900 text-[#FFC107] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <FaMapMarkerAlt size={20} />
              </div>
              <h3 className="font-black text-slate-900 uppercase text-sm tracking-tight mb-1">{loc.city}</h3>
              <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">{loc.detail}</p>
            </div>
          ))}
        </div>

        {/* Banner Informativo Directo */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          {/* Adorno visual sin animación */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -mr-16 -mt-16"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <div className="flex items-center gap-2 text-[#FFC107] mb-4 font-black text-xs uppercase tracking-widest">
                <FaClock /> Respuesta Inmediata
              </div>
              <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                ¿VIVES EN EL <span className="text-cyan-400">MAGDALENA?</span>
              </h3>
              <p className="text-slate-400 font-medium">
                Realizamos visitas técnicas programadas y urgencias en todo el departamento. 
                Instalación de cámaras, cercas y mantenimiento de PC el mismo día.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4">
                {["Garantía Real", "Técnicos Certificados"].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-white text-xs font-bold">
                    <FaCheckCircle className="text-cyan-500" /> {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto">
              <a 
                href="https://wa.me/573135365766" 
                target="_blank"
                className="px-10 py-5 bg-[#FFC107] text-slate-900 font-black rounded-2xl text-center shadow-[0_10px_20px_rgba(255,193,7,0.3)] hover:scale-105 active:scale-95 transition-all"
              >
                SOLICITAR TÉCNICO
              </a>
              <p className="text-slate-500 text-[10px] text-center font-bold uppercase tracking-widest">
                Atención Lunes a Sábado
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}