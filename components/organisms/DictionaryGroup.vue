<template>
  <div class="d-flex justify-content-center justify-content-md-start">
    <ButtonCategory
        v-for="item in listGroup"
        :key="item"
        class="m-1"
        :isActive="currentGroup === item"
        @click="changeGroup(item)">
      {{ item }}
    </ButtonCategory>
  </div>
</template>

<script setup lang="ts">
const listGroup = ref(['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'])
const emit = defineEmits(['selectCategory'])
const currentGroup = ref('A')
const changeGroup = (group: string) => {
  currentGroup.value = group
  emit('selectedGroup', group)
}
</script>