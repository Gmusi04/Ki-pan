"use client";

import { useMemo, useState } from "react";
import { PhotoView } from "@/components/PhotoView";
import type { Product } from "@/data/products";
import { whatsappOrderHref } from "@/data/site";
import { Reveal } from "./Reveal";

const PAGE_SIZE = 9;

function formatPrice(price: number | null) {
  if (price === null) return "Precio por WhatsApp";
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(price);
}

export function Catalog({
  products,
}: {
  products: (Product & { exists: boolean })[];
}) {
  const families = useMemo(
    () => Array.from(new Set(products.map((p) => p.family))),
    [products],
  );
  const filters = ["Todos", "Destacados", ...families];
  const [active, setActive] = useState("Todos");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = products.filter((p) => {
    if (active === "Todos") return true;
    if (active === "Destacados") return p.featured;
    return p.family === active;
  });

  const shown = filtered.slice(0, visible);

  return (
    <section id="coleccion" className="bg-[var(--color-cream)] py-24 md:py-32">
      <div className="container-editorial">
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
              Colección
            </p>
            <h2 className="mt-3 font-serif-display text-4xl text-[var(--color-ink)] sm:text-5xl">
              Nuestras fragancias
            </h2>
            <p className="mt-3 max-w-lg text-sm text-[var(--color-ink-soft)] md:text-base">
              El catálogo completo sigue creciendo — si no ves lo que buscas,
              pregúntanos por WhatsApp o en Instagram.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mb-10 flex flex-wrap gap-2 md:gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActive(f);
                setVisible(PAGE_SIZE);
              }}
              className={`rounded-full border px-4 py-2 text-sm transition-colors md:px-5 ${
                active === f
                  ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-ink)]"
                  : "border-[var(--color-ink)]/15 text-[var(--color-ink)]/70 hover:border-[var(--color-ink)]/40"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        {shown.length === 0 ? (
          <p className="text-sm text-[var(--color-ink-soft)]">
            Aún no hay fragancias en esta categoría.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-3">
            {shown.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i * 0.04, 0.3)}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-parchment)]">
                  <div className="relative aspect-square overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      <PhotoView
                        exists={p.exists}
                        src={`/images/products/${p.slug}.jpg`}
                        alt={p.name}
                        kind="bottle"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw"
                      />
                    </div>
                    {p.featured && (
                      <span className="absolute left-3 top-3 rounded-full bg-[var(--color-ink)]/85 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-cream)]">
                        Destacado
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-2 p-4 md:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif-display text-lg text-[var(--color-ink)] md:text-xl">
                        {p.name}
                      </h3>
                      {p.size && (
                        <span className="shrink-0 text-xs text-[var(--color-ink-soft)]">
                          {p.size}
                        </span>
                      )}
                    </div>
                    <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-gold-dark)]">
                      {p.family} · {p.gender}
                    </p>
                    <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                      {p.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-[var(--color-ink)]">
                        {formatPrice(p.price)}
                      </span>
                      <a
                        href={whatsappOrderHref(p.name)}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[var(--color-ink)]/20 px-3 py-1.5 text-xs text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]/50"
                      >
                        Pedir
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {visible < filtered.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="rounded-full border border-[var(--color-ink)]/20 px-6 py-3 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]/50"
            >
              Mostrar más
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
