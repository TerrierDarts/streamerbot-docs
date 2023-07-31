export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-og-image',
    'nuxt-content-assets',
    'nuxt-link-checker',
  ],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },

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
      fields: ['icon', 'titleTemplate', 'header', 'main', 'aside', 'footer', 'category', 'version'],
    },
  },

  nitro: {
    prerender: {
      failOnError: false,
      ignore: [
        // TODO: Remove these when migration is finished and we have no more broken links :)
        '/Sub-Actions',
        '/Events',
        '/Triggers',
        '/Trigger',
        '/Platforms',
        '/Broadcasters',
        '/Integrations',
        '/Servers-Clients',
        '/Variables',
        '/Commands',
        '/Settings',
        '/hotkeys',
        '/Quick-Start',
        '/Voice-Control',
        '/api/sub-actions/platforms/twitch/moderation/Sub-Actions',
      ],
    },
  },

  linkChecker: {
    failOnError: false,
    runOnBuild: false,
  },

  ogImage: {
    runtimeSatori: process.dev,
    runtimeCacheStorage: {
      driver: 'cloudflare-kv-http',
      namespaceId: process.env.CLOUDFLARE_KV_NAMESPACE_ID,
      accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
      apiToken: process.env.CLOUDFLARE_KV_API_TOKEN,
    },
    defaults: {
      cacheTtl: 60 * 60 * 24 * 30, // 30 days
    },
  },
});
