"use client";

import { useState } from "react";
import type { GalleryImage } from "@/data/gallery";
import { PhotoView } from "@/components/PhotoView";
import { Reveal } from "./Reveal";

const spanClass: Record<string, string> = {
  tall: "aspect-square md:aspect-auto md:row-span-2",
  wide: "aspect-square md:aspect-auto md:col-span-2",
  square: "aspect-square md:aspect-auto",
};

export function Gallery({
  images,
}: {
  images: (GalleryImage & { exists: boolean })[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-[var(--color-cream)] py-24 md:py-32">
      <div className="container-editorial">
        <Reveal className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
            Galería
          </p>
          <h2 className="mt-3 font-serif-display text-4xl text-[var(--color-ink)] sm:text-5xl">
            El lugar, el pan y la mesa
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-flow-dense md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setOpenIndex(i)}
              className={`group relative overflow-hidden rounded-xl bg-[var(--color-crust)] ${spanClass[img.span]}`}
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <PhotoView
                  exists={img.exists}
                  src={img.src}
                  alt={img.alt}
                  kind={img.kind}
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-[var(--color-ink)]/0 transition-colors duration-300 group-hover:bg-[var(--color-ink)]/10" />
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-ink)]/95 p-4 md:p-10"
          onClick={() => setOpenIndex(null)}
        >
          <button
            aria-label="Cerrar"
            className="absolute right-5 top-5 text-3xl text-[var(--color-cream)]"
            onClick={() => setOpenIndex(null)}
          >
            &times;
          </button>
          <div className="relative h-full w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <PhotoView
              exists={images[openIndex].exists}
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              kind={images[openIndex].kind}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
