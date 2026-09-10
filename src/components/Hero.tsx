import { PhotoView } from "@/components/PhotoView";
import { site } from "@/data/site";
import { photoExists } from "@/lib/photoExists";

export function Hero() {
  const src = "/images/hero-perfume.jpg";
  return (
    <section id="top" className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden">
      <div className="absolute inset-0">
        <PhotoView
          exists={photoExists(src)}
          src={src}
          alt="Fragancia de Iconic Scents"
          kind="bottle"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/90 via-[var(--color-ink)]/30 to-[var(--color-ink)]/10" />
      </div>

      <div className="container-editorial relative z-10 flex w-full flex-col gap-8 pb-16 pt-32 md:pb-24">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--color-cream)]/80">
            {site.social.instagramHandle}
          </p>
          <h1 className="font-serif-display text-6xl leading-[0.95] tracking-tight text-[var(--color-cream)] sm:text-7xl md:text-8xl lg:text-[7rem]">
            Iconic Scents
          </h1>
          <p className="mt-5 max-w-md text-lg text-[var(--color-cream)]/90 md:text-xl">
            {site.tagline}.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#coleccion"
            className="rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--color-gold-dark)]"
          >
            Ver colección
          </a>
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--color-cream)]/50 px-6 py-3 text-sm text-[var(--color-cream)] transition-colors hover:bg-[var(--color-cream)]/10"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-cream)]/70 md:flex">
        <span className="text-[10px] uppercase tracking-[0.25em]">Desliza</span>
        <span className="h-8 w-px animate-pulse bg-[var(--color-cream)]/50" />
      </div>
    </section>
  );
}
