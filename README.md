# Iconic Scents — sitio web

Sitio minimalista para Iconic Scents (perfumería, catálogo por Instagram y
WhatsApp). Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer
Motion.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de producción
npm run start   # sirve el build
npm run lint    # eslint
```

## Contenido a personalizar

- **Marca y contacto**: `src/data/site.ts` — nombre, tagline, Instagram,
  WhatsApp, correo (opcional) y nota de envíos.
- **Catálogo**: `src/data/products.ts` — 144 fragancias precargadas
  (Rasasi, Armaf, Lattafa, Afnan, Al Haramain, Bharara, Orientica, Maison,
  French Avenue, Dumont, Jo Milano y MP), con marca, nombre, familia
  olfativa, género, tamaño, precio y descripción. Los filtros son por marca
  ("Todos", "Destacados" y cada marca). Agrega o quita fragancias con esta
  misma forma — no hay límite de productos.
- **Fotografía**: ver **[PHOTOS.md](./PHOTOS.md)**. Mientras no exista un
  archivo en la ruta esperada dentro de `public/images/`, cada sección
  muestra un placeholder identificado con la etiqueta "Foto pendiente"; al
  agregar la imagen con el nombre indicado, reemplaza el placeholder
  automáticamente.

## Estructura de la página

Portada → Nosotros → Colección (catálogo filtrable) → Galería → Cómo comprar
→ Instagram → Contacto.
