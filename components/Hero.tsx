import Link from "next/link";
import { WhatsAppIcon } from "./Icons";

const WA = "https://wa.me/541133049156?text=Hola!%20Quisiera%20consultar%20sobre%20tus%20servicios";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center text-center px-6 py-20 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1e2d40 0%, #293b52 45%, #324660 75%, #1e2d40 100%)" }}>

      {/* Star-field */}
      <div className="hero-stars absolute inset-0 opacity-60 pointer-events-none" />

      {/* Radial glow — rose accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[640px] h-[640px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(137,91,118,0.12) 0%, transparent 68%)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="font-jost text-[11px] tracking-[4px] uppercase text-[var(--rose)] mb-6 opacity-90">
          ✦ Lecturas · Energía · Claridad ✦
        </p>

        <h1 className="font-serif text-[clamp(42px,7vw,76px)] font-light leading-[1.1] text-[var(--lavender)] mb-5">
          Cuando no sabés<br />
          hacia dónde ir,<br />
          <em className="text-[var(--rose)] italic">el alma siempre sabe</em>
        </h1>

        <p className="font-jost text-[15px] font-light leading-[1.75] text-[var(--lavender-soft)] max-w-lg mx-auto mb-9 tracking-[0.3px]">
          Lecturas de Tarot y Limpiezas Energéticas personalizadas para que
          salgas de la parálisis y encuentres tu próximo paso con claridad y paz interior.
        </p>

        <Link href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
          <WhatsAppIcon className="w-5 h-5" />
          Reservá tu consulta
        </Link>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {["+2 años de experiencia", "100% personalizado", "Por WhatsApp"].map((item, i) => (
            <span key={item} className="flex items-center gap-4 font-jost text-[10px] tracking-[1.5px] uppercase text-[rgba(194,207,244,0.4)]">
              {i > 0 && <span className="w-px h-4 bg-[var(--rose)] opacity-40" />}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
