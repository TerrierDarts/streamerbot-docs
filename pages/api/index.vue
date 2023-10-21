<script setup lang="ts">

const route = useRoute()
const { data: page } = await useAsyncData('api', () => queryContent(route.path).findOne())

useSeoMeta({
  titleTemplate: '',
  title: page.value?.title,
  ogTitle: page.value?.title,
  description: page.value?.description,
  ogDescription: page.value?.description
})

const cards = [
  {
    title: 'Sub-Actions',
    description: 'Reference of all sub-actions, their parameters, and any populated variables.',
    icon: 'i-mdi-lightning-bolt-outline',
    to: '/api/sub-actions',
  },
  {
    title: 'Triggers',
    description: 'Reference of all available triggers and their populated variables.',
    icon: 'i-mdi-creation',
    to: '/api/triggers',
  },
  {
    title: 'C# Methods',
    description: 'Reference of all methods available within your custom C# code actions',
    icon: 'i-mdi-code-braces-box',
    to: '/api/csharp',
  },
  {
    title: 'WebSocket Server',
    description: 'Streamer.bot WebSocket API Reference',
    icon: 'i-mdi-api',
    to: '/api/servers/websocket',
  },
  {
    title: 'HTTP Server',
    description: 'Streamer.bot HTTP API Reference',
    icon: 'i-mdi-api',
    to: '/api/servers/http',
  },
  {
    title: 'UDP Server',
    description: 'Streamer.bot UDP API Reference',
    icon: 'i-mdi-api',
    to: '/api/servers/udp',
  },
]
</script>

<template>
  <div>
    <ULandingSection title="API References" description="Full references for sub-actions, triggers, and more!">
      <UPageGrid>
        <ULandingCard
          v-for="(card, subIndex) of cards"
          :key="subIndex"
          v-bind="card"
          :ui="{
            background: 'dark:bg-gray-900/50 dark:lg:bg-gradient-to-b from-gray-700/50 to-gray-950/50',
            body: {
              base: 'flex-1',
              background: 'dark:bg-gray-800/50 dark:lg:bg-gray-900/50 backdrop-blur-lg'
            }
          }"
          class="flex flex-col"
        ></ULandingCard>
      </UPageGrid>
    </ULandingSection>
  </div>
</template>