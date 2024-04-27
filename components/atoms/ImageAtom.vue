<template>
  <img :src="src" :alt="alt" :class="imageClass">
</template>

<script setup>
defineProps({
  src: {type: String, required: true},
  alt: {type: String, required: true},
  imageClass: {type: String, required: false}
});
</script>
