<template>
  <button class="btn mx-2" :class="{'btn-primary': isActive, 'btn-outline-primary': !isActive}">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    isActive: boolean;
    text: string;
  }>(),
  {
    isActive: false,
  },
)
</script>