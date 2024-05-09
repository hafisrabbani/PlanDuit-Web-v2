<template>
  <div class="d-flex gap-2">
    <InputAtom
        placeholder="Search"
        v-model="searchQuery"
        :value="searchQuery"
        update:modelValue="searchQuery"/>
    <ButtonRounded
        class="btn-primary ml-1"
        v-if="!isSearch"
        @click="onSearch(searchQuery)">
      <i class="fas fa-search text-white"></i>
    </ButtonRounded>
    <ButtonReset
        class="btn-secondary ml-1"
        v-if="isSearch"
        @onReset="onReset"/>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('');
const emit = defineEmits(['onSearch']);
const isSearch = ref(false);
const onSearch = (query: string) => {
  isSearch.value = true;
  emit('onSearch', searchQuery.value);
}

const onReset = () => {
  isSearch.value = false;
  searchQuery.value = '';
  emit('onSearch', searchQuery.value);
}

watchEffect(() => {
  console.log("Log from SearchBar.vue", searchQuery.value)
})
</script>