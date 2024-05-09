<template>
  <ContainerAtom class="mt-5">
    <DictionaryHeader/>
  </ContainerAtom>
  <ContainerAtom class="mt-3">
    <SearchBar @onSearch="handleSearch"/>
  </ContainerAtom>
  <ContainerAtom class="overflow-auto">
    <div class="row">
      <div class="form-group">
      </div>
      <DictionaryGroup @selectedGroup="handleGroup($event)"/>
    </div>
  </ContainerAtom>
  <ContainerAtom class="mt-2">
    <LoaderAtom v-if="!isLoaded" class="mt-3"/>
    <RowAtom class="align-items-center justify-content-center" v-if="isLoaded">
      <div class="col-md-4 mt-3" v-for="item in data" :key="item.id">
        <CardDictionary :title="item.title" :link="`/dictionary/${item.id}`"/>
      </div>
      <div v-if="data.length === 0">
        <NotFoundMsg/>
      </div>
    </RowAtom>
  </ContainerAtom>
</template>

<script setup lang="ts">
import NotFoundMsg from "~/components/molecules/NotFoundMsg.vue";

const {$GetDictionary} = useNuxtApp();
import type {DictionariesDto} from "~/DTO/dictionary.dto";

const isLoaded = ref(false);
const currentGroup = ref('A');
const data = ref([] as DictionariesDto[]);
let searchQuery = ref('');
onMounted(async () => {
  await loadDictionary();
});

const loadDictionary = async (
    options: {
      group: string,
      search: string
    } = {group: currentGroup.value, search: ''},
) => {
  isLoaded.value = false;
  isLoaded.value = false;
  data.value = await $GetDictionary({
    group: options.group,
    search: options.search,
  });
  setInterval(() => {
    isLoaded.value = true;
  }, 500);
};


const handleGroup = (group: string) => {
  currentGroup.value = group;
  loadDictionary({group: currentGroup.value, search: ''});
};

const handleSearch = (search: string) => {
  searchQuery.value = search;
  loadDictionary({group: currentGroup.value, search: searchQuery.value});
};

useHead({
  title: 'Dictionary',
});
</script>
