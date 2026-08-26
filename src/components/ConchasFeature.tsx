import { PhotoView } from "@/components/PhotoView";
import { photoExists } from "@/lib/photoExists";
import { Reveal } from "./Reveal";

export function ConchasFeature() {
  const src = "/images/concha-hero.jpg";
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] py-24 text-[var(--color-cream)] md:py-0">
      <div className="grid md:min-h-[85vh] md:grid-cols-2">
        <div className="relative order-2 min-h-[420px] md:order-1 md:min-h-full">
          <PhotoView
            exists={photoExists(src)}
            src={src}
            alt="Concha artesanal recién horneada de Ki'Pan"
            kind="concha"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div className="relative order-1 flex items-center px-6 py-16 md:order-2 md:px-16 md:py-0">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-butter)]">
              Producto estrella
            </p>
            <h2 className="mt-4 font-serif-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Las conchas
              <br />
              de Ki&rsquo;Pan.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-cream)]/80 md:text-lg">
              La pieza que le da nombre a su fama en Mérida: costra dulce y
              crujiente, migajón suave, horneada en tandas frescas cada mañana.
              Se van volando — quien llega tarde, las encuentra en Instagram.
            </p>
            <a
              href="#menu"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-cream)]/40 px-6 py-3 text-sm transition-colors hover:bg-[var(--color-cream)]/10"
            >
              Ver menú
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
