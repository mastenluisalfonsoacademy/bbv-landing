"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-end overflow-hidden pb-16">
      {/* Animated gradient background */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        {/* Hero background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.72) 100%)",
          zIndex: 1,
        }} />
        {/* Gold tint */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 70% 60% at 70% 30%, rgba(201,168,76,0.12) 0%, transparent 60%)",
          zIndex: 2,
        }} />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32">
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase"
          style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", background: "rgba(201,168,76,0.08)" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#C9A84C" }} />
          Personal Training & Coaching
        </motion.div>

        {/* Giant headline */}
        <motion.h1 initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading leading-[0.92] text-white"
            style={{ fontSize: "clamp(4rem,11vw,10rem)" }}>
            DEIN KÖRPER
        </motion.h1>
        <div className="mb-6">
          <motion.h1 initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading leading-[0.92]"
            style={{
              fontSize: "clamp(4rem,11vw,10rem)",
              color: "#C9A84C",
            }}>
            DEINE STÄRKE
          </motion.h1>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-md">
              Maßgeschneiderter Ernährungsplan, 1:1 Training und Coaching — für echte, nachhaltige Ergebnisse.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#kontakt"
                className="px-8 py-4 font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                style={{ background: "linear-gradient(135deg, #C9A84C, #F0D080)", color: "#0A0A0A" }}>
                Kostenloses Erstgespräch
              </a>
              <a href="#leistungen"
                className="px-8 py-4 font-bold text-sm tracking-wider uppercase rounded-xl border transition-all duration-300 hover:bg-white/5"
                style={{ borderColor: "rgba(201,168,76,0.25)", color: "rgba(255,255,255,0.6)" }}>
                Leistungen →
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-3">
            {[
              { value: "150+", label: "Erfolgreiche Kunden" },
              { value: "8+", label: "Jahre Erfahrung" },
              { value: "98%", label: "Zufriedenheit" },
              { value: "12 kg", label: "Ø Gewichtsverlust" },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.08 }}
                className="p-5 rounded-2xl"
                style={{
                  background: i === 0
                    ? "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))"
                    : "rgba(255,255,255,0.03)",
                  border: i === 0 ? "1px solid rgba(201,168,76,0.3)" : "1px solid rgba(255,255,255,0.06)",
                }}>
                <div className="font-heading text-4xl leading-none mb-1"
                  style={{ color: i === 0 ? "#F0D080" : "#C9A84C" }}>{s.value}</div>
                <div className="text-xs tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-9 rounded-full border-2 flex items-start justify-center pt-1.5 mx-auto"
          style={{ borderColor: "rgba(201,168,76,0.3)" }}>
          <div className="w-1.5 h-2 rounded-full" style={{ background: "#C9A84C" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
