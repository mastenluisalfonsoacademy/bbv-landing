"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="kontakt" className="py-28 relative overflow-hidden">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative p-14 rounded-3xl overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, #141006 0%, #0f0a00 50%, #0A0A0A 100%)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}>
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.18) 0%, transparent 65%)" }} />
          <motion.div animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #C9A84C, #F0D080, #C9A84C, transparent)" }} />

          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-xs font-bold tracking-[0.35em] uppercase mb-4 relative" style={{ color: "#C9A84C" }}>
            Starte jetzt
          </motion.p>

          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="font-heading leading-none mb-5 relative"
            style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)" }}>
            BEREIT FÜR DEINE<br />
            <span style={{ color: "#C9A84C" }}>TRANSFORMATION?</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="text-white/45 text-lg max-w-lg mx-auto mb-10 relative">
            Buche dein kostenloses Erstgespräch — ohne Verpflichtung, mit echten Ergebnissen.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-4 justify-center relative">
            <a href="https://app.balancebodyvital.com/register"
              className="px-10 py-4 font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{ background: "linear-gradient(135deg, #C9A84C, #F0D080)", color: "#0A0A0A" }}>
              Kostenloses Erstgespräch
            </a>
            <a href="tel:+49123456789"
              className="px-10 py-4 font-bold text-sm tracking-wider uppercase rounded-xl border transition-all duration-300 hover:bg-white/5"
              style={{ borderColor: "rgba(201,168,76,0.25)", color: "rgba(255,255,255,0.7)" }}>
              📞 Jetzt anrufen
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
