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
      <span>Loading latest changelog...</span>
    </UPageBody>
  </UPage>
</template>