<template>
  <input type="text" class="form-control" :placeholder="placeholder" :value="value" @input="emit('input', value)">
</template>

<script setup lang="ts">
defineProps<{ placeholder?: string, value?: string }>();
const emit = defineEmits(['input']);
</script>