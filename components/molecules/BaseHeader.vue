<template>
  <RowAtom>
    <div class="col-md-6 text-right order-sm-first">
      <div class="text-center">
        <img :src="image" alt="Feature Image" class="img-fluid"/>
      </div>
      <br>
    </div>
    <div class="col-md-6">
      <h1 class="mt-5"><span class="text-primary"><span class="text-dark">Plan</span>Duit</span> {{ featureName }}</h1>
      <p>{{ description }}</p>
      <slot name="additional"/>
      <hr class="w-100">
    </div>
  </RowAtom>
</template>
<script setup lang="ts">
defineProps<{
  description: string,
  image: string,
  featureName: string
}>();
</script>