<template>
   <BaseHeader :featureName="featureName" :image="image" :description="description">
     <template #additional>
       <PlayStoreButton/>
     </template>
   </BaseHeader>
</template>

<script setup lang="ts">
const featureName = ref('Dictionary');
const image = ref('/images/hero_dictionary.png');
const description = ref('Selamat datang di PlanDuit Dictionary, Belajar Istilah Keuangan dengan Mudah dan Menyenangkan');
</script>