<template>
  <div :class="['skeleton-loading', size]">
    <div class="skeleton-item"></div>
    <div class="skeleton-item"></div>
    <div class="skeleton-item"></div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
      size?: string;
    }>(),
    {
      size: 'skeleton-lg'
    }
)
</script>
