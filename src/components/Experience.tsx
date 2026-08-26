import { PhotoView } from "@/components/PhotoView";
import { photoExists } from "@/lib/photoExists";
import { Reveal } from "./Reveal";

export function Experience() {
  const src = "/images/experiencia-mesa.jpg";
  return (
    <section id="nosotros" className="bg-[var(--color-cream)] py-24 md:py-32">
      <div className="container-editorial grid gap-8 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <PhotoView
              exists={photoExists(src)}
              src={src}
              alt="Mesa de brunch en Ki'Pan, Temozón Norte"
              kind="table"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
            La experiencia
          </p>
          <h2 className="mt-3 font-serif-display text-3xl text-[var(--color-ink)] sm:text-4xl md:text-5xl">
            No es solo pan. Es la mañana entera.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--color-ink-soft)] md:text-lg">
            Pan recién salido del horno, café en mano y una mesa donde el
            desayuno se estira hasta el brunch. Ki&rsquo;Pan está pensado para
            quedarse: para pedir una concha más, otro café, y ver pasar la
            mañana en Temozón Norte.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[var(--color-line)] pt-8">
            <div>
              <p className="font-serif-display text-3xl text-[var(--color-terracotta)]">
                4.7★
              </p>
              <p className="mt-1 text-sm text-[var(--color-ink-soft)]">75+ reseñas en Google</p>
            </div>
            <div>
              <p className="font-serif-display text-3xl text-[var(--color-terracotta)]">
                Diario
              </p>
              <p className="mt-1 text-sm text-[var(--color-ink-soft)]">Horneado desde temprano</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
