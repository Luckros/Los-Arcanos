import Link from "next/link";
import { WhatsAppIcon } from "./Icons";

const WA = "https://wa.me/541133049156?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20sobre%20tus%20servicios";

export default function FinalCTA() {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #293b52 0%, #324660 50%, #293b52 100%)" }}>

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(137,91,118,0.1) 0%, transparent 68%)" }} />

      <div className="relative z-10 max-w-xl mx-auto">
        <p className="font-jost text-[11px] tracking-[4px] uppercase mb-4"
          style={{ color: "var(--rose)" }}>
          ✦ ¿Lista para dar el paso?
        </p>

        <h2 className="font-serif text-[clamp(36px,6vw,62px)] font-light leading-[1.15] mb-5"
          style={{ color: "var(--lavender)" }}>
          Tu siguiente capítulo<br />
          empieza con una{" "}
          <em style={{ color: "var(--rose)" }}>sola consulta</em>
        </h2>

        <p className="font-jost text-[15px] font-light leading-[1.75] mb-10"
          style={{ color: "var(--lavender-soft)" }}>
          Escribime directamente por WhatsApp y conversamos sin compromiso.
          En minutos te cuento cómo funciona, respondemos tus dudas y
          acordamos el servicio que más te resuene.
        </p>

        <Link href={WA} target="_blank" rel="noopener noreferrer"
          className="btn-primary text-sm px-12 py-5">
          <WhatsAppIcon className="w-5 h-5" />
          Escribime por WhatsApp
        </Link>

        <p className="font-jost text-[11px] tracking-[1px] mt-6"
          style={{ color: "rgba(194,207,244,0.25)" }}>
          ✦ Respondo personalmente · Consultas para Argentina y todo el mundo ✦
        </p>
      </div>
    </section>
  );
}
