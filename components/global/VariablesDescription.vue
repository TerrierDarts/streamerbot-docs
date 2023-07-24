<script setup lang="ts">
const { page } = useContent();
const text = computed(() => {
  const m = page.value._path.match(/\/(sub-actions|triggers)\//i);
  const type = m && m[1] ? m[1] : null;

  switch(type) {
    case 'sub-actions':
      return 'The following variables will be populated after executing this sub-action:';
    case 'triggers':
      return 'The following variables will be populated when this trigger executes:';
    default:
      return 'The following variables will be populated:'
  }
})
</script>

<template>
  <ProseP class="text-neutral-400">
    {{ text }}
  </ProseP>
</template>
