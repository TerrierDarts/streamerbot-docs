
type OgImageOptions = {
  component: 'OgImageDefault';
}

const defaultOptions: OgImageOptions = {
  component: 'OgImageDefault',
};

/**
 * Automatically generate OpenGraph images for each page using `nuxt-og-image`
 */
export function useOgImage(options: OgImageOptions = defaultOptions) {
  const route = useRoute();
  const { navigation, page } = useContent();
  const { navKeyFromPath } = useContentHelpers();

  // Grab any manually set category
  const category = navKeyFromPath(
    route.path.slice(0, route.path.lastIndexOf('/')),
    'category',
    navigation.value
  );

  // Grab root parent title/icon as fallbacks
  const parentPath = route.path.split('/').at(1);
  const parentTitle = parentPath
    ? navKeyFromPath(`/${parentPath}`, 'title', navigation.value)
    : undefined;
  const parentIcon = parentPath
    ? navKeyFromPath(`/${parentPath}`, 'icon', navigation.value)
    : undefined;

  if (route.path !== '/' && page.value?.ogImage !== false && page.value?.title) {
    defineOgImage({
      component: options.component ?? defaultOptions.component,
      title: page.value?.title ?? 'Docs',
      description: page.value?.description,
      icon: page.value?.icon ?? category?.icon ?? false,
      siteName: 'Streamer.bot Docs',
      categoryTitle: category?.title ?? parentTitle,
      categoryIcon: category?.icon ?? parentIcon,
      cacheKey: page.value?._path,
      cacheTtl: 60 * 60 * 24 * 30, // 30 days
    });

    page.value.image = `https://docs.streamer.bot${page.value?._path}/__og_image__/og.png`;

    useHead({
      title: page.value?.title ?? 'Streamer.bot Docs',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      meta: [
        { name: 'og:url', content: page.value.image },
        { name: 'og:title', content: page.value?.title ?? 'Docs' },
        { name: 'og:description', content: page.value?.description },
        { name: 'og:image', content: `${page.value?._path}/__og_image__/og.png` },
        { name: 'twitter:title', content: page.value?.title ?? 'Docs' },
        { name: 'twitter:description', content: page.value?.description },
        { name: 'twitter:image', content: `${page.value?._path}/__og_image__/og.png` },
      ],
    });
  }
}