const stats = [
  { num: "+2",   label: "Años de experiencia profesional" },
  { num: "100s", label: "Consultas realizadas"            },
  { num: "100%", label: "Personalizado y confidencial"    },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-6"
      style={{ background: "linear-gradient(135deg, #1e2d40 0%, #293b52 60%, #324660 100%)" }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.65fr] gap-16 items-center">

        {/* Imagen */}
        <div className="relative hidden md:block">
          <div className="w-full aspect-[3/4] border border-[rgba(194,207,244,0.12)] flex items-center justify-center">
            <img src="https://i.ibb.co/xtBFV9Wb/Whats-App-Image-2026-06-05-at-15-40-25.jpg" alt="Foto de perfil" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Texto */}
        <div>
          <p className="section-label" style={{ color: "var(--rose)" }}>✦ Sobre mí</p>

          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.2] mb-6"
            style={{ color: "var(--lavender)" }}>
            Dos años transformando vidas,<br />
            <em style={{ color: "var(--rose)" }}>con claridad y los pies en la tierra</em>
          </h2>

          <p className="font-jost text-[14px] font-light leading-[1.95] mb-4"
            style={{ color: "var(--lavender-soft)" }}>
            Llevo más de dos años acompañando profesionalmente a personas en momentos
            de cambio, duda y búsqueda. No llegué a este camino por accidente: fue mi
            propia experiencia atravesando situaciones difíciles lo que me llevó a
            descubrir el poder real de las herramientas espirituales cuando se aplican
            con rigor, honestidad y mucho cuidado.
          </p>

          <p className="font-jost text-[14px] font-light leading-[1.95] mb-4"
            style={{ color: "var(--lavender-soft)" }}>
            Mi trabajo no se trata de decirte lo que querés escuchar. Se trata de
            darte una mirada clara y honesta sobre tu situación para que puedas tomar
            decisiones con más certeza, menos miedo y más paz. Sin promesas vacías,
            sin lenguaje críptico: cada consulta se traduce en información práctica y
            accionable para tu vida real.
          </p>

          <p className="font-jost text-[14px] font-light leading-[1.95]"
            style={{ color: "var(--lavender-soft)" }}>
            Creo profundamente que la espiritualidad es una herramienta accesible para
            todos, no un privilegio ni un misterio. Mi misión es que cada persona que
            trabaje conmigo salga de la sesión con más claridad, más paz y al menos
            un paso concreto hacia adelante.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-[rgba(194,207,244,0.1)]">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-[40px] font-light leading-none"
                  style={{ color: "var(--rose)" }}>
                  {s.num}
                </div>
                <div className="font-jost text-[10px] tracking-[1.5px] uppercase mt-1"
                  style={{ color: "rgba(194,207,244,0.35)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
