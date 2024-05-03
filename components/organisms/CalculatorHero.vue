<template>
  <section class="bg-primary hiro-section">
    <ContainerAtom>
      <RowContentCenter class="align-items-center">
        <div class="col-md-6 order-md-1 order-2">
          <p class="font-size-h1">Hitung Investasi & Kelola Keuangan Anda!</p>
          <h1>Gunakan PlanDuit Sekarang</h1>
        </div>
        <div class="col-md-6 order-md-2 text-center mb-5">
          <ImageAtom alt="hero-image" src="/images/hero-calculator.svg" image-class="img-fluid"/>
        </div>
      </RowContentCenter>
    </ContainerAtom>
  </section>
  <section style="margin-top: -2.5rem; margin-bottom: 3rem;">
    <ContainerAtom>
      <RowContentCenter>
        <div class="col-xl-3 d-none d-md-block d-lg-none d-lg-block d-xl-none d-xl-block">
          <div class="card-shadow p-4">
            <ButtonCalculatorAtom :src="src" :is-active="isActive"/>
          </div>
        </div>
        <div class="col-md-9 col-xl-9 col-sm-12 .d-block">
          <div class="card-shadow p-4">
            <h2 class="text-center">Lorem Ipsum</h2>
            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt
              ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </RowContentCenter>

    </ContainerAtom>
  </section>
</template>

<script setup lang="ts">
const isActive = ref<boolean>(false)
const src = ref<string>('/images/icon/calculator/investasi.svg')
</script>

<style scoped>
.hiro-section img {
  max-width: 80%;
  height: auto;
}

.font-size-h1 {
  font-size: 2.5rem;
}
</style>