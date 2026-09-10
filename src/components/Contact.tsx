import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contacto" className="bg-[var(--color-parchment)] py-24 md:py-32">
      <div className="container-editorial">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Contacto
          </p>
          <h2 className="mt-3 font-serif-display text-3xl text-[var(--color-ink)] sm:text-4xl md:text-5xl">
            Hablemos de tu próxima fragancia
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-ink-soft)] md:text-lg">
            {site.delivery}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold-dark)]"
            >
              WhatsApp · {site.whatsapp.display}
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--color-ink)]/20 px-6 py-3 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]/50"
            >
              Instagram · {site.social.instagramHandle}
            </a>
            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="rounded-full border border-[var(--color-ink)]/20 px-6 py-3 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]/50"
              >
                {site.email}
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
