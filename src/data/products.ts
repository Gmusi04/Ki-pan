// Catálogo de fragancias de Iconic Scents.
//
// Los que aparecen abajo son EJEMPLOS de muestra para que el sitio se vea
// completo mientras armas tu catálogo real — reemplázalos o agrega los tuyos
// con esta misma forma. El grid, los filtros y el botón de WhatsApp funcionan
// solos: no hay límite de cuántos perfumes puedes poner aquí.
//
// Foto real: pon un archivo en `public/images/products/<slug>.jpg` (mismo
// nombre que el campo `slug`) y el sitio la usa automáticamente en vez del
// placeholder — sin tocar código.

export type Family =
  | "Amaderado"
  | "Floral"
  | "Cítrico"
  | "Oriental"
  | "Dulce"
  | "Acuático";

export type Gender = "Ella" | "Él" | "Unisex";

export type Product = {
  slug: string;
  name: string;
  family: Family;
  gender: Gender;
  size?: string;
  // Deja `price: null` para mostrar "Precio por WhatsApp" en vez de un monto.
  price: number | null;
  description: string;
  featured?: boolean;
};

export const families: Family[] = [
  "Amaderado",
  "Floral",
  "Cítrico",
  "Oriental",
  "Dulce",
  "Acuático",
];

export const products: Product[] = [
  {
    slug: "noir-absolu",
    name: "Noir Absolu",
    family: "Amaderado",
    gender: "Él",
    size: "100ml",
    price: 450,
    description: "Oud, cedro y un fondo ahumado. Intenso, para la noche.",
    featured: true,
  },
  {
    slug: "velvet-oud",
    name: "Velvet Oud",
    family: "Oriental",
    gender: "Unisex",
    size: "100ml",
    price: 480,
    description: "Ámbar, vainilla y especias cálidas. Envolvente y duradero.",
    featured: true,
  },
  {
    slug: "rosa-blanca",
    name: "Rosa Blanca",
    family: "Floral",
    gender: "Ella",
    size: "90ml",
    price: 420,
    description: "Rosa fresca, peonía y un toque de musgo blanco.",
    featured: true,
  },
  {
    slug: "citrus-verde",
    name: "Citrus Verde",
    family: "Cítrico",
    gender: "Unisex",
    size: "100ml",
    price: 380,
    description: "Bergamota, limón y hojas verdes. Ligero para el día.",
  },
  {
    slug: "ambar-dorado",
    name: "Ámbar Dorado",
    family: "Oriental",
    gender: "Ella",
    size: "90ml",
    price: 460,
    description: "Ámbar, canela y un fondo dulce de vainilla.",
  },
  {
    slug: "brisa-marina",
    name: "Brisa Marina",
    family: "Acuático",
    gender: "Él",
    size: "100ml",
    price: 400,
    description: "Notas marinas y cítricas, fresco y ligero.",
  },
  {
    slug: "jardin-nocturno",
    name: "Jardín Nocturno",
    family: "Floral",
    gender: "Ella",
    size: "90ml",
    price: null,
    description: "Jazmín y flor de azahar sobre una base amaderada suave.",
  },
  {
    slug: "cedro-y-sal",
    name: "Cedro y Sal",
    family: "Amaderado",
    gender: "Unisex",
    size: "100ml",
    price: null,
    description: "Cedro, vetiver y un toque salino. Discreto y elegante.",
  },
  {
    slug: "azucar-morena",
    name: "Azúcar Morena",
    family: "Dulce",
    gender: "Ella",
    size: "90ml",
    price: 410,
    description: "Caramelo, praliné y vainilla. Cálido y goloso.",
  },
];
