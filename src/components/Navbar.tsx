"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Leistungen", "Pakete", "Coaching", "Über mich"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl tracking-widest">
          <span className="text-white">BALANCE</span>
          <span style={{ color: "#00FF41" }}>BODY</span>
          <span className="text-white">VITAL</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 tracking-wider uppercase">
              {link}
            </a>
          ))}
        </nav>
        <a href="#kontakt"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105"
          style={{ background: "linear-gradient(135deg, #00FF41, #39FF14)", color: "#0A0A0A", borderRadius: "6px" }}>
          Termin buchen
        </a>
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="block py-3 text-white/70 hover:text-white border-b border-white/5 text-sm tracking-wider uppercase">
                {link}
              </a>
            ))}
            <a href="#kontakt" className="mt-4 block text-center py-3 font-semibold text-sm tracking-wider uppercase rounded-md"
              style={{ background: "linear-gradient(135deg, #00FF41, #39FF14)", color: "#0A0A0A" }}>
              Termin buchen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
