<script setup lang="ts">
const route = useRoute();
const { page, navigation } = useContent();
const { navDirFromPath } = useContentHelpers();

const dir = navDirFromPath(route.path, navigation.value)?.filter(i => i._path !== route.path);
const categories = computed(() => dir?.map(i => ({ title: i.navigation?.title ?? i.title, icon: i.icon })) ?? []);
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
</script>

<template>
  <div class="relative grid grid-cols-10 gap-8">
    <aside class="col-span-2 pb-8 overflow-x-hidden overflow-y-auto lg:block lg:self-start sm:mb-24 lg:max-h-[calc(100vh-64px)] lg:top-16 lg:sticky lg:pt-8 lg:-mt-8">
      <nav>
        <h4 class="py-1.5 font-semibold text-lg flex flex-col gap-y-2 pt-8">
          Categories
        </h4>
        <ul class="flex flex-col py-4 gap-y-3">
          <li v-for="category in categories" :key="category.title" class="inline-flex items-center group">
            <NuxtLink :to="{ path: route.path, hash: `#${category.title}` }" class="text-neutral-400 hover:text-white">{{ category.title }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>
    <div class="relative col-span-10 lg:col-span-8">
      <div class="min-h-[calc(100vh-18rem)]">
        <div v-for="category in items" :key="category.title">
          <div :id="category.title" class="font-semibold text-lg flex flex-col gap-y-2 pt-8 pb-1.5">
            {{ category.title }}
          </div>
          <ul class="grid grid-cols-1 gap-8 my-4 sm:grid-cols-2 xl:grid-cols-3">
            <NuxtLink
              is="li"
              v-for="item in category.items"
              :key="item._path"
              :to="item._path"
              class="bg-neutral-900 rounded-xl border border-neutral-800 hover:border-cyan-500 px-4 py-3 transition-colors"
            >
              <span class="inline-block rounded-lg my-2 h-8 w-8">
                <Icon :name="item.icon ?? category.icon ?? 'mdi:document'" class="w-full h-full text-neutral-300" />
              </span>
              <div class="mt-1">
                <h3 class="py-1.5 font-semibold">
                  {{ item.title }}
                </h3>
                <p class="text-neutral-400 text-sm mb-2">
                  {{ item.description }}
                </p>
              </div>
            </NuxtLink>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>