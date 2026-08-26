import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
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

const siteUrl = "https://kipan.mx";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ki’Pan | Panadería artesanal, desayunos y brunch en Mérida",
    template: "%s | Ki’Pan",
  },
  description:
    "Ki’Pan: panadería artesanal en Temozón Norte, Mérida. Hogar de las mejores conchas de México, pan de masa madre horneado a diario, desayunos, brunch, chilaquiles y café.",
  keywords: [
    "panadería en Mérida",
    "panadería Temozón",
    "desayunos en Temozón",
    "brunch Mérida",
    "conchas Mérida",
    "café Temozón",
    "desayunos Temozón Norte",
    "pan de masa madre Mérida",
  ],
  openGraph: {
    title: "Ki’Pan | Panadería artesanal, desayunos y brunch en Mérida",
    description:
      "Hogar de las mejores conchas de México. Pan de masa madre, desayunos, brunch y café en Temozón Norte, Mérida.",
    url: siteUrl,
    siteName: "Ki’Pan",
    locale: "es_MX",
    type: "website",
    images: [{ url: "/images/hero-conchas.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ki’Pan | Panadería artesanal, desayunos y brunch en Mérida",
    description:
      "Hogar de las mejores conchas de México. Pan de masa madre, desayunos, brunch y café en Temozón Norte, Mérida.",
    images: ["/images/hero-conchas.jpg"],
  },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: site.name,
  description: site.description,
  telephone: site.phoneDisplay,
  priceRange: site.priceSymbol,
  servesCuisine: ["Panadería", "Desayuno", "Brunch", "Café"],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: "Mérida",
    addressRegion: "Yucatán",
    postalCode: "97302",
    addressCountry: "MX",
  },
  openingHoursSpecification: site.hours
    .filter((h) => h.open && h.close)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${
        {
          Lunes: "Monday",
          Martes: "Tuesday",
          Miércoles: "Wednesday",
          Jueves: "Thursday",
          Viernes: "Friday",
          Sábado: "Saturday",
          Domingo: "Sunday",
        }[h.day]
      }`,
      opens: h.open,
      closes: h.close,
    })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    reviewCount: site.reviewCount,
  },
  sameAs: [site.social.instagram, site.social.facebook, site.social.tiktok],
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
        {children}
      </body>
    </html>
  );
}
