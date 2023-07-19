<script setup lang="ts">
const route = useRoute();
const { navigation } = useContent();
const { navDirFromPath } = useContentHelpers();

const m = route.path.match(/^(\/[\w-]\/[\w-]+)\//i);
const path = m && m[1] ? m[1] : route.path;

const dir = navDirFromPath(path, navigation.value)?.filter(i => i._path !== route.path);
const items = computed(() => dir?.map(i => ({
  title: i.navigation?.title ?? i.title,
  icon: i.icon,
  items: i.children?.map(child => ({
    _path: child._path,
    title: child.navigation?.title ?? child.title,
    description: child.navigation?.description ?? child.description,
    icon: child.icon
  })) ?? []
}) ?? []));

const currentCategory = computed(() => items?.value?.find(i => i.items.some(item => route.path.startsWith(item._path))));
const currentItem = computed(() => {
  return currentCategory.value?.items.find(i => route.path.startsWith(i._path));
});
</script>

<template>
  <HeadlessMenu as="div" class="relative min-w-[250px] bg-neutral-900 border border-neutral-800 rounded-lg text-sm mr-6">
    <HeadlessMenuButton class="min-w-full px-4 py-1 flex justify-between items-center">
      <div class="flex items-baseline pt-1 text-sm">
        <Icon v-if="currentItem?.icon" :name="currentItem?.icon" class="self-center mr-2 h-4 w-4" />
        <span>{{ currentItem?.title }}</span>
        <small class="text-neutral-400 ml-2">{{ currentCategory?.title }}</small>
      </div>
      <Icon name="mdi:chevron-down" class="text-neutral-400 w-6 h-4 -mr-2" />
    </HeadlessMenuButton>
    <HeadlessMenuItems as="ul" class="absolute z-20 left-0 w-full max-h-[400px] overflow-y-auto flex flex-col bg-neutral-900 border border-neutral-800 py-2">
      <template v-for="category in items">
        <HeadlessMenuItem
          v-for="item in category.items"
          :key="item._path"
          as="li"
          class=" hover:bg-neutral-800 transition-colors"
        >
          <NuxtLink :to="item._path" class="flex items-baseline px-4 py-2">
            <Icon v-if="item.icon" :name="item.icon" class="mr-2 h-3.5 w-3.5 self-center text-neutral-400" />
            <span>{{ item.title }}</span>
            <small class="text-neutral-400 ml-2">{{ category.title }}</small>
          </NuxtLink>
        </HeadlessMenuItem>
      </template>
    </HeadlessMenuItems>
  </HeadlessMenu>
</template>