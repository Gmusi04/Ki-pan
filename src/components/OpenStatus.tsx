"use client";

import { useEffect, useState } from "react";
import { getOpenStatus } from "@/lib/hours";

export function OpenStatus() {
  const [label, setLabel] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => {
      const status = getOpenStatus();
      setLabel(status.label);
      setIsOpen(status.isOpen);
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (label === null) return null;

  return (
    <span className="inline-flex items-center gap-2 text-sm">
      <span
        className={`h-2 w-2 rounded-full ${isOpen ? "bg-[var(--color-sage)]" : "bg-[var(--color-terracotta)]"}`}
      />
      {label}
    </span>
  );
}
