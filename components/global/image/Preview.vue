<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne());

const path = computed(() => page.value?._path?.split('/').at(-1));
const parts = computed(() => page.value?._file?.split('/') ?? []);
const dir = computed(() => parts.value?.length ? parts.value.slice(0, parts.value.length - 1).join('/') : null);
const imagePath = computed(() => path.value && parts.value.length && dir.value ? `/${dir.value}/assets/${path.value}.png` : null);
</script>

<template>
  <ProseImg v-if="imagePath" :src="imagePath" alt="Preview"></ProseImg>
</template>