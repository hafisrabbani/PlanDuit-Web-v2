<template>
  <nav class="navbar navbar-expand-lg glass sticky-top">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">
        <LogoTextAtom />
      </NuxtLink>
      <IconButton @toggle="toggleNavigation" />
      <div class="collapse navbar-collapse" :class="{ 'show': isNavOpen }" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <NavItemsLink v-for="item in Items" :key="item.name" :label="item.name" :link="item.link" />
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import LinksConstant from "~/constant/links.constant";

const Items = ref(LinksConstant.NAVBAR);
const isNavOpen = ref(false);
function toggleNavigation(): void {
  isNavOpen.value = !isNavOpen.value;
}
</script>