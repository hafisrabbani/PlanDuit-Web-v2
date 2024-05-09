<template>
  <div class="d-flex gap-2">
    <InputAtom placeholder="Search" v-model="searchQuery" />
    <ButtonRounded @click="onSearch">Search</ButtonRounded>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('');
const emit = defineEmits(['onSearch']);

const onSearch = () => {
  emit('onSearch', searchQuery.value);
  console.log(searchQuery.value);
}
</script>