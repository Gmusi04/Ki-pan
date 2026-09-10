import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section id="nosotros" className="relative bg-[var(--color-cream)] py-24 md:py-32">
      <div className="container-editorial grid gap-10 md:grid-cols-12 md:gap-6">
        <Reveal className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Iconic Scents
          </p>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-8">
          <h2 className="font-serif-display text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
            Cada fragancia cuenta una historia.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--color-ink-soft)] md:text-lg">
            <p>
              Seleccionamos fragancias con carácter propio: amaderadas,
              florales, cítricas y orientales, pensadas para quienes buscan
              algo más que un perfume — una firma que los identifique.
            </p>
            <p>
              El catálogo completo, novedades y disponibilidad se mueven
              primero en Instagram. Escríbenos por ahí o por WhatsApp y te
              ayudamos a encontrar tu fragancia.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
