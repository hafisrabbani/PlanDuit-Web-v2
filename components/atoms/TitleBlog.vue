<template>
    <h4 :class="ClassTitle">
    <slot></slot>
    </h4>
</template>

<script setup lang="ts">
defineProps<{
  ClassTitle?: string;
}>();
</script>