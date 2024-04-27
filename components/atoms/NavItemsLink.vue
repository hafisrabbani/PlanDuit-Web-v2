<template>
  <NuxtLink :to="link" class="nav-link text-dark">{{ label }}</NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  link: string;
}>();
</script>