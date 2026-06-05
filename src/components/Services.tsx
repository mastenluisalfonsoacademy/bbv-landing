"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { title: "Personal Training", desc: "1:1-Training individuell auf dich abgestimmt — intensiv, persönlich, effektiv.", img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80", tag: "1:1 Training" },
  { title: "Ernährungsplan", desc: "Maßgeschneiderter Plan für deine Ziele — wissenschaftlich fundiert und nachhaltig.", img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80", tag: "Ernährung" },
  { title: "Online Coaching", desc: "Flexible Betreuung von überall — dein persönlicher Coach immer dabei.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", tag: "Online" },
  { title: "Vibrationsplatte", desc: "Aktiviert 95% aller Muskelfasern — Fettverbrennung, Kraft, Regeneration.", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80", tag: "Equipment" },
  { title: "Abnehmen & Form", desc: "Nachhaltiger Gewichtsverlust und Körperformung — ohne Jo-Jo-Effekt.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", tag: "Transformation" },
  { title: "Premium Produkte", desc: "Von mir persönlich getestet — für maximale Qualität und Ergebnisse.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", tag: "Produkte" },
];

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ border: "1px solid rgba(0,255,65,0.12)" }}>
      <div className="relative h-52 overflow-hidden">
        <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(10,10,10,0.95) 100%)" }} />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold tracking-widest uppercase"
          style={{ background: "rgba(0,255,65,0.15)", color: "#00FF41", border: "1px solid rgba(0,255,65,0.3)" }}>
          {s.tag}
        </span>
      </div>
      <div className="p-6" style={{ background: "linear-gradient(135deg, #131313, #0f0f0f)" }}>
        <h3 className="font-heading text-xl text-white mb-2 tracking-wide">{s.title}</h3>
        <p className="text-white/40 text-sm leading-relaxed mb-4">{s.desc}</p>
        <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 group-hover:gap-3"
          style={{ color: "#00FF41" }}>Mehr erfahren →</span>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="leistungen" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,255,65,0.05) 0%, transparent 70%)" }} />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: "#00FF41" }}>Was wir anbieten</p>
          <h2 className="font-heading leading-none mb-4" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
            UNSERE <span style={{ color: "#00FF41" }}>LEISTUNGEN</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-sm">Ganzheitliche Betreuung für deinen Weg zum Wunschkörper.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
