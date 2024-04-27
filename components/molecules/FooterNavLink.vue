<template>
  <NavItemsLink v-for="item in Items" :key="item.name" :label="item.name" :link="item.link" />
</template>

<script setup lang="ts">
import LinksConstant from "~/constant/links.constant";
const Items = ref(LinksConstant.FOOTER);
</script>