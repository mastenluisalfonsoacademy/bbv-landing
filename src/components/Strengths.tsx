"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { icon: "💪", title: "Personal Training", desc: "1:1-Training individuell auf dich zugeschnitten — intensiv, persönlich, effektiv." },
  { icon: "🥗", title: "Ernährungsberatung", desc: "Wissenschaftlich fundierte Pläne — maßgeschneidert für deine Ziele." },
  { icon: "💻", title: "Online Coaching", desc: "Flexible Betreuung von überall — dein persönlicher Coach immer dabei." },
  { icon: "⚡", title: "Vibrationsplatte", desc: "Professionelles Equipment für maximale Fettverbrennung und Regeneration." },
  { icon: "📲", title: "24/7 Support", desc: "Immer erreichbar per WhatsApp, App oder Video-Call. Du bist nie allein." },
  { icon: "🏆", title: "Nachhaltige Ergebnisse", desc: "Kein Jojo-Effekt — echte, langfristige Veränderungen für dein Leben." },
];

export default function Strengths() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,255,65,0.06) 0%, transparent 70%)" }} />
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: "#00FF41" }}>Was uns auszeichnet</p>
          <h2 className="font-heading leading-none" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
            UNSERE <span style={{ color: "#00FF41" }}>STÄRKEN</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div key={feature.title}
              initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative p-7 rounded-2xl group cursor-default"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,255,65,0.12)", transition: "box-shadow 0.3s ease, border-color 0.3s ease" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,65,0.15)"; e.currentTarget.style.borderColor = "rgba(0,255,65,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(0,255,65,0.12)"; }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: "rgba(0,255,65,0.08)", border: "1px solid rgba(0,255,65,0.2)" }}>
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl tracking-wide text-white mb-2">{feature.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
