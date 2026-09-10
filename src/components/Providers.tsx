"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/lib/cart";
import { CartButton } from "./CartButton";
import { CartDrawer } from "./CartDrawer";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartButton />
      <CartDrawer />
    </CartProvider>
  );
}
