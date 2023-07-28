<script setup lang="ts">
const route = useRoute();
const { page, navigation } = useContent();
const { navDirFromPath, navPageFromPath } = useContentHelpers();

useOgImage();

const isActive = (link: any) =>
  link.exact ? route.fullPath === link._path : route.fullPath.startsWith(link._path);

const showMenu = computed(() => {
  return page.aside !== false && route.path.match(/^(\/api\/(sub-actions|triggers|csharp)\/[\w-]+\/[\w-]+)\/?/i);
});

// Automatically choose a matching API directory when it exists
const links = computed(() => {
  const m = route.path.match(/^(\/api\/(sub-actions|triggers|csharp)\/[\w-]+\/[\w-]+)\/?/i);
  const categoryPath = m && m[1] ? m[1] : null;
  const subActionsPath = categoryPath
    ? categoryPath.replace(/^\/api\/(sub-actions|triggers|csharp)/, '/api/sub-actions')
    : '/api/sub-actions';
  const triggersPath = categoryPath
    ? categoryPath.replace(/^\/api\/(sub-actions|triggers|csharp)/, '/api/triggers')
    : '/api/triggers';
  const csharpPath = categoryPath
    ? categoryPath.replace(/^\/api\/(sub-actions|triggers|csharp)/, '/api/csharp')
    : '/api/csharp';

  return [
    {
      _path:
        !categoryPath?.startsWith('/api/sub-actions') &&
        (navDirFromPath(subActionsPath, navigation.value) || navPageFromPath(subActionsPath, navigation.value))
          ? subActionsPath
          : '/api/sub-actions',
      text: 'Sub-Actions',
    },
    {
      _path:
        !categoryPath?.startsWith('/api/triggers') &&
        (navDirFromPath(triggersPath, navigation.value) || navPageFromPath(triggersPath, navigation.value))
          ? triggersPath
          : '/api/triggers',
      text: 'Triggers',
    },
    {
      _path:
        !categoryPath?.startsWith('/api/csharp') &&
        (navDirFromPath(csharpPath, navigation.value) || navPageFromPath(csharpPath, navigation.value))
          ? csharpPath
          : '/api/csharp',
      text: 'C# Code',
    },
    {
      _path: '/api/servers',
      text: 'Servers',
    }
  ];
});
</script>

<template>
  <BasicLayout>
    <div
      class="sticky z-[5] top-[64px] p-3 bg-[#121110] bg-opacity-80 border-b border-neutral-800 mb-1"
    >
      <Container>
        <div class="grid grid-cols-12">
          <nav class="col-span-12 flex justify-center items-center gap-5 font-semibold">
            <NuxtLink
              v-for="link in links"
              :key="link._path"
              :to="link._path"
              class="px-2 hover:text-white transition-colors"
              :class="{
                'text-white': isActive(link),
                'text-neutral-400': !isActive(link),
              }"
            >
              {{ link.text }}
            </NuxtLink>
          </nav>
        </div>
      </Container>
    </div>
    <Container v-if="page.aside === false">
      <div class="py-12">
        <slot />
      </div>
    </Container>
    <DocsLayout v-else>
      <template #aside-app-navigation>
        <CategoryMenu v-if="showMenu" />
      </template>
      <slot />
    </DocsLayout>
  </BasicLayout>
</template>
