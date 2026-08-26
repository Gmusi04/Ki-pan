# Fotografía real pendiente

No pude descargar fotos reales de Ki'Pan para este build: el entorno en el que
se generó el sitio tiene bloqueado el acceso de red a Instagram, Facebook y a
los principales bancos de imágenes (Unsplash, Pexels), y aunque no lo hubiera
estado, usar fotos de Instagram/Facebook de terceros sin permiso explícito no
es correcto para un sitio de producción. Por eso cada foto del sitio es, por
ahora, un **placeholder identificado** (fondo con textura + icono + etiqueta
"Foto real pendiente") en vez de una imagen genérica de stock.

## Cómo activar una foto real

Cada componente ya apunta a una ruta exacta dentro de `public/images/`. En
cuanto exista un archivo con ese nombre, el sitio lo usa automáticamente (sin
tocar código, sin rebuild especial) — así está construido `PhotoView`
(`src/components/PhotoView.tsx` + `src/lib/photoExists.ts`).

Formato recomendado: `.jpg` o `.webp`, orientación según se indica, idealmente
≥ 2000px en el lado largo (Next/Image genera los tamaños responsivos).

| Archivo | Sección | Qué debe mostrar | Orientación |
|---|---|---|---|
| `public/images/hero-conchas.jpg` | Hero (portada) + Open Graph / Twitter card | La mejor foto de conchas recién horneadas de Ki'Pan | Horizontal, apaisada |
| `public/images/concha-hero.jpg` | Producto estrella "Las conchas" | Concha individual, plano cercano, buena luz | Vertical o cuadrada |
| `public/images/menu-mesa.jpg` | Menú (panel lateral) | Mesa servida con pan y café | Vertical 4:5 |
| `public/images/experiencia-mesa.jpg` | La experiencia | Mesa de brunch, gente disfrutando o mesa recién servida | Vertical 4:5 |
| `public/images/fachada-plaza.jpg` | Ubicación | Fachada de Ki'Pan en Plaza Vía Cinco | Vertical |
| `public/images/gallery-conchas.jpg` | Galería | Conchas | Vertical |
| `public/images/gallery-interior.jpg` | Galería | Interior del local | Horizontal ancha |
| `public/images/gallery-masa-madre.jpg` | Galería | Pan de masa madre / NY Rustic Roll | Cuadrada |
| `public/images/gallery-desayuno.jpg` | Galería | Mesa de desayuno | Cuadrada |
| `public/images/gallery-cafe.jpg` | Galería | Café | Vertical |
| `public/images/gallery-fachada.jpg` | Galería | Fachada / exterior | Horizontal ancha |
| `public/images/gallery-chilaquiles.jpg` | Galería | Chilaquiles | Cuadrada |
| `public/images/gallery-jugo.jpg` | Galería | Jugo cold press | Vertical |
| `public/images/gallery-panaderia.jpg` | Galería | Área de panadería / horneado | Cuadrada |
| `public/images/ig-1.jpg` … `ig-4.jpg` | Sección Instagram | 4 publicaciones reales recientes del feed de @kipanmid | Cuadrada |

## Dónde conseguirlas

- Export directo desde el Instagram (**@kipanmid**) o Facebook (**Ki'Pan**) del
  propio negocio — son sus fotos, así que no hay problema de derechos.
- O una sesión fotográfica rápida en el local (celular con buena luz natural
  ya es suficiente para arrancar).

No se generaron fotos con IA como reemplazo: para un negocio real, una foto
falsa de "sus" conchas es peor que un placeholder honesto.
