import 'windi.css'
import './styles/main.css'
import vitedge from 'vitedge'
import generatedRoutes from 'pages-generated'
import { setupLayouts } from 'layouts-generated'
import { installI18n, extractLocaleFromPath, DEFAULT_LOCALE } from './i18n'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)

// https://github.com/frandiox/vitedge
export default vitedge(
  App,
  {
    routes,
    // Use Router's base for i18n routes
    base: ({ url }) => {
      const locale = extractLocaleFromPath(url.pathname)
      return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`
    },
  },
  async (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map((i) =>
      i.install?.(ctx)
    )

    const { app, initialRoute } = ctx

    // Load language asyncrhonously to avoid bundling all languages
    await installI18n(app, extractLocaleFromPath(initialRoute.href))
  }
)
