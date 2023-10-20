<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { debounce } from 'perfect-debounce';
import { withoutTrailingSlash } from 'ufo';

const searchRef = ref()

const route = useRoute()
const colorMode = useColorMode()

const { data: nav } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', { default: () => [], server: false })

// Computed
const navigation = computed(() => {
  if (route.path.match(/^\/api/i)) {
    return nav.value?.filter(item => item._path.match(/^\/api/i))
  }
  return nav.value?.filter(item => !item._path.match(/^\/api/i))
})
const groups = computed(() => {
  return [];
})

const color = computed(() => colorMode.value === 'dark' ? '#18181b' : 'white')

// Watch
watch(() => searchRef.value?.commandPaletteRef?.query, debounce((query: string) => {
  if (!query) {
    return
  }
}, 500));

// Head
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
    { rel: 'canonical', href: `https://docs.streamer.bot${withoutTrailingSlash(route.path)}` }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

// Provide
provide('fullNavigation', nav)
provide('navigation', navigation)
provide('files', files)
</script>

<template>
  <div>
    <Header />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Footer />

    <ClientOnly>
      <LazyUDocsSearch ref="searchRef" :files="files" :navigation="nav" :groups="groups" />
    </ClientOnly>

    <UNotifications>
      <template #title="{ title }">
        <span v-html="title" />
      </template>

      <template #description="{ description }">
        <span v-html="description" />
      </template>
    </UNotifications>
  </div>
</template>