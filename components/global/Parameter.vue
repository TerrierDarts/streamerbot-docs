<script setup lang="ts">
const props = defineProps<{name?: string}>();

const { data, pending } = useAsyncData(`parameter-${props.name ?? 'empty'}`, () => {
  if (!props.name) return Promise.resolve(null);
  return queryContent('api', '_parameters').where({
    _partial: true,
    $or: [
      { 'parameter.name': props.name ?? '' },
      { 'title': props.name ?? '' },
    ]
  }).findOne();
});
</script>

<template>
  <List v-if="!name" type="danger">
    Unknown Parameter
  </List>
  <ContentRenderer v-else-if="data" :value="data">
    <template #empty>
      <List type="warning">
        Parameter not found
      </List>
    </template>
  </ContentRenderer>
  <List v-else-if="pending" type="info">
    Loading parameter...
  </List>
  <List v-else type="danger">
    Unknown Parameter
  </List>
</template>