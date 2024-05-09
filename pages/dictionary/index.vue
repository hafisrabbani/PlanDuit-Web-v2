<template>
  <ContainerAtom>
    <SearchBar @onSearch="handleSearch"/>
  </ContainerAtom>
  <ContainerAtom class="overflow-auto">
    <div class="row">
      <div class="form-group">
      </div>
      <DictionaryGroup @selectedGroup="handleGroup($event)"/>
    </div>
  </ContainerAtom>
</template>

<script setup lang="ts">
const {$GetDictionary} = useNuxtApp();
import type {DictionariesDto} from "~/DTO/dictionary.dto";
const currentGroup = ref('A');
const data = ref([] as DictionariesDto[]);
onMounted(async () => {
  await loadDictionary();
});

const loadDictionary = async (group: string = currentGroup.value, search: string = '') => {
  data.value = await $GetDictionary({
    group: group,
    search: search,
  });
};


const handleGroup = (group: string) => {
  currentGroup.value = group;
  loadDictionary();
};

const handleSearch = (search: string) => {
  console.log(search);
};

useHead({
  title: 'Dictionary',
});
</script>