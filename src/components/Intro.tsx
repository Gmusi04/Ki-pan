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
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--color-ink-soft)] md:text-lg">
            Seleccionamos fragancias de las mejores casas árabes, con
            carácter propio. Escríbenos y te ayudamos a encontrar la tuya.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
