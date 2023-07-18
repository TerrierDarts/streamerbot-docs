export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-headlessui', 'nuxt-og-image'],

  site: {
    url: 'https://docs.streamer.bot',
    name: 'Streamer.bot Documentation',
  },

  colorMode: {
    preference: 'dark',
  },

  devtools: {
    enabled: true,
    embedded: true,
  },

  content: {
    navigation: {
      fields: ['icon', 'titleTemplate', 'header', 'main', 'aside', 'footer', 'category'],
    },
  },
});
