import { site } from "@/data/site";

export function Footer({ logoSrc }: { logoSrc: string | null }) {
  return (
    <footer className="bg-[var(--color-ink)] pb-28 pt-16 text-[var(--color-cream)]/80 md:pb-16">
      <div className="container-editorial grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            {logoSrc && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logoSrc} alt="Iconic Scents" className="h-8 w-auto rounded-md bg-[var(--color-cream)] p-1" />
            )}
            <p className="font-serif-display text-2xl uppercase tracking-[0.2em] text-[var(--color-cream)]">
              Iconic Scents
            </p>
          </div>
          <p className="mt-2 text-sm">{site.category}</p>
          <p className="mt-1 text-sm">{site.location}</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">{site.delivery}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-cream)]/50">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.whatsapp.href} target="_blank" rel="noreferrer" className="hover:text-[var(--color-cream)]">
                WhatsApp · {site.whatsapp.display}
              </a>
            </li>
            <li>
              <a href={site.social.instagram} target="_blank" rel="noreferrer" className="hover:text-[var(--color-cream)]">
                Instagram · {site.social.instagramHandle}
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-[var(--color-cream)]">
                  {site.email}
                </a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-cream)]/50">Explorar</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#coleccion" className="hover:text-[var(--color-cream)]">Colección</a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-[var(--color-cream)]">Contacto</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-editorial mt-12 flex flex-col gap-2 border-t border-[var(--color-cream)]/10 pt-6 text-xs text-[var(--color-cream)]/40 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Iconic Scents.</span>
        <span>{site.trustBadge}</span>
      </div>
    </footer>
  );
}
