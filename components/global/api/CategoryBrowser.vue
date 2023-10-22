<script setup lang="ts">
const route = useRoute();
const navigation = inject<ComputedRef<any[]>>('apiNavigation');
const { navDirFromPath, navPageFromPath, navBottomLink } = useContentHelpers();

const dir = computed(() => navDirFromPath(route.path, navigation.value)?.filter(i => i._path !== route.path));
const categories = computed(() => dir.value?.map(i => ({ title: i.navigation?.title ?? i.title, icon: i.icon })) ?? []);
const items = computed(() => dir.value?.map(i => ({
  title: i.navigation?.title ?? i.title,
  icon: i.icon,
  items: i.children?.map(child => {
    const childPage = navPageFromPath(child._path, navigation.value);
    return {
      _path: child._path,
      to: childPage ? navBottomLink(childPage) ?? child._path : child._path,
      title: child.navigation?.title ?? child.title,
      description: child.navigation?.description ?? child.description,
      icon: child.icon
    }
  }) ?? []
}) ?? []));
</script>

<template>
  <div class="relative grid grid-cols-10 gap-8">
    <aside class="col-span-2 pb-8 overflow-x-hidden overflow-y-auto lg:block lg:self-start sm:mb-24 lg:max-h-[calc(100vh-64px)] lg:top-16 lg:sticky lg:pt-8 lg:-mt-8">
      <nav>
        <h4 class="py-1.5 font-semibold text-lg flex flex-col gap-y-2 pt-4">
          Categories
        </h4>
        <ul class="flex flex-col gap-y-1 px-0">
          <li v-for="category in categories" :key="category.title" class="inline-flex items-center group">
            <NuxtLink :to="{ path: route.path, hash: `#${category.title}` }" class="text-neutral-400 hover:text-white">{{ category.title }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>
    <div class="relative col-span-10 lg:col-span-8">
      <div class="min-h-[calc(100vh-18rem)]">
        <div v-for="category in items" :key="category.title">
          <h3 :id="category.title" class="font-semibold text-lg flex flex-col gap-y-2 pt-4 pb-1.5">
            {{ category.title }}
          </h3>
          <UPageGrid>
            <ULandingCard
              v-for="(card, subIndex) of category.items"
              :key="subIndex"
              v-bind="card"
              :ui="{
                background: 'dark:bg-gray-900/50 dark:lg:bg-gradient-to-b from-gray-700/50 to-gray-950/50',
                body: {
                  base: 'flex-1',
                  background: 'dark:bg-gray-800/50 dark:lg:bg-gray-900/50 backdrop-blur-lg'
                },
                title: 'my-1',
                description: 'my-0'
              }"
              class="flex flex-col"
            >
              <template #icon>
                <Icon :name="card.icon" class="h-6 w-6 my-1" />
              </template>
            </ULandingCard>
          </UPageGrid>
        </div>
      </div>
    </div>
  </div>
</template>