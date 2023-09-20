export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-headlessui', 'nuxt-og-image', 'nuxt-content-assets'],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  site: {
    url: 'https://docs.streamer.bot',
    name: 'Streamer.bot Documentation',
  },

  css: ['@/assets/main.css'],

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
      concurrency: 32,
      failOnError: false,
      // FIXME: Remove these when migration is finished and we have no more broken links :)
      ignore: [
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

  // FIXME: This is a workaround for nuxi prepare hanging
  hooks: {
    close: (nuxt) => {
      if (!nuxt.options._prepare) {
        process.exit();
      }
    },
  },

  ogImage: {
    runtimeCacheStorage: true,
    defaults: {
      cacheTtl: 60 * 60 * 24 * 30, // 30 days
    },
  },
});
