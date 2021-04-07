# Vitessedge

<p align="center">
  <img width="500" src="./logo.png" alt="Vitessedge">
</p>

<p align="center">
Deploy your fullstack SSR apps to Cloudflare Workers using <a href="https://github.com/frandiox/vitedge">Vitedge</a>.
</p>

<p align='center'>
<a href="https://vitessedge.zable.workers.dev/">Live Demo</a>
</p>

> Vue + Vite + SSR template based on [@antfu](https://github.com/antfu)'s [Vitesse](https://github.com/antfu/vitesse)

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- ⚔️ Edge-side rendering in Cloudflare Workers via [Vitedge](https://github.com/frandiox/vitedge), with edge cache and HTTP/2 server push

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 📑 [Layout system](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [Windi CSS](https://github.com/windicss/windicss) - on-demand Tailwind CSS with speed

- 😃 [Use icons from any icon sets, with no compromise](./src/components)

- 🌍 [I18n ready](./src/i18n/translations) with different routes for each language.

- 🗒 [Markdown Support](https://github.com/antfu/vite-plugin-md)

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- 🦾 TypeScript, of course

- ☁️ Deploy on Cloudflare Workers, minimal [setup](./worker-site/index.js)

<br>

## Pre-packed

### UI Frameworks

- [Windi CSS](https://github.com/windicss/windicss) (On-demand [TailwindCSS](https://tailwindcss.com/)) - lighter and faster, with a bundle additional features!
  - [Windi CSS Typography](https://windicss.netlify.app/guide/plugins.html#typography) - similar to [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typograph) but for Windi CSS

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons) - icons as Vue components

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components) - components auto import
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [`vite-plugin-windicss`](https://github.com/antfu/vite-plugin-windicss) - WindiCSS support
- [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md) - Markdown as components / components in Markdown
  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) for syntax highlighting
  - [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) - customizable Prism.js theme using CSS variables
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n) - Vite plugin for Vue I18n
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively

### Coding Style

- Use Composition API with [`<script setup>` SFC](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config-vue](https://github.com/antfu/eslint-config), single quotes, no semi.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Vitedge](https://github.com/frandiox/vitedge) - Edge-side rendering
- [Wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update) - deploy to Cloudflare Workers
- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Variations

As this template is strongly opinionated, the following provides a curated list for community maintained variations with different preferences and feature sets. Check them out as well. PR to add yours are also welcome!

- [vitesse-lite](https://github.com/kn0wn/vitesse-lite) by [@kn0wn](https://github.com/kn0wn)
- [vitesse-addons](https://github.com/JohnCampionJr/vitesse-addons) by [johncampionjr](https://github.com/johncampionjr) - additional options for integrations, including [Prettier](https://prettier.io) and [Storybook](https://storybook.js.org)

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/frandiox/vitessedge-template/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit frandiox/vitessedge-template my-vitesse-app
cd my-vitesse-app
npm i
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Rename `name` field in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `index.html`
- [ ] Change the favicon in `public`
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3333

```bash
npm run dev # SSR development
npm run dev:spa # SPA without SSR
```

### Build

To build the App, run

```bash
npm run build
```

And you will see the generated files in `dist`, and some of these files will be moved to `serverless` for deployment.

### Deploy on Cloudflare Workers

1. Create your [Cloudflare](https://www.cloudflare.com/) account.
2. Install [Wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update) CLI.
3. Modify the `account_id` in [wrangler.toml](./worker-site/wrangler.toml). Then:

```bash
npm run preview # Simulate Worker environment locally
npm run deploy
```

## Why

I have created several Vite apps recently. Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. It's strongly opinionated, but feel free to tweak it or even maintains your own forks. [(see community maintained variation forks)](#variations)
