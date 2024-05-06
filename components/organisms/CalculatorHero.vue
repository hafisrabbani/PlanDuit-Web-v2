<template>
  <section class="bg-primary hiro-section">
    <ContainerAtom>
      <RowContentCenter class="align-items-center">
        <div class="col-md-6 order-md-1 order-2">
          <p class="font-size-h1">Hitung Investasi & Kelola Keuangan Anda!</p>
          <h1 class="text-dark">Gunakan PlanDuit Sekarang</h1>
        </div>
        <div class="col-md-6 order-md-2 text-center mb-5">
          <ImageAtom alt="hero-image" src="/images/hero-calculator.svg" image-class="img-fluid"/>
        </div>
      </RowContentCenter>
    </ContainerAtom>
  </section>
</template>

<script setup lang="ts">
const isActive = ref<boolean>(false)
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