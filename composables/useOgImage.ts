
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
      cacheKey: page.value?._id ?? page.value?._path ?? route.path,
      cacheTtl: 60 * 60 * 24 * 30, // 30 days
    });

    page.value.image = `https://docs.streamer.bot${page.value?._path}/__og_image__/og.png`;

    useSeoMeta({
      ogUrl:`https://docs.streamer.bot${page.value?._path ?? ''}`,
      ogTitle: page.value?.title ?? 'Docs',
      ogDescription: page.value?.description,
      ogImage: `${page.value?._path}/__og_image__/og.png`,
      twitterTitle: page.value?.title ?? 'Docs',
      twitterDescription: page.value?.description,
      twitterImage: `${page.value?._path}/__og_image__/og.png`,
    });
  }
}