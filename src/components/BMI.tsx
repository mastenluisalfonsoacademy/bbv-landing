"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

function getCategory(bmi: number) {
  if (bmi < 18.5) return { label: "Untergewicht", color: "#60A5FA", bg: "rgba(96,165,250,0.1)", border: "rgba(96,165,250,0.3)" };
  if (bmi < 25)   return { label: "Normalgewicht", color: "#00FF41", bg: "rgba(0,255,65,0.1)", border: "rgba(0,255,65,0.3)" };
  if (bmi < 30)   return { label: "Übergewicht", color: "#FBBF24", bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.3)" };
  return           { label: "Adipositas", color: "#F87171", bg: "rgba(248,113,113,0.1)", border: "rgba(248,113,113,0.3)" };
}

export default function BMI() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [gewicht, setGewicht] = useState("");
  const [groesse, setGroesse] = useState("");
  const [alter, setAlter]     = useState("");
  const [result, setResult]   = useState<number | null>(null);
  const [error, setError]     = useState("");

  function calculate() {
    const w = parseFloat(gewicht), h = parseFloat(groesse), a = parseFloat(alter);
    if (!w || !h || !a || w <= 0 || h <= 0 || a <= 0) { setError("Bitte alle Felder korrekt ausfüllen."); setResult(null); return; }
    setResult(Math.round((w / ((h / 100) ** 2)) * 10) / 10);
    setError("");
  }

  const category = result !== null ? getCategory(result) : null;
  const inputStyle = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,255,65,0.15)", color: "#ffffff", borderRadius: "10px", padding: "12px 16px", width: "100%", fontSize: "15px", outline: "none", transition: "border-color 0.2s" };

  return (
    <section id="bmi" className="py-28 relative overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(0,255,65,0.04) 0%, transparent 70%)" }} />
      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: "#00FF41" }}>Kostenloser Schnellcheck</p>
          <h2 className="font-heading leading-none" style={{ fontSize: "clamp(2rem,5vw,4rem)" }}>
            BERECHNE DEINEN <span style={{ color: "#00FF41" }}>BMI</span>
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }} className="p-8 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,255,65,0.15)", boxShadow: "0 0 40px rgba(0,255,65,0.05)" }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { label: "Gewicht (kg)", value: gewicht, set: setGewicht, ph: "z.B. 75" },
              { label: "Größe (cm)",   value: groesse, set: setGroesse, ph: "z.B. 175" },
              { label: "Alter (Jahre)", value: alter,  set: setAlter,   ph: "z.B. 30" },
            ].map(({ label, value, set, ph }) => (
              <div key={label}>
                <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</label>
                <input type="number" placeholder={ph} value={value} onChange={e => set(e.target.value)} style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(0,255,65,0.5)")}
                  onBlur={e  => (e.currentTarget.style.borderColor = "rgba(0,255,65,0.15)")} />
              </div>
            ))}
          </div>
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <button onClick={calculate}
            className="w-full py-4 font-bold text-sm tracking-[0.2em] uppercase rounded-xl transition-all duration-300 hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #00FF41, #39FF14)", color: "#0A0A0A" }}>
            BERECHNEN
          </button>
          {result !== null && category && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="mt-7 p-6 rounded-xl text-center" style={{ background: category.bg, border: `1px solid ${category.border}` }}>
              <div className="font-heading text-6xl mb-2" style={{ color: category.color }}>{result}</div>
              <div className="text-sm font-bold tracking-widest uppercase" style={{ color: category.color }}>{category.label}</div>
              <p className="text-white/40 text-xs mt-2">Dein Body-Mass-Index (BMI)</p>
            </motion.div>
          )}
          {result !== null && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-7 text-center">
              <p className="text-white/50 text-sm mb-4">Starte mit uns deine persönliche Transformation</p>
              <a href="#kontakt" className="inline-flex items-center gap-2 px-8 py-3.5 font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #00FF41, #39FF14)", color: "#0A0A0A" }}>
                BIA-Analyse buchen →
              </a>
            </motion.div>
          )}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { range: "< 18.5",   label: "Untergewicht", color: "#60A5FA" },
            { range: "18.5–24.9", label: "Normalgewicht", color: "#00FF41" },
            { range: "25–29.9",  label: "Übergewicht",  color: "#FBBF24" },
            { range: "≥ 30",     label: "Adipositas",   color: "#F87171" },
          ].map(item => (
            <div key={item.label} className="p-3 rounded-lg text-center"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="font-heading text-lg" style={{ color: item.color }}>{item.range}</div>
              <div className="text-white/40 text-xs mt-0.5">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
