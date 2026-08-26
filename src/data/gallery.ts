import type { PhotoKind } from "@/components/PhotoView";

export type GalleryImage = {
  src: string;
  alt: string;
  kind: PhotoKind;
  span: "tall" | "wide" | "square";
};

export const gallery: GalleryImage[] = [
  { src: "/images/gallery-conchas.jpg", alt: "Conchas recién horneadas de Ki'Pan", kind: "concha", span: "tall" },
  { src: "/images/gallery-interior.jpg", alt: "Interior de Ki'Pan en Temozón Norte", kind: "interior", span: "wide" },
  { src: "/images/gallery-masa-madre.jpg", alt: "Pan de masa madre horneado del día", kind: "bread", span: "square" },
  { src: "/images/gallery-desayuno.jpg", alt: "Mesa de desayuno en Ki'Pan", kind: "table", span: "square" },
  { src: "/images/gallery-cafe.jpg", alt: "Café de Ki'Pan", kind: "coffee", span: "tall" },
  { src: "/images/gallery-fachada.jpg", alt: "Fachada de Ki'Pan en Plaza Vía Cinco", kind: "storefront", span: "wide" },
  { src: "/images/gallery-chilaquiles.jpg", alt: "Chilaquiles de Ki'Pan", kind: "table", span: "square" },
  { src: "/images/gallery-jugo.jpg", alt: "Jugo cold press de Ki'Pan", kind: "juice", span: "tall" },
  { src: "/images/gallery-panaderia.jpg", alt: "Área de panadería y horneado", kind: "wheat", span: "square" },
];
