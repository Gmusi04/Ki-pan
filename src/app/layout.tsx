import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import { site } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: "variable",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// TODO: reemplaza por tu dominio real cuando lo tengas.
const siteUrl = "https://iconicscents.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Iconic Scents | Fragancias con carácter",
    template: "%s | Iconic Scents",
  },
  description:
    "Iconic Scents: fragancias amaderadas, florales, cítricas y orientales para él, ella y unisex. Catálogo, pedidos y envíos por Instagram y WhatsApp.",
  keywords: [
    "perfumes",
    "fragancias",
    "perfumería",
    "perfumes de nicho",
    "Iconic Scents",
    "perfumes México",
    "comprar perfume por WhatsApp",
  ],
  openGraph: {
    title: "Iconic Scents | Fragancias con carácter",
    description:
      "Fragancias amaderadas, florales, cítricas y orientales para él, ella y unisex. Catálogo y pedidos por Instagram y WhatsApp.",
    url: siteUrl,
    siteName: "Iconic Scents",
    locale: "es_MX",
    type: "website",
    images: [{ url: "/images/hero-perfume.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iconic Scents | Fragancias con carácter",
    description:
      "Fragancias amaderadas, florales, cítricas y orientales para él, ella y unisex. Catálogo y pedidos por Instagram y WhatsApp.",
    images: ["/images/hero-perfume.jpg"],
  },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description: site.description,
  sameAs: [site.social.instagram],
  url: siteUrl,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[var(--color-cream)] text-[var(--color-ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
