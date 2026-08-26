// Categorías y productos confirmados a través de la descripción pública del negocio
// y cobertura de prensa (Yucatán Magazine, Casa Tuut). Ki'Pan hornea en función del
// día, por lo que no se listan precios ni platillos no verificados: el menú completo
// y actualizado vive en su Instagram/Facebook y en el mostrador.

export type MenuItem = {
  name: string;
  description: string;
  featured?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  kicker: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "pan-dulce",
    label: "Pan Dulce",
    kicker: "Horneado desde temprano, todos los días",
    items: [
      {
        name: "Conchas",
        description:
          "La razón por la que la gente llega desde toda Mérida: costra crujiente de azúcar y migajón suave por dentro.",
        featured: true,
      },
      {
        name: "Bollería del día",
        description:
          "Piezas de pan dulce mexicano rotando según temporada e ingrediente disponible.",
      },
    ],
  },
  {
    id: "masa-madre",
    label: "Masa Madre",
    kicker: "Fermentación larga, técnica europea",
    items: [
      {
        name: "NY Rustic Roll",
        description:
          "Su pieza insignia de masa madre: crujiente por fuera, suave y aireada por dentro.",
        featured: true,
      },
      {
        name: "Hogazas y piezas de temporada",
        description:
          "Pan de fermentación natural horneado en pequeños lotes cada día.",
      },
    ],
  },
  {
    id: "desayunos-brunch",
    label: "Desayunos & Brunch",
    kicker: "De martes a domingo, 8:00–18:00",
    items: [
      {
        name: "Chilaquiles",
        description:
          "Presentes en la carta como uno de los platillos fuertes de la casa para desayunar.",
        featured: true,
      },
      {
        name: "Sándwiches",
        description:
          "Preparados con el pan horneado en casa el mismo día.",
      },
    ],
  },
  {
    id: "cafe-bebidas",
    label: "Café & Bebidas",
    kicker: "Para acompañar cualquier hora del día",
    items: [
      {
        name: "Café",
        description: "Barra de café como parte central de la experiencia de mesa.",
      },
      {
        name: "Jugos cold press",
        description: "Prensados en frío, pensados para acompañar el desayuno.",
      },
    ],
  },
];

export const menuNote =
  "El menú rota según la producción del día. Para ver los platillos y precios vigentes, consulta el Instagram de Ki’Pan o pregunta en mostrador.";
