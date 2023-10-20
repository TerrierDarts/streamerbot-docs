<script setup lang="ts">
const navigation = inject('navigation')
</script>

<template>
  <div>
    <UMain>
      <UContainer>
        <UPage>
          <slot />
        </UPage>
      </UContainer>
    </UMain>
  </div>
</template>