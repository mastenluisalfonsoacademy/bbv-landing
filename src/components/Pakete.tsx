"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pakete = [
  {
    id: "starter", name: "STARTER", subtitle: "Das Fundament", price: "€99", period: "pro Monat",
    features: ["Individueller Ernährungsplan", "1x monatlicher Check-in", "WhatsApp Support", "Fortschritts-Tracking App"],
    highlight: false, badge: null,
  },
  {
    id: "transform", name: "TRANSFORM", subtitle: "Die Transformation", price: "€199", period: "pro Monat",
    features: ["Trainings- & Ernährungsplan", "2x Personal Training/Woche", "Wöchentliche Check-ins", "BBV App-Zugang", "Körper-Analyse Monatlich"],
    highlight: true, badge: "Beliebt",
  },
  {
    id: "elite", name: "ELITE", subtitle: "Das Premium-Paket", price: "€299", period: "pro Monat",
    features: ["Alles aus Transform", "Unbegrenzte PT-Sessions", "BIA-Körperanalyse", "Priority Support 24/7", "Monatliche Review-Session"],
    highlight: false, badge: null,
  },
];

export default function Pakete() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="pakete" className="py-28 relative overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(0,255,65,0.05) 0%, transparent 70%)" }} />
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: "#00FF41" }}>Finde dein Paket</p>
          <h2 className="font-heading leading-none" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
            COACHING <span style={{ color: "#00FF41" }}>PAKETE</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {pakete.map((paket, i) => (
            <motion.div key={paket.id}
              initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: paket.highlight ? "linear-gradient(160deg, #0d1f12 0%, #0a0a0a 100%)" : "rgba(255,255,255,0.02)",
                border: paket.highlight ? "1px solid rgba(0,255,65,0.4)" : "1px solid rgba(255,255,255,0.07)",
                boxShadow: paket.highlight ? "0 0 40px rgba(0,255,65,0.15), 0 0 80px rgba(0,255,65,0.05)" : "none",
              }}>
              {paket.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <span className="px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                    style={{ background: "linear-gradient(135deg, #00FF41, #39FF14)", color: "#0A0A0A" }}>
                    {paket.badge}
                  </span>
                </div>
              )}
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="font-heading text-2xl tracking-widest mb-1" style={{ color: paket.highlight ? "#00FF41" : "#ffffff" }}>{paket.name}</h3>
                  <p className="text-white/40 text-sm">{paket.subtitle}</p>
                </div>
                <div className="mb-8">
                  <span className="font-heading text-5xl" style={{ color: paket.highlight ? "#00FF41" : "#ffffff" }}>{paket.price}</span>
                  <span className="text-white/40 text-sm ml-2">{paket.period}</span>
                </div>
                <div className="h-px mb-7" style={{ background: paket.highlight ? "rgba(0,255,65,0.2)" : "rgba(255,255,255,0.06)" }} />
                <ul className="space-y-3 mb-8 flex-1">
                  {paket.features.map(feat => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-white/65">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs mt-0.5"
                        style={{ background: "rgba(0,255,65,0.12)", color: "#00FF41" }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a href="#kontakt" className="block text-center py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.03]"
                  style={paket.highlight
                    ? { background: "linear-gradient(135deg, #00FF41, #39FF14)", color: "#0A0A0A" }
                    : { background: "rgba(0,255,65,0.08)", color: "#00FF41", border: "1px solid rgba(0,255,65,0.25)" }}>
                  Jetzt starten
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
