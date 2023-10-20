<script setup lang="ts">
const links = computed(() => {
  return [{
    label: 'Get Started',
    icon: 'i-mdi-star-outline',
    to: '/get-started/introduction'
  }, {
    label: 'Guide',
    icon: 'i-mdi-open-page-variant-outline',
    to: '/guide'
  }, {
    label: 'API',
    icon: 'i-mdi-application-cog',
    to: '/api',
    children: [
      {
        label: 'Sub-Actions',
        icon: 'i-mdi-lightning-bolt-outline',
        to: '/api/sub-actions',
      },
      {
        label: 'Triggers',
        icon: 'i-mdi-creation',
        to: '/api/triggers',
      },
      {
        label: 'C# Methods',
        icon: 'i-mdi-code-braces-box',
        to: '/api/csharp',
      },
      {
        label: 'WebSocket Server',
        icon: 'i-mdi-api',
        to: '/api/servers/websocket',
      },
      {
        label: 'HTTP Server',
        icon: 'i-mdi-api',
        to: '/api/servers/http',
      },
      {
        label: 'UDP Server',
        icon: 'i-mdi-api',
        to: '/api/servers/udp',
      },
    ]
  }, {
    label: 'Changelogs',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/changelogs'
  }]
})

const navigation = inject<ComputedRef<any[]>>('navigation')
</script>

<template>
  <UHeader
    :links="links"
    :class="{
      'border-primary-200/75 dark:border-primary-900/50': $route.path === '/',
      'border-gray-200 dark:border-gray-800': $route.path !== '/'
    }"
  >
    <template #left>
      <HeaderLogoMenu />
    </template>

    <template #right>
      <UDocsSearchButton size="sm" class="max-w-xs" />
      <UColorModeButton />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>