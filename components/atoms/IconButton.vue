<template>
  <button class="navbar-toggler" type="button" @click="toggleNavigation">
    <i class="fas fa-bars text-dark"></i>
  </button>
</template>

<script lang="ts">
export default {
  methods: {
    toggleNavigation() {
      this.$emit('toggle');
    }
  }
}
</script>
