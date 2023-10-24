<script setup lang="ts">
import { useSeo } from '~/composables/useSeo';

const route = useRoute()
const { data: page } = await useAsyncData('index', () => queryContent(route.path).findOne())

useSeo(page);
</script>

<template>
  <div>
    <ULandingHero :ui="{ base: 'relative z-[1]', container: 'max-w-3xl' }" class="mb-[calc(var(--header-height)*2)]">
      <template #title>
        <span class="text-primary">Streamer.bot</span> Documentation
      </template>

      <template #description>
        <span>Learn how to use Streamer.bot to <span class="text-primary-200 font-semibold">super charge</span> your live stream.</span>
      </template>

      <template #links>
        <UButton label="Get Started" icon="i-heroicons-rocket-launch" size="lg" to="/get-started/introduction" />
        <UButton label="View latest updates" variant="ghost" trailing-icon="i-mdi-chevron-right" to="/changelogs" />
      </template>
    </ULandingHero>
  </div>
</template>