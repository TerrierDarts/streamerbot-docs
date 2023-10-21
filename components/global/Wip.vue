<script setup lang="ts">

</script>

<template>
  <UAlert :prose="false" color="amber" icon="i-mdi-alert" class="mb-5" variant="soft">
    <template #title>
      <ContentSlot :use="$slots.default" unwrap="p" class="m-0">
        Docs migration currently in progress
      </ContentSlot>
    </template>
  </UAlert>
</template>