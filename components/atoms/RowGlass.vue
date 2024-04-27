<template>
  <div class="row card-glass" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{ rowClass?: string }>();
</script>
