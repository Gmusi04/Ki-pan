import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section id="pan" className="relative bg-[var(--color-cream)] py-24 md:py-32">
      <div className="container-editorial grid gap-10 md:grid-cols-12 md:gap-6">
        <Reveal className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
            Panadería artesanal
          </p>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-8">
          <h2 className="font-serif-display text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
            En Ki&rsquo;Pan el horno enciende antes que Temozón se despierte.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--color-ink-soft)] md:text-lg">
            <p>
              Todos los días se hornea pan de masa madre y pan dulce desde cero:
              fermentación larga, técnica de panadería europea y una barra que
              acompaña cada pieza con una cocina pensada para desayunar bien.
            </p>
            <p>
              La carta se mueve entre chilaquiles, sándwiches hechos con pan del
              día, café y jugos prensados en frío — el tipo de mesa donde uno se
              queda más tiempo del que planeaba.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
