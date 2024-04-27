<template>
  <slot></slot>
  <SectionTitle v-if="title">{{ title }}</SectionTitle>
  <SectionText>{{ text }}</SectionText>
</template>

<script setup lang="ts">
defineProps<{ title?: string; text: string }>();
</script>