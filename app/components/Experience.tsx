"use client";

import { FaTools, FaUserCheck, FaClock } from "react-icons/fa";

export default function Experience() {
  return (
    <section className="bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3 text-center">
          
          {/* Card 1 */}
          <div className="p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <FaTools className="mx-auto text-4xl text-green-500" />
            <h3 className="mt-4 text-3xl font-bold">+10</h3>
            <p className="mt-2 font-semibold">Años de experiencia</p>
            <p className="mt-2 text-sm text-slate-500">
              Solucionando problemas técnicos en hogares y empresas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <FaUserCheck className="mx-auto text-4xl text-green-500" />
            <h3 className="mt-4 text-3xl font-bold">+500</h3>
            <p className="mt-2 font-semibold">Servicios realizados</p>
            <p className="mt-2 text-sm text-slate-500">
              Instalaciones, mantenimientos y soporte técnico exitoso.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <FaClock className="mx-auto text-4xl text-green-500" />
            <h3 className="mt-4 text-3xl font-bold">24/7</h3>
            <p className="mt-2 font-semibold">Disponibilidad</p>
            <p className="mt-2 text-sm text-slate-500">
              Atención flexible según la necesidad del cliente.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
