<script setup lang="ts">
const route = useRoute();
const { page } = useContent();

const isActive = (link: any) => (link.exact ? route.fullPath === link._path : route.fullPath.startsWith(link._path));

const links = [
  { _path: '/api/sub-actions', text: 'Sub-Actions' },
  { _path: '/api/triggers', text: 'Triggers' },
  { _path: '/api/csharp', text: 'C# Code' },
]
</script>

<template>
  <BasicLayout>
    <div class="sticky z-20 top-[64px] p-3 bg-[#121110] bg-opacity-80 border-b border-neutral-800 mb-1">
      <Container>
        <div class="grid grid-cols-12">
          <div class="col-span-3">
            <CategoryMenu v-if="page.aside !== false" />
          </div>
          <nav class="col-span-6 flex justify-center items-center gap-5 font-semibold">
            <NuxtLink
              v-for="link in links"
              :key="link._path"
              :to="link._path"
              class="px-2 hover:text-white transition-colors"
              :class="{
                'text-white': isActive(link),
                'text-neutral-400': !isActive(link),
              }"
            >
              {{ link.text }}
            </NuxtLink>
          </nav>
          <div class="col-span-3"></div>
        </div>
      </Container>
    </div>
    <Container v-if="page.aside === false">
      <div class="py-12">
        <slot />
      </div>
    </Container>
    <DocsLayout v-else>
      <slot />
    </DocsLayout>
  </BasicLayout>
</template>