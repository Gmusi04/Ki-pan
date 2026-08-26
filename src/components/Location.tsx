import { PhotoView } from "@/components/PhotoView";
import { site } from "@/data/site";
import { photoExists } from "@/lib/photoExists";
import { OpenStatus } from "./OpenStatus";
import { Reveal } from "./Reveal";

export function Location() {
  const src = "/images/fachada-plaza.jpg";
  return (
    <section id="ubicacion" className="bg-[var(--color-cream)] py-24 md:py-32">
      <div className="container-editorial grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
            Ubicación
          </p>
          <h2 className="mt-3 font-serif-display text-3xl text-[var(--color-ink)] sm:text-4xl md:text-5xl">
            Plaza Vía Cinco, Temozón Norte
          </h2>

          <div className="mt-8 space-y-1 text-base text-[var(--color-ink-soft)]">
            <p>{site.address.line1}</p>
            <p>{site.address.line2}</p>
            <p>{site.address.line3}</p>
          </div>

          <div className="mt-6">
            <OpenStatus />
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--color-line)]">
            <table className="w-full text-sm">
              <tbody>
                {site.hours.map((h) => (
                  <tr key={h.day} className="border-b border-[var(--color-line)] last:border-none">
                    <td className="px-4 py-2.5 text-[var(--color-ink)]">{h.day}</td>
                    <td className="px-4 py-2.5 text-right text-[var(--color-ink-soft)]">
                      {h.open && h.close ? `${h.open} – ${h.close}` : "Cerrado"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--color-terracotta)] px-6 py-3 text-sm font-medium text-[var(--color-cream)] transition-colors hover:bg-[var(--color-terracotta-dark)]"
            >
              Cómo llegar
            </a>
            <a
              href={site.phoneHref}
              className="rounded-full border border-[var(--color-ink)]/20 px-6 py-3 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]/50"
            >
              Llamar · {site.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-auto md:h-full">
            <PhotoView
              exists={photoExists(src)}
              src={src}
              alt="Fachada de Ki'Pan en Plaza Vía Cinco, Temozón Norte"
              kind="storefront"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
