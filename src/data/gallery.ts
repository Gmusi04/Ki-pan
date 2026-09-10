import type { PhotoKind } from "@/components/PhotoView";

export type GalleryImage = {
  src: string;
  alt: string;
  kind: PhotoKind;
  span: "tall" | "wide" | "square";
};

export const gallery: GalleryImage[] = [
  { src: "/images/gallery-bottle-1.jpg", alt: "Frasco de fragancia Iconic Scents", kind: "bottle", span: "tall" },
  { src: "/images/gallery-flatlay.jpg", alt: "Composición de frascos en flat lay", kind: "flatlay", span: "wide" },
  { src: "/images/gallery-detail-1.jpg", alt: "Detalle de tapa y etiqueta", kind: "detail", span: "square" },
  { src: "/images/gallery-packaging.jpg", alt: "Empaque de Iconic Scents", kind: "packaging", span: "square" },
  { src: "/images/gallery-lifestyle-1.jpg", alt: "Fragancia en un momento del día a día", kind: "lifestyle", span: "tall" },
  { src: "/images/gallery-spray.jpg", alt: "Aplicación de la fragancia", kind: "spray", span: "wide" },
  { src: "/images/gallery-bottle-2.jpg", alt: "Frasco de fragancia, plano cercano", kind: "bottle", span: "square" },
  { src: "/images/gallery-lifestyle-2.jpg", alt: "Estilo de vida con Iconic Scents", kind: "lifestyle", span: "square" },
  { src: "/images/gallery-detail-2.jpg", alt: "Detalle del frasco y su textura", kind: "detail", span: "square" },
];
