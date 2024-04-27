<template>
  <div class="container" :class="containerClass">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{ containerClass?: string }>();
</script>