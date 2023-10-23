<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const props = defineProps<{
  name?: string,
  icon?: string,
  disclosure?: boolean,
}>();

const { data, pending } = useLazyAsyncData(`vars:${props.name}`, () => {
  if (!props.name) return Promise.resolve(null);
  return queryContent('api', '_variables').where({
    _partial: true,
    $or: [
      { 'variables.name': props.name ?? '' },
      { 'title': props.name ?? '' },
    ]
  }).findOne();
});

const appConfig = useAppConfig()

const config = {
  button: {
    icon: {
      name: appConfig.ui.icons.chevron,
      base: 'w-4 h-4 transform transition-transform duration-200',
      active: '',
      inactive: '-rotate-90'
    }
  }
}

const { ui } = useUI('prose.collapsible', undefined, config, undefined, true)

const icon = computed(() => {
  return props.icon ?? data?.value?.variables?.summaryIcon ?? 'i-mdi-list-box-outline';
})
</script>

<template>
  <template v-if="data">
    <Disclosure v-if="disclosure" v-slot="{ open }">
      <DisclosureButton class="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
        <UIcon :name="ui.button.icon.name" :class="[ui.button.icon.base, open ? ui.button.icon.active : ui.button.icon.inactive]" />
        <template v-if="data?.variables?.summaryText">
          <span class="font-semibold">{{ data?.variables?.summaryText }}</span> variables will also be populated. Click here to view.
        </template>
        <template v-else>
          Additional shared variables will also be populated. Click here to view.
        </template>
      </DisclosureButton>

      <DisclosurePanel class="mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800">
        <ContentRenderer :value="data">
          <template #empty>
            <List type="warning">
              Variables not found
            </List>
          </template>
        </ContentRenderer>
      </DisclosurePanel>
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
    <USkeleton class="h-8 w-full" />
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