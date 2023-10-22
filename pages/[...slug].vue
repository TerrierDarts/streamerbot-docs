<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { withoutTrailingSlash } from 'ufo';

const route = useRoute()

definePageMeta({
  layout: 'docs'
})

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryContent()
    .where({
      _extension: 'md',
      _partial: false,
      navigation: {
        $ne: false
      }
    })
    .only(['title', 'description', '_path'])
    .findSurround(withoutTrailingSlash(route.path))
})

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

const headline = computed(() => findPageHeadline(page.value))

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
    <UPageHeader :title="page.title" :description="page.description" :links="page.links" :headline="headline" class="relative">
      <template v-if="!page.links && page.logo" #default>
        <div class="absolute top-16 right-0">
          <ProseImg :src="page.logo" class="h-12 max-w-14" />
        </div>
      </template>
    </UPageHeader>

    <UPageBody prose>
      <ContentRenderer v-if="page.body" :value="page" />

      <hr v-if="surround?.length">

      <UDocsSurround :surround="(surround as ParsedContent[])" />
    </UPageBody>

    <template v-if="page.body?.toc?.links?.length" #right>
      <UDocsToc :links="page.body.toc.links">
        <template #bottom>
          <div class="hidden lg:block space-y-6 !mt-6">
            <UDivider v-if="page.body?.toc?.links?.length" type="dashed" />

            <UPageLinks title="Community" :links="links" />
          </div>
        </template>
      </UDocsToc>
    </template>
  </UPage>
</template>