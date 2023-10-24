<script setup lang="ts">

const route = useRoute();
const navigation = inject<ComputedRef<any[]>>('changelogNavigation');

// Redirect to latest changelog page
const path = navigation.value?.at(0)._path;
if (path && route.path === '/changelogs') {
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