export default defineAppConfig({
  docus: {
    title: 'Streamer.bot Documentation',
    description: 'The best place to start your documentation.',
    url: 'https://docs.streamer.bot',
    image: 'https://streamer.bot/og-image.png',
    icon: 'https://streamer.bot/favicon.ico',
    socials: {
      github: 'Streamerbot',
      discord: {
        label: 'Discord',
        icon: 'mdi:discord',
        href: 'https://discord.streamer.bot',
      },
      twitch: {
        label: 'Twitch Team',
        icon: 'mdi:twitch',
        href: 'https://www.twitch.tv/team/streamerdotbot',
      },
      reddit: {
        label: 'Reddit',
        icon: 'mdi:reddit',
        href: 'https://reddit.com/r/streamerbot',
      },
      twitter: 'streamerdotbot',
      web: {
        label: 'Streamer.bot Website',
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
