<script setup lang="ts">
const route = useRoute();
const { config } = useDocus();
const { navigation } = useContent();
const { navDirFromPath, navPageFromPath, navBottomLink } = useContentHelpers();

const m = route.path.match(/^(\/[\w-]+\/[\w-]+)\//i);
const path = m && m[1] ? m[1] : route.path;

const dir = navDirFromPath(path, navigation.value)?.filter(i => i._path !== route.path);
const items = computed(() => dir?.map(i => ({
  title: i.navigation?.title ?? i.title,
  icon: i.icon,
  items: i.children?.map(child => {
    const childPage = navPageFromPath(child._path, navigation.value);
    return {
      _path: child._path,
      href: childPage ? navBottomLink(childPage) ?? child._path : child._path,
      title: child.navigation?.title ?? child.title,
      description: child.navigation?.description ?? child.description,
      icon: child.icon
    };
  }) ?? []
}) ?? []));

const apiCategory = computed(() => {
  if (route.path.startsWith('/api/sub-actions')) return 'Sub-Actions';
  else if (route.path.startsWith('/api/triggers')) return 'Triggers';
  else if (route.path.startsWith('/api/csharp')) return 'C# Code';
  else if (route.path.startsWith('/api/servers')) return 'Servers';
  else return '';
});
const currentCategory = computed(() => items?.value?.find(i => i.items.some(item => route.path.startsWith(item._path))));
const currentItem = computed(() => {
  return currentCategory.value?.items.find(i => route.path.startsWith(i._path));
});
</script>

<template>
  <HeadlessMenu v-if="(config.aside.level ?? 0) >= 4" as="div" class="group relative w-full rounded-lg text-sm">
    <HeadlessMenuButton class="min-w-full py-1 flex justify-between items-center">
      <div class="flex items-baseline pt-1 text-sm">
        <Icon v-if="currentItem?.icon" :name="currentItem?.icon" class="self-center mr-2 h-5 w-5" />
        <div class="flex flex-wrap">
          <span class="font-semibold text-md mr-2">{{ currentItem?.title }}</span>
          <small class="text-neutral-400 text-sm">{{ apiCategory }}</small>
        </div>
      </div>
      <Icon name="mdi:menu" class="text-neutral-400 group-hover:text-neutral-100 transition-colors w-4 h-5 self-end" />
    </HeadlessMenuButton>
    <HeadlessMenuItems as="ul" class="absolute z-20 left-0 w-full max-h-[400px] overflow-y-auto flex flex-col bg-neutral-900 border border-neutral-800 py-2">
      <template v-for="category in items" :key="category.title">
        <HeadlessMenuItem v-if="category.items?.length" as="li" class="px-4 pt-2 pb-1 font-semibold text-neutral-100">
          {{ category.title }}
        </HeadlessMenuItem>
        <HeadlessMenuItem
          v-for="item in category.items"
          :key="item._path"
          as="li"
          class=" hover:bg-neutral-800 transition-colors"
        >
          <NuxtLink :to="item.href" class="flex items-baseline px-4 py-2">
            <Icon v-if="item.icon" :name="item.icon" class="mr-2 h-3.5 w-3.5 self-center text-neutral-400" />
            <span class="text-neutral-300">{{ item.title }}</span>
            <!-- <small class="text-neutral-400 ml-2">{{ category.title }}</small> -->
          </NuxtLink>
        </HeadlessMenuItem>
      </template>
    </HeadlessMenuItems>
  </HeadlessMenu>
  <hr v-if="(config.aside.level ?? 0) >= 4" class="border-neutral-800 my-3" />
</template>