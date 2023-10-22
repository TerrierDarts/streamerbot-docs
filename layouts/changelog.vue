<script setup lang="ts">
const nav = inject<ComputedRef<any[]>>('changelogNavigation')
const navigation = computed(() => {
  return nav.value.filter((link) => link._path.startsWith('/changelogs'))
})
</script>

<template>
  <div>
    <UMain>
      <UContainer>
        <UPage>
          <template #left>
            <UAside>
              <UNavigationTree :links="mapContentNavigation(navigation)" />
            </UAside>
          </template>
          <slot />
        </UPage>
      </UContainer>
    </UMain>
  </div>
</template>