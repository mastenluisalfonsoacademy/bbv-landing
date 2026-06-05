"use client";
import { motion } from "framer-motion";

const items = ["Personal Training", "Ernährungsplan", "Online Coaching", "Vibrationsplatte", "Abnehmen & Form", "Premium Produkte", "Nachhaltige Ergebnisse", "1:1 Betreuung"];

export default function Marquee() {
  return (
    <div className="relative py-5 overflow-hidden border-y" style={{ borderColor: "rgba(201,168,76,0.1)", background: "rgba(201,168,76,0.03)" }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-4 text-xs font-semibold tracking-[0.25em] uppercase">
            <span style={{ color: "#C9A84C" }}>✦</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>{item}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
