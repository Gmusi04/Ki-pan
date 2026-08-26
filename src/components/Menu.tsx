"use client";

import { useState } from "react";
import { menu, menuNote } from "@/data/menu";
import { PhotoView } from "@/components/PhotoView";
import { Reveal } from "./Reveal";

const src = "/images/menu-mesa.jpg";

export function Menu({ exists }: { exists: boolean }) {
  const [active, setActive] = useState(menu[0].id);
  const activeCategory = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="menu" className="bg-[var(--color-parchment)] py-24 md:py-32">
      <div className="container-editorial grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5 lg:col-span-4">
          <div className="md:sticky md:top-28">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
              Menú
            </p>
            <h2 className="mt-3 font-serif-display text-4xl text-[var(--color-ink)] sm:text-5xl">
              Lo que se hornea y se sirve cada día
            </h2>
            <div className="relative mt-8 hidden aspect-[4/5] overflow-hidden rounded-2xl md:block">
              <PhotoView exists={exists} src={src} alt="Mesa servida con pan y café en Ki'Pan" kind="table" />
            </div>
          </div>
        </Reveal>

        <div className="md:col-span-7 lg:col-span-8">
          <div className="mb-10 flex flex-wrap gap-2 md:gap-3">
            {menu.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors md:px-5 ${
                  active === c.id
                    ? "border-[var(--color-terracotta)] bg-[var(--color-terracotta)] text-[var(--color-cream)]"
                    : "border-[var(--color-ink)]/15 text-[var(--color-ink)]/70 hover:border-[var(--color-ink)]/40"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <p className="mb-6 text-sm italic text-[var(--color-ink-soft)]">{activeCategory.kicker}</p>

          <div className="grid gap-x-10">
            {activeCategory.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-1 border-b border-[var(--color-line)] py-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif-display text-2xl text-[var(--color-ink)] md:text-3xl">
                    {item.name}
                  </h3>
                  {item.featured && (
                    <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-[var(--color-terracotta)]">
                      Favorito
                    </span>
                  )}
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-[var(--color-ink-soft)] md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-[var(--color-ink-soft)]">{menuNote}</p>
        </div>
      </div>
    </section>
  );
}
