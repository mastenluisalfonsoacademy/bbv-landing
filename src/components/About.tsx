"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const qualities = [
  "Zertifizierter Personal Trainer & Ernährungsberater",
  "Individuelle Programme — kein Copy-Paste",
  "Nachhaltige Ergebnisse ohne Jojo-Effekt",
  "Studio + Online — flexibel wie du",
  "Persönliche Betreuung & Check-ins",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="coaching" className="py-32 relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 60% at 100% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
      }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="aspect-[4/5] rounded-3xl overflow-hidden"
              style={{ border: "1px solid rgba(201,168,76,0.1)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=80"
                alt="Personal Coach"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 p-5 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
            >
              <div className="font-heading text-4xl text-black leading-none">8+</div>
              <div className="text-black/70 text-xs font-medium mt-1">Jahre Erfahrung</div>
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase"
              style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", background: "rgba(201,168,76,0.05)" }}
            >
              Dein Coach
            </div>

            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-6">
              DEIN COACH.<br />
              <em className="not-italic" style={{ color: "#C9A84C" }}>DEIN PARTNER.</em>
            </h2>

            <p className="text-white/50 text-base leading-relaxed mb-8">
              Ich bin dein persönlicher Coach für Fitness, Ernährung und ein gesundes Leben.
              Mit 8+ Jahren Erfahrung und einem ganzheitlichen Ansatz begleite ich dich auf
              deinem Weg — mit Herz, Expertise und echten Ergebnissen.
            </p>

            <ul className="space-y-3 mb-10">
              {qualities.map((q, i) => (
                <motion.li
                  key={q}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                    style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>✓</span>
                  {q}
                </motion.li>
              ))}
            </ul>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-sm tracking-wider uppercase rounded-lg transition-transform duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", color: "#0A0A0A" }}
            >
              Erstgespräch buchen →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
