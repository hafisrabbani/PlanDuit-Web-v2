<template>
  <footer class="hiro-footer wow fadeInUp">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <h4 class="text-primary"><span class="text-dark">Plan</span>Duit</h4>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <p class="text-dark">&copy;
            {{ year }} PlanDuit. All Rights Reserved.
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <nav class="nav" style="font-size: 1rem !important;">
          <NuxtLink to="/" class="nav-link nav-footer text-dark">Home</NuxtLink>
          <NuxtLink to="https://play.google.com/store/apps/details?id=com.pens.planduit.release"
             class="nav-link nav-footer text-dark">Download</NuxtLink>
          <NuxtLink to="legal/privacy-policy" class="nav-link nav-footer text-dark">Privacy Policy</NuxtLink>
          <NuxtLink to="legal/terms-of-service" class="nav-link nav-footer text-dark">Terms of Service</NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>