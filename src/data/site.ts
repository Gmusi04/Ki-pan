// Información verificada mediante investigación pública (Google, Facebook, Instagram,
// prensa local de Yucatán) más los datos base proporcionados. No se inventa ningún
// dato: horarios, teléfono, dirección y menú reflejan solo lo confirmado.
// Fuentes: facebook.com/kipanmid · instagram.com/kipanmid · yucatanmagazine.com

export const site = {
  name: "Ki’Pan",
  tagline: "Brunch & Pan Artesanal",
  category: "Panadería artesanal · Desayunos · Brunch · Café",
  description:
    "Panadería artesanal, desayunos y brunch en Mérida, hogar de las mejores conchas de México. Horneamos pan de masa madre y delicioso pan dulce todos los días, acompañado de una excelente cocina. Disfruta chilaquiles, sándwiches, jugos cold press y café.",
  phoneDisplay: "999 618 9266",
  phoneHref: "tel:+529996189266",
  address: {
    line1: "Plaza Vía Cinco",
    line2: "Carretera Mérida–Progreso, Temozón Norte",
    line3: "97302 Mérida, Yucatán, México",
    full: "Plaza Vía Cinco, Temozón Norte, 97302 Mérida, Yucatán, México",
  },
  mapsQuery: "Ki'Pan Plaza Vía Cinco Temozón Norte Mérida Yucatán",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Ki'Pan Plaza Vía Cinco Temozón Norte Mérida Yucatán"),
  rating: 4.7,
  reviewCount: 75,
  priceRange: "$200–300 MXN por persona",
  priceSymbol: "$$",
  social: {
    instagram: "https://www.instagram.com/kipanmid/",
    instagramHandle: "@kipanmid",
    tiktok: "https://www.tiktok.com/@kipanmid",
    tiktokHandle: "@kipanmid",
    facebook: "https://www.facebook.com/kipanmid/",
  },
  // Horarios confirmados por múltiples fuentes independientes: martes a domingo,
  // cerrado los lunes. Se recomienda al negocio mantenerlos sincronizados con Google.
  hours: [
    { day: "Lunes", open: null, close: null },
    { day: "Martes", open: "08:00", close: "18:00" },
    { day: "Miércoles", open: "08:00", close: "18:00" },
    { day: "Jueves", open: "08:00", close: "18:00" },
    { day: "Viernes", open: "08:00", close: "18:00" },
    { day: "Sábado", open: "08:00", close: "18:00" },
    { day: "Domingo", open: "08:00", close: "18:00" },
  ],
  timeZone: "America/Merida",
} as const;

export type DayHours = (typeof site.hours)[number];
