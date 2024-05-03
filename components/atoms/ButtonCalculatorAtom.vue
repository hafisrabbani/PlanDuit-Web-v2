<template>
  <button class="btn" :class="{'btn-primary': isActive, 'btn-outline-primary': !isActive}">
  </button>
    <img :src="src" alt="calculator icon" class="img-fluid" style="color: #44D7B6; width: 50px; height: 50px;"/>
</template>

<script setup lang="ts">
defineProps<{
  isActive: boolean,
  src: string
}>()
</script>

<style scoped>
svg {
  width: 50px;
  height: 50px;
  fill: #44D7B6;
}
</style>