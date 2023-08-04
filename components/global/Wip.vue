<template>
  <Alert type="warning" icon="mdi:alert" class="mb-5">
    <span>
      <ContentSlot :use="$slots.default" unwrap="p">
        Docs migration currently in progress
      </ContentSlot>
    </span>
  </Alert>
</template>