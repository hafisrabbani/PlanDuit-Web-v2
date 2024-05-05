<template> 
    <RowContentCenter>
      <ButtonRounded class="btn-news m-2" :class="{ active: isActive }"><slot></slot></ButtonRounded>
    </RowContentCenter>
</template>
<script setup lang="ts">
defineProps<{
  isActive?: boolean;
}>();
</script>

<style scoped>
.active {
  background-color: #44D7B6;
  color: #FDFDFD;
}
</style>