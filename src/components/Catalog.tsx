"use client";

import { useMemo, useState } from "react";
import { PhotoView, type PhotoKind } from "@/components/PhotoView";
import { ProductModal } from "@/components/ProductModal";
import { brands, familyTint, tiers, type Product, type Tier } from "@/data/products";
import { useCart } from "@/lib/cart";
import { Reveal } from "./Reveal";

const PAGE_SIZE = 12;
const ALL_BRANDS = "Todas las marcas";

type Photo = { src: string; kind: PhotoKind; exists: boolean };
type CatalogProduct = Product & { exists: boolean; photos: Photo[] };

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(price);
}

function ProductCard({
  p,
  delay,
  onOpen,
}: {
  p: CatalogProduct;
  delay: number;
  onOpen: () => void;
}) {
  const { items, add, setQty } = useCart();
  const inCart = items.find((i) => i.slug === p.slug);

  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-parchment)]">
        <button onClick={onOpen} className="relative aspect-square overflow-hidden text-left">
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
        </button>

        <div className="flex flex-1 flex-col gap-1.5 p-4 md:p-5">
          <button onClick={onOpen} className="flex flex-1 flex-col gap-1.5 text-left">
            <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-gold-dark)]">
              {p.brand}
            </p>
            <h3 className="font-serif-display text-lg text-[var(--color-ink)] md:text-xl">
              {p.name}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {p.description}
            </p>
          </button>
          <div className="mt-2 flex items-center justify-between gap-2">
            <span className="text-sm font-medium text-[var(--color-ink)]">
              {formatPrice(p.price)}
            </span>
            {inCart ? (
              <div className="flex items-center gap-2 rounded-full border border-[var(--color-ink)]/20">
                <button
                  aria-label="Quitar uno"
                  onClick={() => setQty(p.slug, inCart.qty - 1)}
                  className="flex h-8 w-8 items-center justify-center text-[var(--color-ink)] md:h-7 md:w-7"
                >
                  −
                </button>
                <span className="w-4 text-center text-xs text-[var(--color-ink)]">{inCart.qty}</span>
                <button
                  aria-label="Agregar uno"
                  onClick={() => setQty(p.slug, inCart.qty + 1)}
                  className="flex h-8 w-8 items-center justify-center text-[var(--color-ink)] md:h-7 md:w-7"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => add(p)}
                className="rounded-full border border-[var(--color-ink)]/20 px-3 py-2 text-xs text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]/50 md:py-1.5"
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

export function Catalog({ products }: { products: CatalogProduct[] }) {
  const [activeTier, setActiveTier] = useState<"Todos" | "Destacados" | Tier>("Todos");
  const [activeBrand, setActiveBrand] = useState(ALL_BRANDS);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<CatalogProduct | null>(null);

  const tierFilters: ("Todos" | "Destacados" | Tier)[] = ["Todos", "Destacados", ...tiers];

  const brandOptions = useMemo(() => {
    const pool =
      activeTier === "Todos" || activeTier === "Destacados"
        ? products
        : products.filter((p) => p.tier === activeTier);
    return [ALL_BRANDS, ...brands.filter((b) => pool.some((p) => p.brand === b))];
  }, [activeTier, products]);

  const filtered = products.filter((p) => {
    if (activeTier === "Destacados" && !p.featured) return false;
    if (activeTier !== "Todos" && activeTier !== "Destacados" && p.tier !== activeTier) return false;
    if (activeBrand !== ALL_BRANDS && p.brand !== activeBrand) return false;
    return true;
  });

  const shown = filtered.slice(0, visible);

  return (
    <section id="coleccion" className="bg-[var(--color-cream)] py-16 md:py-32">
      <div className="container-editorial">
        <Reveal className="mb-8 md:mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Colección
          </p>
          <h2 className="mt-3 font-serif-display text-3xl text-[var(--color-ink)] sm:text-4xl md:text-5xl">
            Nuestras fragancias
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mb-6 flex flex-wrap gap-2 md:gap-3">
          {tierFilters.map((t) => (
            <button
              key={t}
              onClick={() => {
                setActiveTier(t);
                setActiveBrand(ALL_BRANDS);
                setVisible(PAGE_SIZE);
              }}
              className={`rounded-full border px-3.5 py-2 text-sm transition-colors md:px-5 ${
                activeTier === t
                  ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-ink)]"
                  : "border-[var(--color-ink)]/15 text-[var(--color-ink)]/70 hover:border-[var(--color-ink)]/40"
              }`}
            >
              {t}
            </button>
          ))}
        </Reveal>

        <Reveal delay={0.08} className="mb-8 md:mb-10">
          <select
            value={activeBrand}
            onChange={(e) => {
              setActiveBrand(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            className="w-full max-w-xs rounded-full border border-[var(--color-ink)]/15 bg-[var(--color-cream)] px-4 py-2.5 text-sm text-[var(--color-ink)]"
          >
            {brandOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Reveal>

        {shown.length === 0 ? (
          <p className="text-sm text-[var(--color-ink-soft)]">
            Aún no hay fragancias en esta categoría.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-6 lg:grid-cols-4">
            {shown.map((p, i) => (
              <ProductCard key={p.slug} p={p} delay={Math.min(i * 0.03, 0.3)} onOpen={() => setSelected(p)} />
            ))}
          </div>
        )}

        {visible < filtered.length && (
          <div className="mt-8 flex justify-center md:mt-10">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="rounded-full border border-[var(--color-ink)]/20 px-6 py-3 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]/50"
            >
              Mostrar más
            </button>
          </div>
        )}
      </div>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
