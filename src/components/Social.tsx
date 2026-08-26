"use client";

import { PhotoView, type PhotoKind } from "@/components/PhotoView";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function Social({
  feed,
}: {
  feed: { src: string; alt: string; kind: PhotoKind; exists: boolean }[];
}) {
  return (
    <section className="bg-[var(--color-parchment)] py-24 md:py-32">
      <div className="container-editorial">
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
              Síguenos
            </p>
            <h2 className="mt-3 font-serif-display text-3xl text-[var(--color-ink)] sm:text-4xl">
              {site.social.instagramHandle} en Instagram
            </h2>
          </div>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--color-ink)]/20 px-5 py-2.5 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]/50"
          >
            Ver perfil
          </a>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {feed.map((f) => (
            <a
              key={f.src}
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square overflow-hidden rounded-xl"
            >
              <PhotoView exists={f.exists} src={f.src} alt={f.alt} kind={f.kind} sizes="(min-width: 768px) 25vw, 50vw" />
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm text-[var(--color-ink-soft)]">
          <a href={site.social.instagram} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
            Instagram {site.social.instagramHandle}
          </a>
          <a href={site.social.tiktok} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
            TikTok {site.social.tiktokHandle}
          </a>
          <a href={site.social.facebook} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
            Facebook Ki&rsquo;Pan
          </a>
        </div>
      </div>
    </section>
  );
}
