export default defineAppConfig({
  docus: {
    title: 'Streamer.bot Documentation',
    description: 'The best place to start your documentation.',
    url: 'https://docs.streamer.bot',
    image: 'https://streamer.bot/og-image.png',
    icon: 'https://streamer.bot/favicon.ico',
    socials: {
      twitter: 'streamerdotbot',
      web: {
        label: 'Streamer.bot',
        icon: 'IconStreamerbot',
        href: 'https://streamer.bot',
      },
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'streamerbot-docs',
      owner: 'Streamerbot',
      edit: true,
    },
    aside: {
      level: 1,
      collapsed: false,
      exclude: [],
    },
    header: {
      logo: true,
      showLinkIcon: true,
      navigation: true,
      exclude: [],
      fluid: true,
    },
  },
});
