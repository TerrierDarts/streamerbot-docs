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

  ogImage: {
    runtimeCacheStorage: {
      driver: 'cloudflare-kv-http',
      namespaceId: 'streamerbot-docs',
      accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
      apiToken: process.env.CLOUDFLARE_KV_API_TOKEN,
    },
  },
});
