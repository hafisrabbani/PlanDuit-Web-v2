<template>
  <button class="btn btn-outline-primary" @click="autoFill(fillValue)" style="margin-right: 10px; font-size: 0.5rem;">
    <span class="font-weight-bold">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['autoFill']);
defineProps<{
  fillValue: number;
  label: string;
}>();
const autoFill = (value: number) => {
  console.log(value)
  emit('autoFill', value);
};

</script>