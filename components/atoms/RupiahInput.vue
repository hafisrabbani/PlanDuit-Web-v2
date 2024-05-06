<template>
  <div class="form-group">
    <label for="basic-url" class="font-weight-medium">{{ inputName }}</label>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Rp</span>
      </div>
      <input
          type="text"
          class="form-control"
          placeholder="0"
          :value="input"
          @input="handleInput($event.target.value);emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const {$RupiahFormatter,$CleanDigit} = useNuxtApp();
const emit = defineEmits(['update:modelValue']);
const props = withDefaults(
    defineProps<{
      inputName: string;
      initialInput: string;
    }>(),
    {
      initialInput: '0',
    },
)
watch(() => props.initialInput, (value) => {
  input.value = $RupiahFormatter($CleanDigit(value));
});
const input = ref(props.initialInput);
onMounted(async () => {
  input.value = $RupiahFormatter($CleanDigit(input.value));
});
const handleInput = (value: string) => {
  input.value = $RupiahFormatter($CleanDigit(value));
};
</script>
