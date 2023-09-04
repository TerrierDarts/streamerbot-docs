export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-og-image',
    'nuxt-content-assets',
    'nuxt-multi-cache',
  ],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
    storage: {
      cache: {
        driver: "cloudflare-kv-http",
        namespaceId: process.env.CLOUDFLARE_KV_NAMESPACE_ID,
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
        apiToken: process.env.CLOUDFLARE_KV_API_TOKEN,
      }
    },
  },

  multiCache: {
    component: {
      enabled: true,
    }
  },

  ogImage: {
    runtimeSatori: process.dev,
    runtimeCacheStorage: {
      base: 'og-image:',
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
