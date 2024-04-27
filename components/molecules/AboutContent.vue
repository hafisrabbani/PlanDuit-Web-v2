<template>
  <slot></slot>
  <SectionTitle v-if="title">{{ title }}</SectionTitle>
  <SectionText>{{ text }}</SectionText>
</template>

<script setup>
defineProps({
  title: {type: String, required: false},
  text: {type: String, required: true}
});
</script>