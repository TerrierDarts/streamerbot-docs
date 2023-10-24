<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types';

const route = useRoute();
const navigation = inject<ComputedRef<NavItem[]>>('changelogNavigation');

// Redirect to latest changelog page
const path = navigation.value?.find(item => !!item.version)._path;
if (path && path !== route.path && route.path === '/changelogs') {
  navigateTo(path);
}
</script>

<template>
  <UPage>
    <UPageBody>
      <UMain>
        <USkeleton class="w-full h-4"></USkeleton>
      </UMain>
    </UPageBody>
  </UPage>
</template>