"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#pan", label: "Pan" },
  { href: "#menu", label: "Menú" },
  { href: "#galeria", label: "Galería" },
  { href: "#nosotros", label: "Experiencia" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-cream)]/90 backdrop-blur-md shadow-[0_1px_0_var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="font-serif-display text-xl tracking-tight text-[var(--color-ink)] md:text-2xl"
        >
          Ki&rsquo;Pan
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm tracking-wide text-[var(--color-ink)]/80 transition-colors hover:text-[var(--color-ink)]"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-terracotta)] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--color-ink)]/20 px-4 py-2 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]/60"
          >
            Cómo llegar
          </a>
          <a
            href="#menu"
            className="rounded-full bg-[var(--color-terracotta)] px-4 py-2 text-sm font-medium text-[var(--color-cream)] transition-colors hover:bg-[var(--color-terracotta-dark)]"
          >
            Ver menú
          </a>
        </div>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-[var(--color-ink)] transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-[var(--color-ink)] transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--color-line)] bg-[var(--color-cream)] md:hidden">
          <div className="container-editorial flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-[var(--color-ink)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full border border-[var(--color-ink)]/20 px-4 py-3 text-center text-sm"
            >
              Cómo llegar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
