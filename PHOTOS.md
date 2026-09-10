# Fotografía pendiente

No se generó ninguna foto con IA ni de stock: para una marca real, una foto
falsa "de tus perfumes" es peor que un placeholder honesto. Por eso cada foto
del sitio es, por ahora, un **placeholder identificado** (fondo oscuro +
icono + etiqueta "Foto pendiente") en vez de una imagen genérica.

## Cómo activar una foto real

Cada componente ya apunta a una ruta exacta dentro de `public/images/`. En
cuanto exista un archivo con ese nombre, el sitio lo usa automáticamente (sin
tocar código, sin rebuild especial) — así está construido `PhotoView`
(`src/components/PhotoView.tsx` + `src/lib/photoExists.ts`).

Formato recomendado: `.jpg` o `.webp`, cuadrada o vertical según se indica,
idealmente ≥ 2000px en el lado largo (Next/Image genera los tamaños
responsivos).

### Secciones fijas

| Archivo | Sección | Qué debe mostrar | Orientación |
|---|---|---|---|
| `public/images/hero-perfume.jpg` | Portada + Open Graph / Twitter card | Tu mejor foto de producto (frasco destacado) | Horizontal o vertical, con espacio arriba para el texto |
| `public/images/gallery-bottle-1.jpg` | Galería | Frasco, plano completo | Vertical |
| `public/images/gallery-flatlay.jpg` | Galería | Varios frascos en composición cenital | Horizontal ancha |
| `public/images/gallery-detail-1.jpg` | Galería | Detalle de tapa/etiqueta | Cuadrada |
| `public/images/gallery-packaging.jpg` | Galería | Caja o empaque | Cuadrada |
| `public/images/gallery-lifestyle-1.jpg` | Galería | Fragancia en uso / contexto | Vertical |
| `public/images/gallery-spray.jpg` | Galería | Aplicación (spray, gesto) | Horizontal ancha |
| `public/images/gallery-bottle-2.jpg` | Galería | Frasco, plano cercano | Cuadrada |
| `public/images/gallery-lifestyle-2.jpg` | Galería | Estilo de vida | Cuadrada |
| `public/images/gallery-detail-2.jpg` | Galería | Detalle / textura | Cuadrada |
| `public/images/ig-1.jpg` … `ig-4.jpg` | Sección Instagram | 4 publicaciones reales recientes de @iconic._scents | Cuadrada |

### Catálogo (una foto por producto)

Cada perfume en `src/data/products.ts` tiene un campo `slug` (por ejemplo
`noir-absolu`). Pon la foto de ese producto en:

```
public/images/products/<slug>.jpg
```

Ejemplo: la foto de "Hawas For Him" va en
`public/images/products/rasasi-hawas-for-him.jpg` (el slug exacto de cada
perfume está en `src/data/products.ts`).
Así puedes ir agregando fotos producto por producto sin tocar código — el
catálogo entero funciona con placeholders hasta que subas cada imagen.

## Por qué no usé las fotos del catálogo de tu proveedor

El catálogo de Canva que compartiste trae fotos de producto de cada frasco,
pero están marcadas con el nombre y logo de **framora.com.mx** (tu
proveedor/mayorista). No las usé en el sitio por dos razones:

1. Son material de marketing de Framora, no tuyo — no es tu marca la que
   debería aparecer en tu propio sitio.
2. Legalmente son más seguras las fotos oficiales de cada marca (Rasasi,
   Armaf, Lattafa, etc.) o fotos propias, que una captura de catálogo ajeno.

## Dónde conseguir fotos limpias

- El sitio oficial de cada marca (Rasasi, Armaf, Lattafa, Afnan, Bharara,
  Orientica, etc.) suele tener fotos de producto en alta resolución de uso
  libre para reventa.
- Pídele a tu proveedor fotos "limpias" (sin su logo) para reventa — es una
  petición común y casi siempre la tienen.
- Tus propias fotos: fondo neutro, luz natural, celular con buena cámara.
- Exporta directo desde tu Instagram (**@iconic._scents**) si ya publicaste
  ahí tus propias fotos de producto.
