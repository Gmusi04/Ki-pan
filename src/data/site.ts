// Datos de marca de Iconic Scents. Edita aquí nombre, redes, WhatsApp y textos
// generales — el resto del sitio los usa automáticamente sin tocar componentes.

export const site = {
  name: "Iconic Scents",
  tagline: "Perfumería árabe y de diseñador",
  category: "Perfumería · Fragancias árabes y de diseñador, 100% originales",
  description:
    "Iconic Scents es una perfumería con fragancias árabes y de diseñador 100% originales. Catálogo, pedidos y envíos por Instagram y WhatsApp.",
  location: "Mérida, Yucatán",
  trustBadge: "100% original",
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

export function whatsappCartHref(
  items: { name: string; brand: string; qty: number; price: number }[],
  total: number,
) {
  const lines = items.map(
    (i) => `- ${i.qty}x ${i.name} (${i.brand}) — ${formatMXN(i.price)} c/u`,
  );
  const text = [
    "Hola, quiero hacer este pedido:",
    "",
    ...lines,
    "",
    `Total: ${formatMXN(total)}`,
  ].join("\n");
  return `https://wa.me/529997664077?text=${encodeURIComponent(text)}`;
}

function formatMXN(n: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
}
