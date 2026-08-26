# Ki'Pan — sitio web

Sitio de producción para Ki'Pan (panadería artesanal, desayunos y brunch en
Temozón Norte, Mérida). Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
+ Framer Motion.

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

## Fotografía real

El diseño está construido para recibir la fotografía real de Ki'Pan. Mientras
no exista un archivo en la ruta esperada, cada sección muestra un placeholder
identificado con la etiqueta "Foto real pendiente". Ver **[PHOTOS.md](./PHOTOS.md)**
para la lista exacta de archivos que hay que colocar en `public/images/` — al
agregarlos con el nombre indicado, la foto real reemplaza el placeholder
automáticamente, sin tocar código.

## Contenido

Los datos del negocio (dirección, teléfono, horarios, redes, menú) viven en
`src/data/site.ts` y `src/data/menu.ts`. Están basados en investigación
pública verificada — no se inventó ningún dato. Si algo cambia (horario,
teléfono, redes), se actualiza ahí.
