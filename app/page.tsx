import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import { Ornament, StickyWhatsApp, Footer } from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* ── Navegación sticky ───────────────────── */}
      <Navbar />

      {/* ── Hero ────────────────────────────────── */}
      <Hero />

      <Ornament />

      {/* ── Servicios ───────────────────────────── */}
      <Services />

      <Ornament />

      {/* ── Sobre mí ────────────────────────────── */}
      <About />

      <Ornament />

      {/* ── Testimonios ─────────────────────────── */}
      <Testimonials />

      {/* ── CTA Final ───────────────────────────── */}
      <FinalCTA />

      {/* ── Footer ──────────────────────────────── */}
      <Footer />

      {/* ── Botón WhatsApp flotante ──────────────── */}
      <StickyWhatsApp />
    </>
  );
}
