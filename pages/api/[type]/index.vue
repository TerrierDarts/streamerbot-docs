<script setup lang="ts">

const route = useRoute()

definePageMeta({
  layout: 'default'
})

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  titleTemplate: '%s | Streamer.bot Docs',
  title: page.value.title,
  ogTitle: `${page.value.title} | Streamer.bot Docs`,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'OgImageDefault',
  title: page.value.title,
  description: page.value.description
})

const headline = `API References`

const links = computed(() => [{
  icon: 'i-heroicons-pencil-square',
  label: 'Edit this page',
  to: `https://github.com/Streamerbot/streamerbot-docs/edit/main/docs/content/${page?.value?._file}`,
  target: '_blank'
}, {
  icon: 'i-heroicons-chat-bubble-bottom-center-text',
  label: 'Chat on Discord',
  to: 'https://discord.streamer.bot',
  target: '_blank'
}, {
  icon: 'StreamerbotIcon',
  label: 'Streamer.bot',
  to: 'https://streamer.bot',
  target: '_blank'
}, {
  icon: 'SpeakerbotIcon',
  label: 'Speaker.bot',
  to: 'https://speaker.bot',
  target: '_blank'
}])
</script>

<template>
  <UPage>
    <UPageHeader :title="page.title" :description="page.description" :links="page.links" :headline="headline" />
    <UPageBody prose>
      <ContentRenderer v-if="page.body" :value="page" />
    </UPageBody>
  </UPage>
</template>