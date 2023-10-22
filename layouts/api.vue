<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
const navigation = inject<ComputedRef<any[]>>('apiNavigation');
const { navDirFromPath, navPageFromPath, navBottomLink, navKeyFromPath } = useContentHelpers();

const apiCategoryPath = computed(() => {
  const m = route.path.match(/^(\/api\/(sub-actions|triggers|csharp)\/[\w-]+\/[\w-]+)\/?/i);
  return m && m[1] ? m[1] : null;
})

// Automatically choose a matching API directory when it exists
const links = computed(() => {
  const result = [];
  const categoryPath = apiCategoryPath.value;

  const subActionsPath = categoryPath
    ? categoryPath.replace(/^\/api\/(sub-actions|triggers|csharp)/, '/api/sub-actions')
    : '/api/sub-actions';
  const subActionsPage = navPageFromPath(subActionsPath, navigation.value);
  if (subActionsPage) {
    result.push({
      to: navBottomLink(subActionsPage),
      label: 'Sub-Actions',
      icon: 'i-mdi-lightning-bolt-outline',
      active: categoryPath?.startsWith('/api/sub-actions')
    });
  };

  const triggersPath = categoryPath
    ? categoryPath.replace(/^\/api\/(sub-actions|triggers|csharp)/, '/api/triggers')
    : '/api/triggers';
  const triggersPage = navPageFromPath(triggersPath, navigation.value);
  if (triggersPage) {
    result.push({
      to: navBottomLink(triggersPage),
      label: 'Triggers',
      icon: 'i-mdi-creation',
      active: categoryPath?.startsWith('/api/triggers')
    });
  };

  const csharpPath = categoryPath
    ? categoryPath.replace(/^\/api\/(sub-actions|triggers|csharp)/, '/api/csharp')
    : '/api/csharp';
  const csharpPage = navPageFromPath(csharpPath, navigation.value);
  if (csharpPage) {
    result.push({
      to: navBottomLink(csharpPage),
      label: 'C# Methods',
      icon: 'i-mdi-code-braces-box',
      active: categoryPath?.startsWith('/api/csharp')
    });
  };

  return result;
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

const { data: categoryPage } = await useAsyncData('categoryPage', () => {
  if (!apiCategoryPath.value) return null;
  return queryContent(apiCategoryPath.value).findOne();
}, { watch: [apiCategoryPath] });
const asideTitle = computed(() => {
  return navKeyFromPath(categoryPage.value?._path, 'title', navigation.value);
})
const asideIcon = computed(() => {
  return navKeyFromPath(categoryPage.value?._path, 'icon', navigation.value);
})
</script>

<template>
  <div>
    <UMain>
      <UContainer>
        <UPage>
          <template #left>
            <UAside class="min-h-full">
              <div v-if="categoryPage && asideTitle" class="text-neutral-200 text-sm/6 font-semibold mb-4 pb-1 border-b border-neutral-800">
                <div class="flex gap-2 items-center">
                  <Icon v-if="asideIcon" :name="asideIcon" class="h-4 w-4" />
                  <span>{{ asideTitle }}</span>
                </div>
                <span class="text-neutral-400">API References</span>
              </div>
              <UAsideLinks :links="links" class="pb-3 border-b border-neutral-800" />
              <UNavigationTree :links="mapContentNavigation(navChildren)" :multiple="false" :default-open="''" />
            </UAside>
          </template>
          <slot />
        </UPage>
      </UContainer>
    </UMain>
  </div>
</template>