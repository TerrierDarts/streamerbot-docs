<script setup lang="ts">
import { useSiteConfig } from '#imports';
import { computed } from 'vue';

// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false,
});

type Props = {
  path: string;
  title?: string;
  description?: string;
  icon?: string;
  siteName?: string;
  siteLogo?: string;
  categoryTitle?: string;
  categoryIcon?: string;
};
const props = withDefaults(defineProps<Props>(), {
  title: 'Streamer.bot Docs',
  description: 'Official documentation for Streamer.bot',
  icon: undefined,
  siteName: 'Streamer.bot',
  siteLogo: '/logo-dark.svg',
  categoryTitle: 'Documentation',
  categoryIcon: 'mdi:book-open-page-variant-outline',
});

const titleAttrs = computed(() => {
  const styles = {
    fontWeight: 'bold',
    marginBottom: '50px',
    fontSize: '75px',
  }
  return { style: styles }
});

const descriptionAttrs = computed(() => {
  const styles = {
    fontSize: '35px',
    lineHeight: `${35 * 1.5}px`,
    opacity: '0.8',
  }
  return { style: styles }
});

const siteConfig = useSiteConfig()
const siteName = computed(() => {
  return props.siteName || siteConfig.name
});
const siteLogo = computed(() => {
  return props.siteLogo || siteConfig.logo
});

const MaybeIconComponent = resolveComponent('Icon')
</script>

<template>
  <div class="w-full h-full absolute top-0 right-0 left-0 bottom-0 bg-neutral-900">
    <div
      :style="{
        backgroundImage: 'linear-gradient(120deg,#0df,#00d0ff 3%,#00c8ff 6%,#0bf 9%,#00b2ff 12%,#00a2ff 17%,#2994ff 23%,#6183ff 33%,#8670ff 51%,#a359ee)',
        borderRadius: '75%',
        filter: 'blur(200px)',
        height: '100%',
        opacity: '.3',
        width: '150%',
      }"
    />
  </div>
  <div class="w-full h-full flex text-gray-100 relative items-center justify-center px-[100px]">
    <div class="flex flex-row justify-between items-center" style="margin-bottom: 100px;">
      <div class="flex flex-col w-full" :style="icon ? { width: '65%' } : {}">
        <div v-bind="titleAttrs">
          {{ title || 'Null Title' }}
        </div>
        <div v-if="description" v-bind="descriptionAttrs">
          {{ description }}
        </div>
      </div>
      <div v-if="typeof icon === 'string' && typeof MaybeIconComponent !== 'string'" style="width: 30%;" class="flex justify-end">
        <MaybeIconComponent :name="icon" size="250px" style="margin: 0 auto 0 100px;opacity: 0.9;" />
      </div>
    </div>
    <footer class="absolute bottom-0 w-full h-30 flex-col items-center justify-center">
      <div class="flex items-center w-full flex-nowrap">
        <div class="border-t border-gray-300 flex-grow"></div>
        <div class="relative flex justify-center h-10 p-5 text-center">
          <img src="/logo-dark.svg" width="50">
        </div>
        <div class="border-t border-gray-300 flex-grow"></div>
      </div>
      <div class="flex items-center justify-between w-full flex-nowrap text-3xl tracking-tight">
        <span class="text-sky-400 font-light">
          <MaybeIconComponent :name="categoryIcon" class="mr-2 mt-1 !text-sky-400" />
          {{ categoryTitle }}
        </span>
        <span class="text-gray-300">
          {{ siteName || 'Streamer.bot' }}
        </span>
      </div>
    </footer>
  </div>
</template>