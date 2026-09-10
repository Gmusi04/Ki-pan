# Fotografía

## Catálogo árabe — listo ✅

Las 144 fragancias árabes (Rasasi, Armaf, Lattafa, Afnan, Al Haramain,
Bharara, Orientica, Maison, French Avenue, Dumont, Jo Milano, MP) ya tienen
su foto real en `public/images/products/<slug>.jpg`, recortada del PDF del
catálogo con fondo blanco que subiste (`CATA_LOGO_ARABE2.pdf`). Cada imagen
ya venía en fondo blanco limpio, así que solo se recortó y centró — sin
placeholders, sin recortes, sin artefactos.

No pude bajar fotos directo desde los links de Canva (ese dominio está
bloqueado en mi entorno por seguridad, sin relación con permisos), pero el
PDF exportado sí funcionó — de ahí saqué cada imagen automáticamente.

## Catálogo de diseñador — pendiente ⚠️

Las 192 fragancias de diseñador (Dior, YSL, Armani, Valentino, Versace,
Carolina Herrera, etc.) siguen con el placeholder de color por familia.

Intentamos varias veces pero el PDF del catálogo de diseñador nunca llegó
como archivo adjunto real a esta conversación (solo llegaron dos copias del
catálogo árabe). Para poder procesar las fotos de diseñador de la misma
forma, sube el PDF del catálogo de diseñador como **archivo adjunto** (el
clip 📎 del chat), igual que hiciste con el árabe — no como imagen pegada
ni como link de Canva, porque esos no los puedo leer.

## Fotos generales del sitio — pendientes

Estas todavía no existen; en cuanto subas un archivo con el nombre exacto,
el sitio lo usa automáticamente sin tocar código (`PhotoView` +
`photoExists`, ver `src/components/PhotoView.tsx`):

| Archivo | Sección | Qué debe mostrar | Orientación |
|---|---|---|---|
| `public/images/hero-perfume.jpg` | Portada + Open Graph / Twitter card | Tu mejor foto de producto | Horizontal o vertical, con espacio arriba para el texto |
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

Súbelas por GitHub (**github.com/Gmusi04/IconicScents** → carpeta
correspondiente → **Add file → Upload files**) con el nombre exacto, o
mándamelas y las subo yo.

## Catálogo (una foto por producto)

Cada perfume en `src/data/products.ts` tiene un campo `slug`. Su foto va en:

```
public/images/products/<slug>.jpg
```

Ejemplo: "Hawas For Him" → `public/images/products/rasasi-hawas-for-him.jpg`.
