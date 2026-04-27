# 🚀 Cómo arrancar el proyecto en tu Mac

Este archivo te guía paso a paso para tener el sitio corriendo localmente
con live reload (cambios visibles al instante en Chrome).

---

## Paso 1 — Descomprimir el proyecto

1. Descomprimí el archivo `cdp-astro.zip`
2. Movelo a una ubicación cómoda. Recomendado: `~/Documents/cesardelpino-web/`
   - Abrí Finder, andá a Documents
   - Arrastrá la carpeta `cdp-astro` ahí (o copiala)
   - Renómbrala a `cesardelpino-web` (opcional)

## Paso 2 — Abrir el proyecto en VS Code

1. Abrí **Visual Studio Code**
2. Menú: **File → Open Folder...**
3. Seleccioná la carpeta `cesardelpino-web` (o `cdp-astro`)
4. Click "Open"
5. Si VS Code te pregunta "Do you trust the authors?", click "Yes"

## Paso 3 — Instalar la extensión Astro (1 sola vez)

1. En VS Code, click en el ícono de Extensiones a la izquierda (cuatro cuadraditos)
2. Buscá **"Astro"**
3. Click "Install" en la extensión oficial de **Astro Build**

## Paso 4 — Abrir Terminal dentro de VS Code

1. Menú: **Terminal → New Terminal** (atajo: `Ctrl+ñ` o `Ctrl+\`` en algunos teclados)
2. Se abre una terminal en la parte de abajo de VS Code
3. La terminal ya está parada en la carpeta del proyecto (no tenés que hacer `cd`)

## Paso 5 — Instalar dependencias (1 sola vez, ~2 minutos)

En esa terminal, escribí:

```bash
npm install
```

Y dale Enter. Va a descargar todas las librerías que necesita Astro.
Espera ~1-2 minutos hasta que termine. Vas a ver mensajes scrollear.
Cuando termina, aparece de nuevo el cursor `$` listo para escribir.

## Paso 6 — Arrancar el servidor de desarrollo

```bash
npm run dev
```

Y dale Enter. Vas a ver algo como:

```
  astro  v5.x.x ready in 543 ms

  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose
```

## Paso 7 — Abrí el sitio en Chrome

1. Abrí Chrome
2. Andá a: `http://localhost:4321/`
3. ¡Vas a ver tu home v3 funcionando!

## ✨ Live reload — la magia

Mientras el servidor está corriendo (paso 6 sigue activo en terminal):

- Cualquier cambio que hagas en los archivos `.astro`, `.css`, etc.
- Al guardar el archivo (`Cmd+S`)
- **Chrome se refresca solo y ves el cambio al instante**

Para parar el servidor: Click en la terminal y `Ctrl+C`.
Para volver a arrancarlo: `npm run dev` otra vez.

---

## 📁 Estructura del proyecto

```
cesardelpino-web/
├── src/
│   ├── pages/
│   │   └── index.astro          ← El home (este archivo es la URL /)
│   ├── layouts/
│   │   └── BaseLayout.astro     ← Layout que envuelve cada página
│   ├── components/
│   │   ├── seo/                 ← Componentes SEO (BaseHead, Schema, Analytics)
│   │   └── layout/              ← Header y Footer
│   ├── content/
│   │   └── bitacora/            ← Posts del blog en Markdown
│   └── styles/
│       ├── tokens.css           ← Variables CSS (colores, fuentes)
│       └── global.css           ← Estilos globales
├── public/                       ← Imágenes, fonts, favicon
├── astro.config.mjs              ← Configuración de Astro
└── package.json                  ← Dependencias del proyecto
```

## 🎯 Próximos pasos cuando quieras

- Crear nuevas páginas: agregar archivo `.astro` en `src/pages/`
  - Ejemplo: `src/pages/sobre.astro` → URL `/sobre/`
- Crear posts del blog: agregar archivo `.md` en `src/content/bitacora/`
- Cambiar colores/tipografía: editar `src/styles/tokens.css`
- El menú/footer cambia para todas las páginas: editar `src/components/layout/`

---

**Si te trabás en algún paso, decímelo en el chat y te ayudo desde ahí.**
