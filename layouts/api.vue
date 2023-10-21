<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
const navigation = inject<ComputedRef<any[]>>('apiNavigation');
const { navDirFromPath, navPageFromPath, navBottomLink, navKeyFromPath } = useContentHelpers();

const isActive = (link: any) =>
  link.exact ? route.fullPath === link._path : route.fullPath.startsWith(link._path);

const showMenu = computed(() => {
  return page.value?.aside !== false && route.path.match(/^(\/api\/(sub-actions|triggers|csharp)\/[\w-]+\/[\w-]+)\/?/i);
});

const apiCategoryPath = computed(() => {
  const m = route.path.match(/^(\/api\/(sub-actions|triggers|csharp)\/[\w-]+\/[\w-]+)\/?/i);
  return m && m[1] ? m[1] : null;
})

// Automatically choose a matching API directory when it exists
const links = computed(() => {
  const categoryPath = apiCategoryPath.value;

  const subActionsPath = categoryPath
    ? categoryPath.replace(/^\/api\/(sub-actions|triggers|csharp)/, '/api/sub-actions')
    : '/api/sub-actions';
  const subActionsPage = navPageFromPath(subActionsPath, navigation.value);
  const subActionsLink = subActionsPage ? navBottomLink(subActionsPage) : '/api/sub-actions';

  const triggersPath = categoryPath
    ? categoryPath.replace(/^\/api\/(sub-actions|triggers|csharp)/, '/api/triggers')
    : '/api/triggers';
  const triggersPage = navPageFromPath(triggersPath, navigation.value);
  const triggersLink = triggersPage ? navBottomLink(triggersPage) : '/api/triggers';

  const csharpPath = categoryPath
    ? categoryPath.replace(/^\/api\/(sub-actions|triggers|csharp)/, '/api/csharp')
    : '/api/csharp';
  const csharpPage = navPageFromPath(csharpPath, navigation.value);
  const csharpLink = csharpPage ? navBottomLink(csharpPage) : '/api/csharp';

  return [
    {
      _path: !categoryPath?.startsWith('/api/sub-actions') && subActionsLink ? subActionsLink : '/api/sub-actions',
      text: 'Sub-Actions',
    },
    {
      _path: !categoryPath?.startsWith('/api/triggers') && triggersLink ? triggersLink : '/api/triggers',
      text: 'Triggers',
    },
    {
      _path: !categoryPath?.startsWith('/api/csharp') && csharpLink ? csharpLink : '/api/csharp',
      text: 'C# Code',
    },
    {
      _path: '/api/servers',
      text: 'Servers',
    }
  ];
});

// Reduce navigation tree to only include the current API sub category
// e.g. Twitch, YouTube, etc.
const asideLevel = computed(() => Number(navKeyFromPath(page.value._path, 'aside', navigation.value)?.level || 4));
const { data: navTree } = await useAsyncData('apiNavigation', () => fetchContentNavigation(
  queryContent('api').where({
    _path: {
      $contains: route.path.split('/').slice(0, asideLevel.value + 1).join('/')
    }
  })
), { watch: [() => route.path, asideLevel] });
const navChildren = computed(() => {
  // if (route.path.split('/').length <= (asideLevel.value)) return [];

  let children = navTree.value?.[0]?.children ?? [];
  let level = asideLevel.value;
  while (level > 1 && children?.[0]?.children) {
    children = children[0].children;
    level--;
  }
  return children;
})
</script>

<template>
  <div>
    <UMain>
      <UContainer>
        <UPage>
          <template #left>
            <UAside class="min-h-full">
              <ApiCategoryMenu v-if="asideLevel >= 4" />
              <UNavigationTree :links="mapContentNavigation(navChildren)" :multiple="false" :default-open="''" />
            </UAside>
          </template>
          <slot />
        </UPage>
      </UContainer>
    </UMain>
  </div>
</template>