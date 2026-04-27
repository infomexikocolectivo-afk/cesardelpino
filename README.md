# César Del Pino — Web

Sitio web profesional de César Del Pino — Sonic Anthropologist.
Sound Artist & Composer.

## Stack
- Astro 5 (HTML estático multipágina)
- Sistema visual: papel crema + Fraunces + JetBrains Mono
- Multiidioma: ES (default) + EN
- SEO: sitemap.xml + RSS + Open Graph + schema.org

## Cómo arrancar (desarrollo local)

```bash
npm install   # solo la primera vez
npm run dev   # inicia servidor en http://localhost:4321
```

## Cómo construir para producción

```bash
npm run build     # genera carpeta dist/
npm run preview   # vista previa del build
```

## Estructura

- `src/pages/` — cada archivo .astro = una URL del sitio
- `src/content/bitacora/` — posts del blog en Markdown
- `src/components/` — componentes reusables (Header, Footer, etc.)
- `src/layouts/` — layouts compartidos (BaseLayout)
- `src/styles/tokens.css` — variables CSS globales (colores, fuentes)
- `public/` — assets estáticos (imágenes, fonts, favicon)
