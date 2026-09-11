import { Catalog } from "@/components/Catalog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowToBuy } from "@/components/HowToBuy";
import { MobileTabBar } from "@/components/MobileTabBar";
import type { PhotoKind } from "@/components/PhotoView";
import { Social } from "@/components/Social";
import { products } from "@/data/products";
import { photoExists } from "@/lib/photoExists";

const socialFeed: { src: string; alt: string; kind: PhotoKind }[] = [
  { src: "/images/ig-1.jpg", alt: "Publicación de Instagram de Iconic Scents", kind: "bottle" },
  { src: "/images/ig-2.jpg", alt: "Publicación de Instagram de Iconic Scents", kind: "flatlay" },
  { src: "/images/ig-3.jpg", alt: "Publicación de Instagram de Iconic Scents", kind: "lifestyle" },
  { src: "/images/ig-4.jpg", alt: "Publicación de Instagram de Iconic Scents", kind: "detail" },
];

function findLogoSrc(): string | null {
  if (photoExists("/logo.svg")) return "/logo.svg";
  if (photoExists("/logo.png")) return "/logo.png";
  return null;
}

export default function Home() {
  const logoSrc = findLogoSrc();
  const productsWithExists = products.map((p) => ({
    ...p,
    exists: photoExists(`/images/products/${p.slug}.jpg`),
    photos: [
      { src: `/images/products/${p.slug}.jpg`, kind: "bottle" as PhotoKind },
      { src: `/images/products/${p.slug}-detail.jpg`, kind: "detail" as PhotoKind },
      { src: `/images/products/${p.slug}-spray.jpg`, kind: "spray" as PhotoKind },
    ].map((photo) => ({ ...photo, exists: photoExists(photo.src) })),
  }));
  const socialWithExists = socialFeed.map((img) => ({
    ...img,
    exists: photoExists(img.src),
  }));

  return (
    <>
      <Header logoSrc={logoSrc} />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Catalog products={productsWithExists} />
        <HowToBuy />
        <Social feed={socialWithExists} />
        <Contact />
      </main>
      <Footer logoSrc={logoSrc} />
      <MobileTabBar />
    </>
  );
}
