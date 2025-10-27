import React from "react";
import { Phone, Wrench, Clock, ShieldCheck, MapPin, BadgeCheck, Car, Zap, Snowflake } from "lucide-react";
import { motion } from "framer-motion";

// ✅ Reemplaza estos datos con los de tu negocio
const BUSINESS = {
  name: "Servicio Técnico de Neveras, Lavadoras y Secadoras",
  city: "Medellín y Alrededores",
  phoneDisplay: "+57 313 579 7188",
  phoneLink: "+573135797188",
  whatsappLink: "https://wa.me/573135797188?text=Hola amigo,%20necesito%20reparar%20mi%20nevera, lavadora o secadora.",
  email: "cesarblancoo2025@gmail.com",
};

export default function LandingNeveras() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-content-center"><Snowflake size={18} /></div>
            <span className="font-semibold">{BUSINESS.name}</span>
          </div>
          <a href={`tel:${BUSINESS.phoneLink}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-sm hover:opacity-90 transition">
            <Phone size={16} /> Llamar {BUSINESS.phoneDisplay}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-slate-600 bg-slate-100 px-3 py-1 rounded-full">{BUSINESS.city} • Servicio a Domicilio</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Reparación de <span className="text-slate-900">Neveras</span> <span className="text-slate-500">en el Día</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg">Técnicos certificados, diagnóstico rápido y garantía escrita. Evitá perder tus alimentos: llegamos hoy mismo.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${BUSINESS.phoneLink}`} className="px-5 py-3 rounded-2xl bg-slate-900 text-white font-medium hover:opacity-90 inline-flex items-center gap-2">
                <Phone size={18}/> Llamar ahora
              </a>
              <a href={BUSINESS.whatsappLink} target="_blank" className="px-5 py-3 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 font-medium inline-flex items-center gap-2">
                <Zap size={18}/> WhatsApp
              </a>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1"><Clock size={16}/> Atención hoy mismo</div>
              <div className="flex items-center gap-1"><ShieldCheck size={16}/> Garantía escrita</div>
              <div className="flex items-center gap-1"><BadgeCheck size={16}/> Técnicos certificados</div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}} className="">
            <div className="relative">
              <div className="absolute -inset-1 blur-2xl bg-slate-200/60 rounded-3xl"/>
              <div className="relative rounded-3xl border bg-white p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {icon: <Wrench className="h-5 w-5"/>, title: "Reparación en el día", desc:"Solución rápida sin demoras."},
                    {icon: <ShieldCheck className="h-5 w-5"/>, title: "Garantía real", desc:"Respaldo por escrito."},
                    {icon: <Clock className="h-5 w-5"/>, title: "Atención urgente", desc:"Llegamos en menos de 60 min*"},
                    {icon: <Car className="h-5 w-5"/>, title: "A domicilio", desc:"Vamos a donde estés."},
                  ].map((f, i)=> (
                    <div key={i} className="border rounded-2xl p-4 hover:shadow-sm transition bg-slate-50">
                      <div className="flex items-center gap-2 font-semibold">{f.icon}{f.title}</div>
                      <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-slate-500">*Según disponibilidad y zona.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Servicios de Refrigeración</h2>
          <p className="mt-2 text-slate-600">Reparamos todas las marcas y modelos. Piezas originales y garantía.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[ 
              {title:"No enfría / enfría poco", desc:"Diagnóstico de compresor, gas y fugas."},
              {title:"Hace ruido o vibra", desc:"Revisión de ventiladores y motor."},
              {title:"Bota agua / escarcha", desc:"Desagüe, resistencia y termostato."},
              {title:"Golpes de energía", desc:"Protección y reparación electrónica."},
              {title:"Mantenimiento preventivo", desc:"Ahorro energético y mayor vida útil."},
              {title:"Instalación y traslado", desc:"Manipulación segura y nivelación."},
            ].map((s, i)=> (
              <div key={i} className="rounded-2xl border bg-white p-5 hover:shadow-sm">
                <div className="flex items-center gap-2 font-semibold"><Wrench size={18}/>{s.title}</div>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios / Por qué elegirnos */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">¿Por qué elegirnos?</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[ 
              {icon:<ShieldCheck className="h-5 w-5"/>, title:"Garantía escrita", desc:"Soporte real y factura."},
              {icon:<Clock className="h-5 w-5"/>, title:"Rápidos y puntuales", desc:"Agendamiento flexible hoy."},
              {icon:<BadgeCheck className="h-5 w-5"/>, title:"Técnicos certificados", desc:"Experiencia en todas las marcas."},
            ].map((b, i)=> (
              <div key={i} className="rounded-2xl border p-5 bg-slate-50">
                <div className="flex items-center gap-2 font-semibold">{b.icon}{b.title}</div>
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
            {["Centro", "Norte", "Sur", "Occidente", "Oriente", "Periferia", "Municipios", "Rural"].map((z,i)=>(
              <div key={i} className="border rounded-xl px-4 py-3 bg-white">{z}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Clientes satisfechos</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              {name:"María G.", text:"Llegaron en 40 minutos y mi nevera volvió a enfriar. Excelente servicio."},
              {name:"Carlos P.", text:"Precio justo y garantía real. Muy profesionales."},
              {name:"Lucía R.", text:"Me explicaron todo y dejaron mi cocina impecable. Recomendados."},
            ].map((t,i)=>(
              <div key={i} className="rounded-2xl border p-5 bg-white">
                <p className="text-slate-700">“{t.text}”</p>
                <div className="mt-3 text-sm font-semibold">{t.name}</div>
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
              {q:"¿Tienen garantía?", a:"Sí, garantía escrita por servicio y repuestos."},
              {q:"¿Cuánto tarda la reparación?", a:"La mayoría se resuelven el mismo día."},
              {q:"¿Cuánto cuesta el diagnóstico?", a:"Diagnóstico y presupuesto al llegar, sin compromiso."},
              {q:"¿Atienden todas las marcas?", a:"Sí, trabajamos con todas las marcas y modelos."},
            ].map((f,i)=>(
              <details key={i} className="group rounded-2xl border bg-white p-4">
                <summary className="cursor-pointer font-medium list-none">{f.q}</summary>
                <p className="mt-2 text-sm text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl border bg-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">¿Tu nevera dejó de enfriar?</h3>
              <p className="mt-1 text-slate-200">Llámanos y un técnico llegará hoy mismo.</p>
            </div>
            <div className="flex gap-3">
              <a href={`tel:${BUSINESS.phoneLink}`} className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-medium inline-flex items-center gap-2">
                <Phone size={18}/> {BUSINESS.phoneDisplay}
              </a>
              <a href={BUSINESS.whatsappLink} target="_blank" className="px-5 py-3 rounded-2xl border border-white/30 font-medium inline-flex items-center gap-2">
                <Zap size={18}/> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-slate-900 text-white grid place-content-center"><Snowflake size={16}/></div>
            <span>{BUSINESS.name} • {BUSINESS.city}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${BUSINESS.phoneLink}`} className="hover:underline">{BUSINESS.phoneDisplay}</a>
            <a href={BUSINESS.whatsappLink} className="hover:underline" target="_blank">WhatsApp</a>
            <a href={`mailto:${BUSINESS.email}`} className="hover:underline">{BUSINESS.email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
