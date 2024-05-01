<template>
  <p class="section-text-light" :class="ClassSection">
    <slot></slot>
  </p>
</template>


<script setup lang="ts">
defineProps<{ ClassSection?: string; }>();
</script>