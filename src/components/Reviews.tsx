import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function Reviews() {
  return (
    <section className="bg-[var(--color-ink)] py-20 text-[var(--color-cream)] md:py-28">
      <div className="container-editorial flex flex-col items-center gap-6 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-1 text-[var(--color-butter)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
              </svg>
            ))}
          </div>
          <p className="mt-5 font-serif-display text-4xl md:text-5xl">{site.rating}</p>
          <p className="mt-2 text-[var(--color-cream)]/70">
            Basado en {site.reviewCount}+ reseñas en Google
          </p>
          <a
            href={site.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full border border-[var(--color-cream)]/30 px-6 py-3 text-sm transition-colors hover:bg-[var(--color-cream)]/10"
          >
            Ver reseñas en Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}
