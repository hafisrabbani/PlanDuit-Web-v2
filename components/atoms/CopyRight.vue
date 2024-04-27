<template>
  <div class="col-md-6 text-center">
    <p class="text-dark">&copy;
      {{ year }} PlanDuit. All Rights Reserved.
    </p>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>