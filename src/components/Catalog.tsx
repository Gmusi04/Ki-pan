"use client";

import { useState } from "react";
import { PhotoView } from "@/components/PhotoView";
import { brands, familyTint, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";
import { Reveal } from "./Reveal";

const PAGE_SIZE = 12;

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(price);
}

function ProductCard({ p, delay }: { p: Product & { exists: boolean }; delay: number }) {
  const { items, add, setQty } = useCart();
  const inCart = items.find((i) => i.slug === p.slug);

  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-parchment)]">
        <div className="relative aspect-square overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <PhotoView
              exists={p.exists}
              src={`/images/products/${p.slug}.jpg`}
              alt={p.name}
              kind="bottle"
              tint={familyTint[p.family]}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
          </div>
          {p.featured && (
            <span className="absolute left-3 top-3 rounded-full bg-[var(--color-ink)]/85 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-cream)]">
              Destacado
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-1.5 p-4 md:p-5">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-gold-dark)]">
            {p.brand}
          </p>
          <h3 className="font-serif-display text-lg text-[var(--color-ink)] md:text-xl">
            {p.name}
          </h3>
          <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">
            {p.description}
          </p>
          <div className="mt-2 flex items-center justify-between gap-2">
            <span className="text-sm font-medium text-[var(--color-ink)]">
              {formatPrice(p.price)}
            </span>
            {inCart ? (
              <div className="flex items-center gap-2 rounded-full border border-[var(--color-ink)]/20">
                <button
                  aria-label="Quitar uno"
                  onClick={() => setQty(p.slug, inCart.qty - 1)}
                  className="flex h-7 w-7 items-center justify-center text-[var(--color-ink)]"
                >
                  −
                </button>
                <span className="w-4 text-center text-xs text-[var(--color-ink)]">{inCart.qty}</span>
                <button
                  aria-label="Agregar uno"
                  onClick={() => setQty(p.slug, inCart.qty + 1)}
                  className="flex h-7 w-7 items-center justify-center text-[var(--color-ink)]"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => add(p)}
                className="rounded-full border border-[var(--color-ink)]/20 px-3 py-1.5 text-xs text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]/50"
              >
                Agregar
              </button>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Catalog({
  products,
}: {
  products: (Product & { exists: boolean })[];
}) {
  const filters = ["Todos", "Destacados", ...brands];
  const [active, setActive] = useState("Todos");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = products.filter((p) => {
    if (active === "Todos") return true;
    if (active === "Destacados") return p.featured;
    return p.brand === active;
  });

  const shown = filtered.slice(0, visible);

  return (
    <section id="coleccion" className="bg-[var(--color-cream)] py-24 md:py-32">
      <div className="container-editorial">
        <Reveal className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Colección
          </p>
          <h2 className="mt-3 font-serif-display text-4xl text-[var(--color-ink)] sm:text-5xl">
            Nuestras fragancias
          </h2>
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
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {shown.map((p, i) => (
              <ProductCard key={p.slug} p={p} delay={Math.min(i * 0.03, 0.3)} />
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
