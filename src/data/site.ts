// Datos de marca de Iconic Scents. Edita aquí nombre, redes, WhatsApp y textos
// generales — el resto del sitio los usa automáticamente sin tocar componentes.

export const site = {
  name: "Iconic Scents",
  tagline: "Fragancias con carácter",
  category: "Perfumería · Fragancias para él, ella y unisex",
  description:
    "Iconic Scents es una firma de fragancias que selecciona y comparte perfumes con personalidad: aromas amaderados, florales, cítricos y orientales para quienes quieren dejar huella. Catálogo, pedidos y envíos por Instagram y WhatsApp.",
  social: {
    instagramHandle: "@iconic._scents",
    instagram: "https://www.instagram.com/iconic._scents/",
  },
  whatsapp: {
    display: "999 766 4077",
    // Si el enlace no abre el chat correctamente, prueba anteponiendo un "1"
    // tras el 52 (formato antiguo de WhatsApp para móviles en México).
    href: "https://wa.me/529997664077",
  },
  // Deja null si por ahora no manejas correo de contacto.
  email: null as string | null,
  delivery:
    "Envíos a todo México y entrega o recolección coordinada por WhatsApp.",
} as const;

export function whatsappOrderHref(productName?: string) {
  const text = productName
    ? `Hola, me interesa ${productName}. ¿Me das más información?`
    : "Hola, quiero más información sobre sus fragancias.";
  return `https://wa.me/529997664077?text=${encodeURIComponent(text)}`;
}
