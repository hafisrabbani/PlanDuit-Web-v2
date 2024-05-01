<template>
  <div class="col-md-4 mb-4 mb-md-0 wow fadeInUp">
    <KalkulatorTitle> {{ TipsTrik_Title }} </KalkulatorTitle>
    <SectionText class="{{ ClassSection }}"> {{ TipsTrik_Text }} </SectionText>
  </div>
</template>

<script setup lang="ts">
const ClassSection: string = "service-text";

defineProps<{
  TipsTrik_Title: string;
  TipsTrik_Text: string;
}>();
</script>
