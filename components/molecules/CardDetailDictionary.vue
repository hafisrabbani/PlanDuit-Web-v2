<template>
  <div class="card border-primary">
    <div class="card-body">
      <div v-if="!isLoaded">
        <LoaderAtom/>
      </div>
      <div v-else>
        <h5 class="card-title text-primary">{{ data.title }}</h5>
        {{ data.description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{id: number }>();
import type {DictionaryDto} from "~/DTO/dictionary.dto";

const {$GetDetailDictionary} = useNuxtApp();
const data = ref({} as DictionaryDto);
const isLoaded = ref(false);
const loadDetailDictionary = async (id: number) => {
  data.value = await $GetDetailDictionary(id);
  isLoaded.value = true;
  emit('detail', data.value);
};
const emit = defineEmits(['detail']);
onMounted(() => {
  loadDetailDictionary(props.id);
  setInterval(() => {
    isLoaded.value = true;
  }, 500);
});


</script>