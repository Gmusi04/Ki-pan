"use client";

import { useState } from "react";
import { PhotoView, type PhotoKind } from "@/components/PhotoView";
import { familyProfile, familyTint, type Product } from "@/data/products";
import { whatsappOrderHref } from "@/data/site";
import { useCart } from "@/lib/cart";
import { useLockBodyScroll } from "@/lib/useLockBodyScroll";

type Photo = { src: string; kind: PhotoKind; exists: boolean };

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(price);
}

export function ProductModal({
  product,
  onClose,
}: {
  product: Product & { exists: boolean; photos: Photo[] };
  onClose: () => void;
}) {
  const { items, add, setQty } = useCart();
  const [active, setActive] = useState(0);
  useLockBodyScroll();
  const inCart = items.find((i) => i.slug === product.slug);
  const tint = familyTint[product.family];
  const photo = product.photos[active] ?? product.photos[0];

  return (
    <div className="fixed inset-0 z-[120] flex items-end justify-center md:items-center">
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-[var(--color-ink)]/70"
      />

      <div className="relative flex max-h-[92svh] w-full flex-col overflow-y-auto rounded-t-3xl bg-[var(--color-cream)] md:max-h-[88vh] md:max-w-3xl md:flex-row md:rounded-3xl">
        <button
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-ink)]/80 text-lg text-[var(--color-cream)]"
        >
          &times;
        </button>

        <div className="md:w-1/2">
          <div className="relative aspect-square md:aspect-auto md:h-full">
            <PhotoView
              exists={photo.exists}
              src={photo.src}
              alt={product.name}
              kind={photo.kind}
              tint={tint}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="flex gap-2 p-3 md:p-4">
            {product.photos.map((p, i) => (
              <button
                key={p.src}
                onClick={() => setActive(i)}
                className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 ${
                  i === active ? "border-[var(--color-gold)]" : "border-transparent"
                }`}
              >
                <PhotoView exists={p.exists} src={p.src} alt="" kind={p.kind} tint={tint} quiet sizes="56px" />
              </button>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col gap-4 p-5 md:w-1/2 md:overflow-y-auto md:p-8"
          style={{ paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--color-gold-dark)]">
              {product.brand}
            </p>
            <h2 className="mt-1 font-serif-display text-3xl text-[var(--color-ink)]">
              {product.name}
            </h2>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-[var(--color-ink-soft)]">
              <span className="rounded-full border border-[var(--color-ink)]/15 px-2.5 py-1">
                {product.family}
              </span>
              <span className="rounded-full border border-[var(--color-ink)]/15 px-2.5 py-1">
                {product.gender}
              </span>
              {product.size && (
                <span className="rounded-full border border-[var(--color-ink)]/15 px-2.5 py-1">
                  {product.size}
                </span>
              )}
            </div>
          </div>

          <p className="text-base leading-relaxed text-[var(--color-ink)]">{product.description}</p>
          <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
            {familyProfile[product.family]}
          </p>

          <div className="mt-auto flex flex-col gap-3 border-t border-[var(--color-line)] pt-4">
            <div className="flex items-center justify-between">
              <span className="font-serif-display text-2xl text-[var(--color-ink)]">
                {formatPrice(product.price)}
              </span>
              {inCart ? (
                <div className="flex items-center gap-3 rounded-full border border-[var(--color-ink)]/20 px-1">
                  <button
                    aria-label="Quitar uno"
                    onClick={() => setQty(product.slug, inCart.qty - 1)}
                    className="flex h-8 w-8 items-center justify-center text-[var(--color-ink)]"
                  >
                    −
                  </button>
                  <span className="w-4 text-center text-sm text-[var(--color-ink)]">{inCart.qty}</span>
                  <button
                    aria-label="Agregar uno"
                    onClick={() => setQty(product.slug, inCart.qty + 1)}
                    className="flex h-8 w-8 items-center justify-center text-[var(--color-ink)]"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => add(product)}
                  className="rounded-full bg-[var(--color-gold)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold-dark)]"
                >
                  Agregar al carrito
                </button>
              )}
            </div>
            <a
              href={whatsappOrderHref(product.name)}
              target="_blank"
              rel="noreferrer"
              className="text-center text-sm text-[var(--color-ink-soft)] underline-offset-2 hover:underline"
            >
              Preguntar por esta fragancia en WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
