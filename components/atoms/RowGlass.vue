<template>
  <div class="row card-glass" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  rowClass: {type: String, required: false}
})
</script>
