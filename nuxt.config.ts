
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxtjs/plausible',
    'nuxt-og-image',
    'nuxt-icon',
    'nuxt-content-assets',
    '@nuxt/content',
  ],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  site: {
    url: 'https://docs.streamer.bot',
    name: 'Streamer.bot Documentation',
    twitterCard: 'summary_large_image',
  },

  css: ['@/assets/main.css'],

  ui: {
    global: true,
    icons: ['mdi', 'heroicons', 'simple-icons', 'vscode-icons'],
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
      fields: [
        'icon',
        'titleTemplate',
        'header',
        'main',
        'aside',
        'footer',
        'category',
        'version',
        'badge',
      ],
    },
    highlight: {
      preload: [
        'js',
        'ts',
        'csharp',
        'bash',
        'json',
        'yaml',
        'markdown',
        'html',
        'css',
        'scss',
        'less',
        'xml',
        'diff',
      ],
    },
  },

  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700],
    },
  },

  nitro: {
    routeRules: {
      '/**': { isr: true, swr: true },
      '/get-started': { redirect: { to: '/get-started/introduction', statusCode: 301 } },
      '/guide': { redirect: { to: '/guide/actions', statusCode: 301 } },
      '/api/servers/websocket': {
        redirect: { to: '/api/servers/websocket/requests', statusCode: 301 },
      },
    },
    prerender: {
      routes: [
        '/',
        '/api/sub-actions',
        '/api/triggers',
        '/api/csharp',
        '/api/servers/websocket/requests',
        '/changelogs',
        '/api/search.json',
      ],
      concurrency: 8,
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

  hooks: {
    // FIXME: temporary fix for nuxi commands hanging
    close: (nuxt) => {
      if (!nuxt.options._prepare) {
        process.exit();
      }
    },
    // Related to https://github.com/nuxt/nuxt/pull/22558
    // Adding all global components to the main entry
    // To avoid lagging during page navigation on client-side
    // Downside: bigger JS bundle
    // With sync: 465KB, gzip: 204KB
    // Without: 418KB, gzip: 184KB
    'components:extend'(components) {
      for (const comp of components) {
        if (comp.global) {
          comp.global = 'sync';
        }
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
