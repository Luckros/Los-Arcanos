const testimonials = [
  {
    stars: 5,
    text: "La lectura me dio una claridad que llevaba meses buscando. Los audios fueron súper detallados y pude escucharlos las veces que necesité. Totalmente recomendable.",
    name: "Valentina G.",
    city: "Buenos Aires",
    service: "Lectura de Tarot",
  },
  {
    stars: 5,
    text: "La limpieza energética fue una experiencia increíble. Y el PDF que me mandó al terminar fue hermoso: detallado, cariñoso y con recomendaciones que realmente pude aplicar.",
    name: "Lucía M.",
    city: "Córdoba",
    service: "Limpieza Energética",
  },
  {
    stars: 5,
    text: "Era bastante escéptica, pero la lectura fue tan precisa que me dejó sin palabras. Muy profesional, empática y sin vueltas. Ya agendé mi segunda consulta.",
    name: "Fernanda R.",
    city: "Rosario",
    service: "Lectura de Tarot",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 px-6 bg-[var(--light-bg)]">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">✦ Testimonios</p>
        <h2 className="font-serif text-[clamp(32px,5vw,52px)] font-light text-[var(--text-dark)] leading-[1.2] mb-14">
          Lo que dicen quienes{" "}
          <em className="text-[var(--rose)] italic">ya dieron el paso</em>
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name}
              className="border border-[rgba(137,91,118,0.2)] bg-white/60 p-8 flex flex-col">

              {/* Service tag */}
              <span className="font-jost text-[9px] tracking-[2px] uppercase text-[var(--rose)] bg-[rgba(137,91,118,0.08)] px-2 py-1 self-start mb-4 border border-[rgba(137,91,118,0.2)]">
                {t.service}
              </span>

              {/* Stars */}
              <div className="text-[var(--rose)] text-xs tracking-[3px] mb-3">
                {"★".repeat(t.stars)}
              </div>

              {/* Opening quote */}
              <div className="font-serif text-5xl leading-[0.8] mb-3 opacity-25"
                style={{ color: "var(--rose)" }}>"</div>

              <p className="font-jost text-[14px] font-light leading-[1.85] text-[var(--text-mid)] italic mb-6 flex-grow">
                {t.text}
              </p>

              <p className="font-jost text-[11px] tracking-[2px] uppercase text-[var(--navy)]">
                — {t.name}, {t.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
