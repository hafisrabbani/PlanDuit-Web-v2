<template>
  <ContainerAtom class="mt-5">
    <DictionaryHeader/>
  </ContainerAtom>
  <ContainerAtom class="mt-3">
   <CardDetailDictionary :id="id" @detail="handleDetail($event)"/>
  </ContainerAtom>
  <ContainerAtom class="mt-5">
    <RandomDictionary/>
  </ContainerAtom>
</template>

<script setup lang="ts">
const route = useRoute();
const id = parseInt(route.params.id as string);
import type {DictionaryDto} from "~/DTO/dictionary.dto";

const handleDetail = (data: DictionaryDto) => {
  useHead({
    title: data.title + ' - Dictionary',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: data.description,
      },
    ],
  });
}
</script>