<script setup lang="ts">
import { gt } from 'semver';

const route = useRoute();

// Redirect to latest changelog page
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(queryContent('changelogs')))
const path = navigation.value?.[0].children?.sort((a, b) => gt(a.version, b.version) ? -1 : 1).at(0)._path;
if (path && route.path === '/changelogs') {
  navigateTo(path);
}
</script>