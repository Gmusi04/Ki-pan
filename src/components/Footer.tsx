import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] pb-28 pt-16 text-[var(--color-cream)]/80 md:pb-16">
      <div className="container-editorial grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif-display text-2xl text-[var(--color-cream)]">Ki&rsquo;Pan</p>
          <p className="mt-2 text-sm">{site.category}</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            {site.address.line1}, {site.address.line2}
            <br />
            {site.address.line3}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-cream)]/50">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-[var(--color-cream)]">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.social.instagram} target="_blank" rel="noreferrer" className="hover:text-[var(--color-cream)]">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.social.tiktok} target="_blank" rel="noreferrer" className="hover:text-[var(--color-cream)]">
                TikTok
              </a>
            </li>
            <li>
              <a href={site.social.facebook} target="_blank" rel="noreferrer" className="hover:text-[var(--color-cream)]">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-cream)]/50">Explorar</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#menu" className="hover:text-[var(--color-cream)]">Menú</a>
            </li>
            <li>
              <a href={site.mapsHref} target="_blank" rel="noreferrer" className="hover:text-[var(--color-cream)]">
                Google Maps
              </a>
            </li>
            <li>
              <a href="#galeria" className="hover:text-[var(--color-cream)]">Galería</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-editorial mt-12 border-t border-[var(--color-cream)]/10 pt-6 text-xs text-[var(--color-cream)]/40">
        © {new Date().getFullYear()} Ki&rsquo;Pan. Mérida, Yucatán.
      </div>
    </footer>
  );
}
