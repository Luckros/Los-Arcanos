"use client";
import Link from "next/link";
import { WhatsAppIcon } from "./Icons";

const WA = "https://wa.me/541133049156?text=Hola!%20Quisiera%20consultar%20sobre%20tus%20servicios";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(41,59,82,0.95)] backdrop-blur-md border-b border-[rgba(194,207,244,0.1)] px-6 py-3.5 flex items-center justify-between">
      <span className="font-serif text-xl font-semibold tracking-[2px] text-[var(--lavender)]">
        ✦ Los Arcanos
      </span>

      <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[1.5px] uppercase font-jost text-[rgba(194,207,244,0.5)]">
        <a href="#servicios"   className="hover:text-[var(--lavender)] transition-colors">Servicios</a>
        <a href="#sobre-mi"    className="hover:text-[var(--lavender)] transition-colors">Sobre mí</a>
        <a href="#testimonios" className="hover:text-[var(--lavender)] transition-colors">Testimonios</a>
      </div>

      <Link href={WA} target="_blank" rel="noopener noreferrer"
        className="btn-primary text-[11px] px-5 py-2.5">
        <WhatsAppIcon className="w-4 h-4" />
        Consultar ahora
      </Link>
    </nav>
  );
}
