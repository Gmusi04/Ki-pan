"use client";

import { whatsappCartHref } from "@/data/site";
import { useCart } from "@/lib/cart";

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(price);
}

export function CartDrawer() {
  const { items, totalPrice, isOpen, closeCart, setQty, remove, clear } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex justify-end">
      <button
        aria-label="Cerrar carrito"
        onClick={closeCart}
        className="absolute inset-0 bg-[var(--color-ink)]/60"
      />
      <div className="relative flex h-full w-full max-w-sm flex-col bg-[var(--color-cream)] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-4">
          <h2 className="font-serif-display text-xl text-[var(--color-ink)]">Tu pedido</h2>
          <button
            aria-label="Cerrar"
            onClick={closeCart}
            className="text-2xl leading-none text-[var(--color-ink)]/60"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="text-sm text-[var(--color-ink-soft)]">Tu carrito está vacío.</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.slug} className="flex items-start justify-between gap-3 border-b border-[var(--color-line)] pb-4">
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--color-gold-dark)]">
                      {item.brand}
                    </p>
                    <p className="truncate font-serif-display text-base text-[var(--color-ink)]">{item.name}</p>
                    <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{formatPrice(item.price)}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <div className="flex items-center gap-2 rounded-full border border-[var(--color-ink)]/15">
                      <button
                        aria-label="Quitar uno"
                        onClick={() => setQty(item.slug, item.qty - 1)}
                        className="flex h-7 w-7 items-center justify-center text-[var(--color-ink)]"
                      >
                        −
                      </button>
                      <span className="w-4 text-center text-sm text-[var(--color-ink)]">{item.qty}</span>
                      <button
                        aria-label="Agregar uno"
                        onClick={() => setQty(item.slug, item.qty + 1)}
                        className="flex h-7 w-7 items-center justify-center text-[var(--color-ink)]"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => remove(item.slug)}
                      className="text-xs text-[var(--color-ink-soft)] underline-offset-2 hover:underline"
                    >
                      Quitar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[var(--color-line)] px-5 py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-[var(--color-ink-soft)]">Total</span>
              <span className="font-serif-display text-2xl text-[var(--color-ink)]">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <a
              href={whatsappCartHref(items, totalPrice)}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold-dark)]"
            >
              Pedir por WhatsApp
            </a>
            <button
              onClick={clear}
              className="mt-3 w-full text-center text-xs text-[var(--color-ink-soft)] underline-offset-2 hover:underline"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
