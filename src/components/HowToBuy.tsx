import { site } from "@/data/site";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Explora el catálogo",
    body: "Mira las fragancias disponibles aquí o en nuestro Instagram para conocer notas y precios.",
  },
  {
    n: "02",
    title: "Escríbenos",
    body: "Cuéntanos qué fragancia te interesa por WhatsApp o por DM en Instagram.",
  },
  {
    n: "03",
    title: "Recíbelo",
    body: "Coordinamos envío o entrega, y confirmamos junto contigo antes de despachar tu pedido.",
  },
];

export function HowToBuy() {
  return (
    <section className="bg-[var(--color-ink)] py-24 text-[var(--color-cream)] md:py-32">
      <div className="container-editorial">
        <Reveal className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Cómo comprar
          </p>
          <h2 className="mt-3 font-serif-display text-3xl sm:text-4xl md:text-5xl">
            Pedir tu fragancia es así de simple.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <p className="font-serif-display text-3xl text-[var(--color-gold)]">{s.n}</p>
              <h3 className="mt-3 text-lg font-medium text-[var(--color-cream)]">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--color-cream)]/70">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14 flex flex-wrap gap-3">
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold-dark)]"
          >
            Escribir por WhatsApp
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--color-cream)]/30 px-6 py-3 text-sm text-[var(--color-cream)] transition-colors hover:bg-[var(--color-cream)]/10"
          >
            Escribir por Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
