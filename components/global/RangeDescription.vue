<script setup lang="ts">
</script>

<template>
  <ProseP>Filter events between a specified <ProseCodeInline>Min</ProseCodeInline> and <ProseCodeInline>Max</ProseCodeInline></ProseP>
  <ProseLi>
    <ProseCodeInline>Any Value</ProseCodeInline>
    <span class="text-sm text-neutral-400">- Leave both min and max empty to accept any value</span>
  </ProseLi>
  <ProseLi>
    <ProseCodeInline>Exact Value</ProseCodeInline>
    <span class="text-sm text-neutral-400">- Enter only a <ProseCodeInline>Max</ProseCodeInline> to trigger on a specific value</span>
  </ProseLi>
  <ProseLi>
    <ProseCodeInline>Greater Than</ProseCodeInline>
    <span class="text-sm text-neutral-400">- Enter only a <ProseCodeInline>Min</ProseCodeInline> to trigger on any value greater than the specified value</span>
  </ProseLi>
  <ProseLi>
    <ProseCodeInline>Range</ProseCodeInline>
    <span class="text-sm text-neutral-400">- Enter both a min and max to trigger within a desired range</span>
  </ProseLi>
</template>