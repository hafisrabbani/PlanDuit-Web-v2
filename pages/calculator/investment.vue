<template>
  <RowContentCenter>
    <h3 class="text-center text-dark">Kalkulator Investasi</h3>
  </RowContentCenter>
  <RowContentCenter>
    <div class="col-md-6">
      <RupiahInput v-model="investment" inputName="Investasi" update:ModelValue="investment" :initial-input="investment"/>
      <AutoFillButton fill-value="10000000" label="10 Juta" @autoFill="handleAutoFill($event)"/>
      <AutoFillButton fill-value="50000000" label="50 Juta" @autoFill="handleAutoFill($event)"/>
      <AutoFillButton fill-value="100000000" label="100 Juta" @autoFill="handleAutoFill($event)"/>
      <AutoFillButton fill-value="1000000000" label="1 Miliar" @autoFill="handleAutoFill($event)"/>
    </div>
    <div class="col-md-6">
      <RupiahInput v-model="investment" inputName="Investasi" update:ModelValue="investment" :initial-input="investment"/>
    </div>
  </RowContentCenter>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'calculator-layout'
})
enum timeType {
  year = 'year',
  month = 'month',
}
const investment = ref('0');
const investmentPerPeriod = ref('0');
const period = ref('0');
const interest = ref('0');
const initialInvestment = ref('0');
const time = ref(timeType.month);

const handleAutoFill = (value: number) => {
  investment.value = value.toString();
};
</script>