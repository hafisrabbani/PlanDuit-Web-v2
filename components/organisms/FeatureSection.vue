<template>
  <section class="hiro-section" id="feature">
    <ContainerAtom>
      <div class="service-section">
        <SectionTitle class="mb-5">Feature</SectionTitle>
        <RowContentCenter>
          <KalkulatorContent
            v-for="kalkulator in kalkulators"
            :title_kalkulator="kalkulator.title_kalkulator"
            :list="kalkulator.list"
          />
        </RowContentCenter>
      </div>
    </ContainerAtom>
  </section>
</template>

<script setup lang="ts">
import FeatureConstant from "~/constant/feature.constant"; 
const kalkulators = ref(FeatureConstant.KALKULATOR);
</script>


