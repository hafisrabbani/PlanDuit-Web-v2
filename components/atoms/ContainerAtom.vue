<template>
  <div class="container" :class="containerClass">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  containerClass: {type: String, required: false}
})
</script>