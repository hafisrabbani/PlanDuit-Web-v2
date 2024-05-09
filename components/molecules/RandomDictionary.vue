<template>
  <h5 class="text-dark">Lihat Juga</h5>
  <LoaderAtom v-if="!isLoaded" class="mt-3"/>
  <RowAtom class="align-items-center justify-content-center" v-if="isLoaded">
    <div class="col-md-4 mt-3" v-for="item in random" :key="item.id">
      <CardDictionary :title="item.title" :link="`/dictionary/${item.id}`"/>
    </div>
  </RowAtom>
</template>

<script setup lang="ts">
import type { DictionariesDto } from "~/DTO/dictionary.dto";

const { $GetRandomDictionary } = useNuxtApp();

const random = ref([] as DictionariesDto[]);
const isLoaded = ref(false);

onMounted(() => {
  loadRandomDictionary();
  setInterval(() => {
    isLoaded.value = true;
  }, 500);
});
const loadRandomDictionary = async() => {
  random.value = await $GetRandomDictionary();
};
</script>