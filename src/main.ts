import 'windi.css'
import './styles/main.css'
import vitedge from 'vitedge'
import generatedRoutes from 'pages-generated'
import { setupLayouts } from 'layouts-generated'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)

// https://github.com/frandiox/vite-ssr
export default vitedge(App, { routes }, (ctx) => {
  // install all modules under `modules/`
  Object.values(import.meta.globEager('./modules/*.ts')).map((i) =>
    i.install?.(ctx)
  )
})
