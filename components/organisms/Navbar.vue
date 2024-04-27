<template>
  <nav class="navbar navbar-expand-lg glass sticky-top">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">
        <h3 class="text-dark"><span class="text-primary">Plan</span>Duit</h3>
      </NuxtLink>
      <IconButton @toggle="toggleNavigation" />
      <div class="collapse navbar-collapse" :class="{ 'show': isNavOpen }" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <NavLink label="Home" link="#" />
          <NavLink label="About" link="#about" />
          <NavLink label="Feature" link="#services" />
          <NavLink label="Our Teams" link="#ourteams" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import IconButton from '~/components/atoms/IconButton.vue';
import NavLink from '~/components/molecules/NavLink.vue';

export default {
  components: {
    IconButton,
    NavLink
  },
  data() {
    return {
      isNavOpen: false
    };
  },
  methods: {
    toggleNavigation() {
      this.isNavOpen = !this.isNavOpen;
    }
  }
}
</script>
