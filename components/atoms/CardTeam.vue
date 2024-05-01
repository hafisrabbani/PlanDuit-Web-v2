<template>
  <div class="team-member text-center">
    <h4 class="member-name"> {{ name }}</h4>
    <p class="member-role">{{ role }}</p>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  name: string;
  role: string;
}>();
</script>