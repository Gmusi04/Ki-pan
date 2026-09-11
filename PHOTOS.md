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

## Catálogo de diseñador — listo ✅

Las 192 fragancias de diseñador (Jean Paul Gaultier, Giorgio Armani,
Valentino, Yves Saint Laurent, Ariana Grande, Moschino, Dolce & Gabbana,
Calvin Klein, Versace, Hugo Boss, Montblanc, Carolina Herrera, Dior, Katy
Perry, Nautica, Lancôme, Tommy Hilfiger, Azzaro, Cacharel, Halloween, Paco
Rabanne, Ralph Lauren, Perry Ellis, Coach, Paris Hilton) ya tienen su foto
real en `public/images/products/<slug>.jpg`, recortada del PDF
`CATA_LOGO_DISEN_ADOR.pdf` que subiste. Igual que el árabe, cada imagen ya
venía en fondo blanco limpio.

Nota: el catálogo de Valentino trae 10 fotos (5 líneas Uomo + 5 Donna) pero
el sitio solo tiene 6 productos Valentino, así que se usó la foto de cada
línea/género que corresponde a cada producto — las 4 fotos sobrantes no se
usaron. Todo lo demás mapea 1 a 1 sin sobras ni faltantes.

Las 336 fotos se recortaron de los PDFs renderizados a 600dpi (el doble de
la resolución inicial) para que se vean nítidas incluso en pantallas
grandes o al hacer zoom en el modal de producto.

## Logo — pendiente ⚠️

Todavía no tengo tu logo real. Intentamos varias veces pero solo llegan los
PDFs de los catálogos a esta conversación — ninguna imagen de logo llegó
como archivo adjunto real. Sube el logo con el clip 📎 de adjuntar archivo
(no lo pegues ni lo arrastres al cuadro de texto). En cuanto llegue como
`public/logo.svg` o `public/logo.png`, el sitio lo muestra automáticamente
en el header y el footer junto al nombre — sin tocar código.

## Portada y otras fotos del sitio

La portada ahora es blanca y minimalista, sin foto de fondo (a petición
tuya) — solo el nombre, el eslogan y los botones. La sección de Galería y
el texto de "Nosotros" se quitaron por completo.

Sigue pendiente la sección de Instagram (`public/images/ig-1.jpg` …
`ig-4.jpg`, publicaciones reales de @iconic._scents, cuadradas). Súbelas
por GitHub o mándamelas y las subo yo.

## Catálogo (una foto por producto)

Cada perfume en `src/data/products.ts` tiene un campo `slug`. Su foto va en:

```
public/images/products/<slug>.jpg
```

Ejemplo: "Hawas For Him" → `public/images/products/rasasi-hawas-for-him.jpg`.
