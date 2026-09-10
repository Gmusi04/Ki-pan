"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#coleccion", label: "Colección" },
  { href: "#galeria", label: "Galería" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Header({ logoSrc }: { logoSrc: string | null }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fg = scrolled || open ? "text-[var(--color-ink)]" : "text-[var(--color-cream)]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[var(--color-cream)]/90 backdrop-blur-md shadow-[0_1px_0_var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <div className={`container-editorial flex h-16 items-center justify-between md:h-20 ${fg}`}>
        <a href="#top" className="flex items-center gap-2">
          {logoSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoSrc} alt="Iconic Scents" className="h-8 w-auto rounded-md bg-[var(--color-cream)] p-1 md:h-9" />
          )}
          <span className="font-serif-display text-lg uppercase tracking-[0.2em] md:text-xl">
            Iconic Scents
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm tracking-wide opacity-90 transition-opacity hover:opacity-100"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-gold)] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-current/30 px-4 py-2 text-sm transition-colors hover:border-current/60"
          >
            Instagram
          </a>
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--color-gold)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold-dark)]"
          >
            WhatsApp
          </a>
        </div>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-current transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--color-line)] bg-[var(--color-cream)] text-[var(--color-ink)] md:hidden">
          <div className="container-editorial flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-[var(--color-gold)] px-4 py-3 text-center text-sm font-medium text-[var(--color-ink)]"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
