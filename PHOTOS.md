# Fotografía pendiente

No descargué fotos de Google ni de ningún banco de imágenes: la enorme
mayoría de esas fotos tienen dueño (la marca, una tienda, un fotógrafo) y
usarlas en un sitio que vende algo es una infracción de derechos de autor
real, no solo un tecnicismo — puede terminar en un reclamo de Instagram/Meta
o de la marca. Tampoco se generó ninguna foto con IA como reemplazo.

En su lugar, cada perfume del catálogo tiene un color distinto según su
familia olfativa (amaderado, floral, cítrico, oriental, dulce, acuático,
especiado...) en vez de un solo placeholder gris repetido 336 veces — se ve
intencional y ordenado mientras subes las fotos reales.

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

## Por qué no puse las fotos de los catálogos de Canva

Ya con el permiso de Framora esto ya no es tema de derechos — el problema es
técnico: el entorno donde trabajo no puede descargar archivos directamente
desde canva.com (ni de la mayoría de sitios externos; está bloqueado por
seguridad). Puedo **ver** las imágenes de tus catálogos cuando las abro, pero
no puedo guardarlas como archivo para subirlas al sitio. Probé varias rutas
(exportar la página, descargar la miniatura) y todas quedan bloqueadas por
igual.

### La solución (2 minutos por foto, sin que yo tenga que tocar código)

1. En Canva, exporta/descarga cada foto de producto (o la página completa)
   como JPG o PNG.
2. Entra a **github.com/Gmusi04/IconicScents**, abre la carpeta
   `public/images/products/`, y usa **Add file → Upload files** para subir
   la foto con el nombre exacto del `slug` del producto (están todos en
   `src/data/products.ts`, o pídemelo y te paso la lista completa).
3. En cuanto subas el archivo con el nombre correcto, aparece solo en el
   sitio — no hace falta que me avises ni que yo haga nada más.

Lo mismo aplica para las fotos de portada/galería de la tabla de arriba.

## Sobre el logo

Tu logo (el monograma "IS") ya está integrado en el encabezado, el pie de
página y el ícono de la pestaña del navegador — lo recreé como un ícono
vectorial a partir de la imagen que enviaste, así que se ve nítido a
cualquier tamaño. Si tienes el archivo original (SVG, PNG o AI) y quieres una
reproducción exacta en vez de mi versión, puedes subirlo a
`public/logo.svg` (o `.png`) por el mismo método de arriba y lo conecto.

## Dónde conseguir fotos limpias (si no usas las de Canva)

- El sitio oficial de cada marca (Dior, YSL, Rasasi, Armaf, Lattafa, etc.)
  suele tener fotos de producto en alta resolución para reventa.
- Tus propias fotos: fondo neutro, luz natural, celular con buena cámara.
- Exporta directo desde tu Instagram si ya publicaste ahí tus propias fotos.
