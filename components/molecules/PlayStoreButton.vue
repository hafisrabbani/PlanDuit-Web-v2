<template>
  <NuxtLink :to="LinkPlayStore" target="_blank">
    <ImageAtom src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play Badge" imageClass="img-fluid" style="max-width: 200px"/>
  </NuxtLink>
</template>

<script setup lang="ts">
import LinksConstant from "~/constant/links.constant";
const LinkPlayStore = LinksConstant.COMMON.PLAYSTORE;
</script>