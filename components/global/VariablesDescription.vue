<script setup lang="ts">
const props = defineProps<{
  empty?: boolean;
}>();

const { page } = useContent();

const text = computed(() => {
  const m = page.value._path.match(/\/(sub-actions|triggers)\//i);
  const type = m && m[1] ? m[1] : null;

  switch(type) {
    case 'sub-actions':
      return props.empty
        ? 'This sub-action does not populate any variables.'
        : 'The following variables will be populated after executing this sub-action:';
    case 'triggers':
      return props.empty
      ? 'This trigger does not populate any variables.'
      : 'The following variables will be populated when this trigger executes:';
    default:
      return props.empty
      ? 'No variables will be populated.'
      : 'The following variables will be populated:';
  }
})
</script>

<template>
  <ProseP class="text-neutral-400">
    {{ text }}
  </ProseP>
</template>
