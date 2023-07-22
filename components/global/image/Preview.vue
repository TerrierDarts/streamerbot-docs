<script setup lang="ts">
const { page } = useContent();

const path = page.value?._path?.split('/').at(-1);
const parts = page.value?._file?.split('/') ?? [];
const dir = parts?.length ? parts.slice(0, parts.length - 1).join('/') : null;
const imagePath = path && parts.length && dir ? `/${dir}/assets/${path}.png` : null;
</script>


<template>
  <ProseImg v-if="imagePath" :src="imagePath" alt="Preview"></ProseImg>
</template>

