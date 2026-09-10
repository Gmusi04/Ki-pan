"use client";

import { useCart } from "@/lib/cart";

export function CartButton() {
  const { totalItems, openCart } = useCart();
  if (totalItems === 0) return null;

  return (
    <button
      onClick={openCart}
      aria-label="Ver carrito"
      className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-ink)] shadow-lg transition-transform hover:-translate-y-0.5 md:bottom-8 md:right-8"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h2l1.5 10.5a2 2 0 0 0 2 1.5h8a2 2 0 0 0 2-1.9L21 8H7" />
        <circle cx="10" cy="20" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="17" cy="20" r="1.3" fill="currentColor" stroke="none" />
      </svg>
      <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-ink)] px-1 text-[11px] font-medium text-[var(--color-cream)]">
        {totalItems}
      </span>
    </button>
  );
}
