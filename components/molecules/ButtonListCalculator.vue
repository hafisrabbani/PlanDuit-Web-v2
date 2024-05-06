<template>
  <div class="d-flex">
    <ButtonCalculatorAtom v-for="calculator in ListCalculator" :link="calculator.link" :text="calculator.name" :key="calculator.name" :isActive="calculator.link === CurrentPath"/>
  </div>
</template>

<script setup lang="ts">
import LinksConstant from "~/constant/links.constant";
const ListCalculator = ref(LinksConstant.CALCULATOR);
const CurrentPath = useRoute().path;

onMounted(() => {
  console.log('ListCalculator', ListCalculator);
  console.log('CurrentPath', CurrentPath);
});
</script>