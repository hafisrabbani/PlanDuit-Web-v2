<template>
  <ContainerAtom container-class="wow fadeInUp">
    <div class="hiro-header-carousel carousel slide" data-ride="carousel" data-interval="3500">
      <div class="row">
        <div class="col-md-6 order-md-2 text-center mb-5">
          <ImageAtom :alt="alt" :src="src" image-class="img-fluid" />
        </div>
        <div class="col-md-6 order-md-1">
          <HeroContent />
        </div>
      </div>
    </div>
  </ContainerAtom>
</template>

<script setup lang="ts">
const src = ref('/images/logo-planduit.jpg');
const alt = ref('hero-image');
</script>
