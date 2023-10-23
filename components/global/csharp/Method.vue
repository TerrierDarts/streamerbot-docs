<script setup lang="ts">
const props = defineProps<{name?: string}>();

const { data, pending } = useLazyAsyncData(`csharp:${props.name}`, () => {
  if (!props.name) return Promise.resolve(null);
  return queryContent('api', 'csharp', '_methods').where({
    _partial: true,
    $or: [
      { 'csharp.method': props.name ?? '' },
      { 'title': props.name ?? '' },
    ]
  }).findOne();
});
</script>

<template>
  <List v-if="!name" type="danger">
    C# method does not exist for this sub-action
  </List>
  <ContentRenderer v-else-if="data" :value="data">
    <template #empty>
      <List type="warning">
        C# method not found
      </List>
    </template>
  </ContentRenderer>
  <div v-else-if="pending">
    <USkeleton class="h-8 w-full" />
  </div>
  <List v-else type="danger">
    C# method not found
  </List>
</template>