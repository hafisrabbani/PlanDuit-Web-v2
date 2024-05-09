<template>
  <ButtonRounded
      class="btn-secondary"
      @click="onReset">
    <i class="fas fa-times text-white"></i>
  </ButtonRounded>
</template>

<script setup lang="ts">
const emit = defineEmits(['onReset']);
const onReset = () => {
  emit('onReset');
}
</script>