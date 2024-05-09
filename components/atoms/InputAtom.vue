<template>
  <input type="text" class="form-control" :placeholder="placeholder"
         :value="input"
         @input="handleInput($event.target.value);emit('update:modelValue', $event.target.value)">
</template>

<script setup lang="ts">
const props = defineProps<{ placeholder?: string, value?: string }>();
const emit = defineEmits(['update:modelValue']);
const input = ref(props.value ?? '');
watch(() => props.value, (value) => {
  input.value = value ?? '';
})
const handleInput = (value: string) => {
  input.value = value;
}
</script>