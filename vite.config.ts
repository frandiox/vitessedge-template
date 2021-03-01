import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'
import Markdown from 'vite-plugin-md'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Prism from 'markdown-it-prism'
import vitedge from 'vitedge/plugin.js'
// Import Tailwind config directly to avoid ES issues in WindiCSS plugin
import tailwindConfig from './tailwind.config'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(process.cwd(), 'src')}/`,
    },
  },
  plugins: [
    vitedge(),

    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    // @ts-ignore
    Pages.default({
      extensions: ['vue', 'md'],
      extendRoute(route: any) {
        if (route.component.endsWith('.md')) {
          return {
            ...route,
            meta: {
              // Disable page props for static MD routes
              propsGetter: false,
            },
          }
        }
      },
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    // @ts-ignore
    Layouts.default(),

    // https://github.com/antfu/vite-plugin-md
    // @ts-ignore
    Markdown.default({
      wrapperClasses: 'prose prose-sm m-auto text-left',
      headEnabled: false, // This relies on useHead
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
      },
    }),

    // https://github.com/antfu/vite-plugin-components
    // @ts-ignore
    ViteComponents.default({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      customLoaderMatcher: (id: string) => id.endsWith('.md'),

      // auto import icons
      customComponentResolvers: [
        // https://github.com/antfu/vite-plugin-icons
        ViteIconsResolver({
          componentPrefix: '',
          // enabledCollections: ['carbon']
        }),
      ],
    }),

    // https://github.com/antfu/vite-plugin-icons
    // @ts-ignore
    ViteIcons.default(),

    // https://github.com/antfu/vite-plugin-windicss
    // @ts-ignore
    WindiCSS.default({
      config: tailwindConfig,
      safelist: 'prose prose-sm m-auto',
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      manifest: {
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    // https://github.com/intlify/vite-plugin-vue-i18n
    // @ts-ignore
    VueI18n.default({
      include: [path.resolve(process.cwd(), 'src/i18n/translations/**')],
    }),
  ],

  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core'],
    exclude: ['vue-demi'],
  },
})
