<script setup lang="ts">
import { useHead } from '@vueuse/head'

const title = 'Vitesse × Vitedge'
const description =
  'Opinionated SSR Vite Starter Template for Cloudflare Workers'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    {
      property: 'og:image',
      content:
        'https://repository-images.githubusercontent.com/343114407/620b7080-7b02-11eb-96bc-e2f02ef328a7',
    },
  ],
})
</script>

<template>
  <router-view />
</template>
