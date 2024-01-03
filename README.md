# Proyecto creado con Astro

```sh
npm create astro@latest
```
> [Abrir repositorio](https://github.com/LEHR23/unsonu-landing)

## 🚀 Estructura de proyecto

El proyecto contiene la siguiente estructura de carpetas

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Comandos

Los siguientes comandos se pueden ejecutar en la carpeta raíz:

| Command                   | Action                                             |
| :------------------------ | :--------------------------------------------------|
| `npm install`             | Instala las dependencias                           |
| `npm run dev`             | Inicia un servidor local `localhost:4321`          |
| `npm run build`           | Construye el proyecto en la carpeta `./dist/`      |
| `npm run astro ...`       | Corre comandos de astro `astro add`, `astro check` |
| `npm run astro -- --help` | Muestra los comandos disponibles                   |

