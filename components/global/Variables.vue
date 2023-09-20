<script setup lang="ts">
const props = defineProps<{
  name?: string,
  icon?: string,
  disclosure?: boolean,
}>();

const { data, pending } = useAsyncData(`variables-${props.name ?? 'empty'}`, () => {
  if (!props.name) return Promise.resolve(null);
  return queryContent('api', '_variables').where({
    _partial: true,
    $or: [
      { 'variables.name': props.name ?? '' },
      { 'title': props.name ?? '' },
    ]
  }).findOne();
});

const icon = computed(() => {
  return props.icon ?? data?.value?.variables?.summaryIcon ?? 'mdi:list-box-outline';
})
</script>

<template>
  <template v-if="data">
    <Disclosure v-if="disclosure" type="neutral" :icon="icon" class="mb-3">
      <template #default>
        <template v-if="data?.variables?.summaryText">
          <span class="font-semibold">{{ data?.variables?.summaryText }}</span> variables will also be populated. Click here to view.
        </template>
        <template v-else>
          Additional shared variables will also be populated. Click here to view.
        </template>
      </template>
      <template #content>
        <ContentRenderer :value="data">
          <template #empty>
            <List type="warning">
              Variables not found
            </List>
          </template>
        </ContentRenderer>
      </template>
    </Disclosure>
    <template v-else>
      <div class="text-lg font-semibold mt-8">
        {{ data?.variables?.summaryText }} Variables
      </div>
      <ContentRenderer :value="data">
        <template #empty>
          <List type="warning">
            Variables not found
          </List>
        </template>
      </ContentRenderer>
    </template>
  </template>
  <List v-else-if="pending" type="info">
    Loading variables...
  </List>
  <List v-else type="warning">
    Variables not found
  </List>
</template>

<style scoped>
:deep(.summary) {
  padding: .75rem !important;
  font-size: .9em;
  background-color: #171717 !important;
}

:deep(.summary-content) {
  color: #a3a3a3 !important;
  align-self: center;
}

:deep(.disclosure-icon) {
  margin-inline-end: .5rem !important;
  width: 1.25rem !important;
  height: 1.25rem !important;
  align-self: center;
}

:deep(.content) {
  background-color: #171717 !important;
}

:deep(table) tbody {
  white-space: nowrap;
  color: #a3a3a3;
  font-size: .9em;
}

:deep(table) td,
:deep(table) th {
  padding: .5rem;
}
</style>