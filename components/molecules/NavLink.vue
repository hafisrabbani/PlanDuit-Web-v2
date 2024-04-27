<template>
  <li class="nav-item">
    <a class="nav-link text-dark" :href="link">{{ label }}</a>
  </li>
</template>

<script setup lang="ts">
defineProps<{ label: string; link: string }>();
</script>
