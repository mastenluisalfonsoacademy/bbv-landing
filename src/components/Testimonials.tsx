"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  { name: "Sandra M.", tag: "Abnehmcoaching · 3 Monate", text: "In 3 Monaten habe ich 12 kg abgenommen — ohne Hunger, ohne Stress. Der Coach hat mir nicht nur einen Plan gegeben, sondern meine gesamte Einstellung zu Ernährung verändert.", result: "−12 kg" },
  { name: "Markus T.", tag: "Online Coaching · 6 Monate", text: "Das Online Coaching ist perfekt für meinen vollen Alltag. Flexible Zeiten, immer erreichbar, und die Ergebnisse sprechen für sich. In 6 Monaten mehr erreicht als in Jahren alleine.", result: "+8 kg Muskeln" },
  { name: "Laura K.", tag: "Personal Training · 4 Monate", text: "Die Vibrationsplatte hat mein Training revolutioniert. Ich sehe Ergebnisse in Bereichen, wo ich vorher kaum Fortschritte gemacht habe. Absolute Empfehlung!", result: "−8 kg" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "#C9A84C" }}>Kundenstimmen</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] leading-none">
            WAS UNSERE <span style={{ color: "#C9A84C" }}>KUNDEN SAGEN</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-7 rounded-2xl flex flex-col"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Result badge */}
              <div className="absolute top-5 right-5 px-2.5 py-1 rounded-md text-xs font-bold tracking-wider"
                style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.2)" }}>
                {t.result}
              </div>

              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/30 text-xs mt-0.5">{t.tag}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
