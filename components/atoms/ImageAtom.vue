<template>
  <img :src="src" :alt="alt" :class="imageClass">
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
  imageClass?: string;
}>();
</script>
