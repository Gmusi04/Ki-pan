import { ConchasFeature } from "@/components/ConchasFeature";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Location } from "@/components/Location";
import { Menu } from "@/components/Menu";
import { MobileTabBar } from "@/components/MobileTabBar";
import type { PhotoKind } from "@/components/PhotoView";
import { Reviews } from "@/components/Reviews";
import { Social } from "@/components/Social";
import { gallery } from "@/data/gallery";
import { photoExists } from "@/lib/photoExists";

const socialFeed: { src: string; alt: string; kind: PhotoKind }[] = [
  { src: "/images/ig-1.jpg", alt: "Publicación de Instagram de Ki'Pan", kind: "concha" },
  { src: "/images/ig-2.jpg", alt: "Publicación de Instagram de Ki'Pan", kind: "bread" },
  { src: "/images/ig-3.jpg", alt: "Publicación de Instagram de Ki'Pan", kind: "coffee" },
  { src: "/images/ig-4.jpg", alt: "Publicación de Instagram de Ki'Pan", kind: "table" },
];

export default function Home() {
  const galleryWithExists = gallery.map((img) => ({
    ...img,
    exists: photoExists(img.src),
  }));
  const socialWithExists = socialFeed.map((img) => ({
    ...img,
    exists: photoExists(img.src),
  }));

  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Intro />
        <ConchasFeature />
        <Menu exists={photoExists("/images/menu-mesa.jpg")} />
        <Gallery images={galleryWithExists} />
        <Experience />
        <Social feed={socialWithExists} />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <MobileTabBar />
    </>
  );
}
