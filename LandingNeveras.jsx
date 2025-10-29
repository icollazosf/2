import React from "react";
import { Phone, Wrench, Clock, ShieldCheck, BadgeCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

import logo from "./logo-servi.png";
import heroImg from "./tecnico-servi.jpg";

// ✅ Datos del negocio (ajusta lo que necesites)
const BUSINESS = {
  name: "Servi-Reparaciones By Cesar Blanco",
  city: "Medellín y Alrededores",
  phoneDisplay: "(313) 5797188",
  phoneLink: "+573135797188",
  whatsappLink:
    "https://wa.me/573135797188?text=Hola amigo,%20necesito%20reparar%20mi%20nevera,%20lavadora%20o%20secadora.",
};

export default function LandingNeveras() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* LOGO */}
            <img
              src={logo}
              alt="Logo Servi-Reparaciones del Atlántico"
              className="h-9 w-auto rounded-lg select-none"
              loading="eager"
              decoding="sync"
            />
            <span className="font-semibold leading-tight">
              {BUSINESS.name}
            </span>
          </div>
          <a
            href={`tel:${BUSINESS.phoneLink}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-sm hover:opacity-90 transition"
          >
            <Phone size={16} /> Llamar {BUSINESS.phoneDisplay}
          </a>
        </div>
      </header>

<div>
<a
  href="https://wa.me/573001234567?text=¡Hola!%20Quiero%20más%20información."
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    width: "60px",
    height: "60px",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "white",
    borderRadius: "50%",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
    zIndex: 1000,
    transition: "transform 0.3s ease",
  }}
  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="WhatsApp"
    style={{
      width: "35px",
      height: "35px",
      marginTop: "12px",
    }}
  />
</a>
</div>
      
      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
              {BUSINESS.city} • Servicio a Domicilio
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Reparación de{" "}
              <span className="text-slate-900">Neveras,</span>{" "}
              <span className="text-slate-500">Lavadoras y más este 2025</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Técnicos certificados, diagnóstico rápido y garantía escrita. Evitá
              perder tus alimentos: llegamos hoy mismo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${BUSINESS.phoneLink}`}
                className="px-5 py-3 rounded-2xl bg-slate-900 text-white font-medium hover:opacity-90 inline-flex items-center gap-2"
              >
                <Phone size={18} /> Llamar ahora
              </a>
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 font-medium inline-flex items-center gap-2"
              >
                <Zap size={18} /> WhatsApp
              </a>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <Clock size={16} /> Atención hoy mismo
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck size={16} /> Garantía escrita
              </div>
              <div className="flex items-center gap-1">
                <BadgeCheck size={16} /> Técnicos certificados
              </div>
            </div>
          </motion.div>

          {/* Imagen + beneficios a la derecha */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              {/* Imagen del técnico */}
              <div className="relative overflow-hidden rounded-3xl border bg-white shadow-xl">
                <img
                  src={heroImg}
                  alt="Técnico de neveras, lavadoras y secadoras en Medellín"
                  className="w-full h-[320px] md:h-[380px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Tarjetas superpuestas */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { title: "🔧 Reparación en el día", desc: "Solución rápida sin demoras." },
                  { title: "🛡️ Garantía real", desc: "Respaldo por escrito." },
                  { title: "⏰ Atención urgente", desc: "Llegamos en menos de 60 min." },
                  { title: "🚗 A domicilio", desc: "Vamos a donde estés." },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="border rounded-2xl p-4 hover:shadow-sm transition bg-slate-50"
                  >
                    <div className="font-semibold">{f.title}</div>
                    <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-slate-500">*Según disponibilidad y zona.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Servicios Técnicos</h2>
          <p className="mt-2 text-slate-600">
            Reparamos todas las marcas y modelos de Neveras, Lavadoras y Secadoras. Piezas
            originales y garantía.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { title: "No enfría / No lava", desc: "Diagnóstico de compresor, motor y sistema eléctrico." },
              { title: "Hace ruido o vibra", desc: "Revisión de ventiladores, rodamientos y amortiguadores." },
              { title: "Bota agua / escarcha", desc: "Verificación de desagüe, válvulas y termostato." },
              { title: "Golpes de energía", desc: "Protección y reparación electrónica para evitar daños." },
              { title: "Mantenimiento preventivo", desc: "Limpieza profunda, ahorro energético y mayor vida útil." },
              { title: "Instalación y traslado", desc: "Manipulación segura, nivelación y conexión profesional." },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border bg-white p-5 hover:shadow-sm">
                <div className="flex items-center gap-2 font-semibold">
                  <Wrench size={18} />
                  {s.title}
                </div>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">¿Por qué elegirnos?</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { title: "📜 Garantía escrita", desc: "Soporte real y factura." },
              { title: "💨 Rápidos y puntuales", desc: "Agendamiento flexible hoy." },
              { title: "🧑‍🔧 Técnicos certificados", desc: "Experiencia en todas las marcas." },
            ].map((b, i) => (
              <div key={i} className="rounded-2xl border p-5 bg-slate-50">
                <div className="font-semibold">{b.title}</div>
                <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zonas */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Cobertura en {BUSINESS.city}</h2>
          <p className="mt-2 text-slate-600">Atendemos toda el área metropolitana y alrededores.</p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {[
              "Itagüi",
              "Belén",
              "Río Negro",
              "El Poblado",
              "Laureles-Estadio",
              "Envigado / Sabaneta",
              "San Antonio de Prado",
              "La Estrella y Más",
            ].map((z, i) => (
              <div key={i} className="border rounded-xl px-4 py-3 bg-white">
                {z}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Preguntas frecuentes</h2>
          <div className="mt-6 space-y-3">
            {[
              { q: "🛡️ ¿Tienen garantía?", a: "Sí, garantía escrita por servicio y repuestos." },
              { q: "⏰ ¿Cuánto tarda la reparación?", a: "La mayoría se resuelven el mismo día." },
              {
                q: "💸 ¿Cuánto cuesta el diagnóstico?",
                a: (
                  <>
                    <p>
                      El diagnóstico tiene un costo de <strong>$50.000</strong>, el cual cubre la
                      visita del técnico, revisión completa del equipo y presupuesto detallado.
                    </p>
                    <p className="mt-2">
                      👉 Si decides realizar la reparación con nosotros, <strong>no pagas el diagnóstico</strong>.{" "}
                      <strong>Este valor nos ayuda a cubrir el desplazamiento, herramientas y tiempo del especialista.</strong>
                    </p>
                    <p className="mt-2">
                      🔹 También contamos con un <strong>diagnóstico turbo (en 60 minutos) por $100.000</strong>,
                      ideal si necesitas una atención prioritaria y resultados inmediatos.
                    </p>
                  </>
                ),
              },
              { q: "⚙️ ¿Atienden todas las marcas?", a: "Sí, trabajamos con todas las marcas y modelos." },
            ].map((f, i) => (
              <details key={i} className="group rounded-2xl border bg-white p-4">
                <summary className="cursor-pointer font-medium list-none">{f.q}</summary>
                <div className="mt-2 text-sm text-slate-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl border bg-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo Servi-Reparaciones"
                className="h-8 w-auto rounded-md hidden md:block"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">¿Tu electrodoméstico dejó de funcionar?</h3>
                <p className="mt-1 text-slate-200">Llámanos y un técnico llegará hoy mismo.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href={`tel:${BUSINESS.phoneLink}`}
                className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-medium inline-flex items-center gap-2"
              >
                <Phone size={18} /> {BUSINESS.phoneDisplay}
              </a>
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl border border-white/30 font-medium inline-flex items-center gap-2"
              >
                <Zap size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
        </div>
      </footer>
    </div>
  );
}
