import Link from "next/link";
import { WhatsAppIcon } from "./Icons";

const WA_TAROT   = "https://wa.me/541133049156?text=Hola!%20Me%20interesa%20una%20Lectura%20de%20Tarot%20%F0%9F%83%8F";
const WA_LIMPIEZA = "https://wa.me/541133049156?text=Hola!%20Me%20interesa%20una%20Limpieza%20Energ%C3%A9tica%20%E2%9C%A8";

const services = [
  {
    icon: "🃏",
    name: "Lectura de Tarot",
    badge: "✦ 100% por WhatsApp · Sin videollamada",
    description:
      "Una lectura profunda, honesta y completamente personalizada para las preguntas que más te pesan. El proceso es simple: me contás tu consulta por WhatsApp y yo preparo tu lectura con dedicación y cuidado.",
    highlight:
      "Recibís la lectura en audios detallados directamente en tu WhatsApp. Sin horarios que coordinar, sin videollamadas que generen presión. Podés escuchar cada audio las veces que necesités, pausar, volver atrás y procesar la información a tu propio ritmo, cuando estés lista.",
    features: [
      "Lectura integral de tu situación actual",
      "Audios personalizados, claros y sin tecnicismos",
      "Amor, trabajo, propósito o lo que necesites consultar",
      "Espacio para preguntas de seguimiento",
    ],
    wa: WA_TAROT,
    waLabel: "Quiero mi Lectura de Tarot",
  },
  {
    icon: "✨",
    name: "Limpieza Energética",
    badge: "✦ Incluye Informe PDF completo",
    description:
      "Un trabajo energético profundo y personalizado para liberar bloqueos acumulados, cortar lazos que ya no te nutren y restaurar el equilibrio de tu campo áurico. Ideal si sentís pesadez, estancamiento o que algo no fluye.",
    highlight:
      "Al finalizar el trabajo, recibís un informe en formato PDF con todo el detalle de lo realizado: qué se encontró, qué se liberó y los pasos concretos recomendados para sostener y potenciar el proceso en tu vida diaria. Un recurso que podés releer cada vez que lo necesités.",
    features: [
      "Diagnóstico y trabajo en tus centros energéticos",
      "Corte de lazos y liberación de cargas ajenas",
      "Informe PDF detallado con todo lo trabajado",
      "Recomendaciones personalizadas post-limpieza",
    ],
    wa: WA_LIMPIEZA,
    waLabel: "Quiero mi Limpieza Energética",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-6 bg-[var(--light-bg)]">
      <div className="max-w-5xl mx-auto">

        <p className="section-label">✦ Mis servicios</p>
        <h2 className="font-serif text-[clamp(32px,5vw,52px)] font-light leading-[1.2] text-[var(--text-dark)] mb-4">
          Herramientas para{" "}
          <em className="text-[var(--rose)] italic">tu transformación</em>
        </h2>
        <p className="font-jost text-[15px] font-light text-[var(--text-mid)] leading-[1.75] max-w-xl mb-14">
          Cada servicio está diseñado para darte respuestas concretas, no
          mensajes vagos. Claridad real para decisiones reales.
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-[rgba(137,91,118,0.15)]">
          {services.map((svc) => (
            <div key={svc.name}
              className="service-card relative bg-[var(--light-bg)] p-10 overflow-hidden flex flex-col">

              <div className="text-3xl mb-5 opacity-80">{svc.icon}</div>

              <h3 className="font-serif text-[28px] font-normal text-[var(--navy)] mb-3">
                {svc.name}
              </h3>

              <span className="service-badge mb-5 inline-block self-start">
                {svc.badge}
              </span>

              <p className="font-jost text-[14px] font-light leading-[1.85] text-[var(--text-mid)] mb-4">
                {svc.description}
              </p>

              {/* Highlight box */}
              <div className="border-l-2 border-[var(--rose)] pl-4 mb-6 bg-[rgba(137,91,118,0.06)] py-3 pr-3">
                <p className="font-jost text-[13px] font-light leading-[1.85] text-[var(--navy)]">
                  {svc.highlight}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-grow">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-jost text-[13px] text-[var(--text-dark)]">
                    <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[var(--rose)] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA por servicio */}
              <Link href={svc.wa} target="_blank" rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-center mt-auto">
                <WhatsAppIcon className="w-4 h-4" />
                {svc.waLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
