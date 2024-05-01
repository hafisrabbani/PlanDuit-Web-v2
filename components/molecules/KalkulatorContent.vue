<template>
  <div class="col-md-4 mb-4 mb-md-0 wow fadeInUp">
    <KalkulatorTitle> {{ title_kalkulator }} </KalkulatorTitle>
    <KalkulatorList v-for="item in list" :key="item">{{ item }}</KalkulatorList>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title_kalkulator: string;
  list: Array<string>;
}>();
</script>
