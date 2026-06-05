"use client";

export default function Footer() {
  return (
    <footer className="py-16 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="font-heading text-2xl tracking-widest mb-4">
              <span className="text-white">BALANCE</span>
              <span style={{ color: "#C9A84C" }}>BODY</span>
              <span className="text-white">VITAL</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Dein Weg zu mehr Gesundheit, Kraft und innerer Balance — im Studio, online und zuhause.
            </p>
          </div>

          {[
            { title: "Leistungen", links: ["Personal Training", "Online Coaching", "Wellness", "Produkte"] },
            { title: "Unternehmen", links: ["Über uns", "Kontakt", "Impressum", "Datenschutz"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p className="text-white/30 text-xs">© 2026 BalanceBodyVital. Alle Rechte vorbehalten.</p>
          <p className="text-white/20 text-xs">Made with passion for wellness</p>
        </div>
      </div>
    </footer>
  );
}
