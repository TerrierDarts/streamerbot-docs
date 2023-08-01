<script setup lang="ts">
useOgImage();
</script>

<template>
  <RenderCacheable>
    <DocsLayout>
      <slot />
    </DocsLayout>
  </RenderCacheable>
</template>