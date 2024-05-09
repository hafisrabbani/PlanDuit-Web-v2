<template>
  <div class="d-flex">
    <ButtonCategory
        v-for="item in category"
        :key="item.id"
        class="m-2"
        :isActive="selectedCategory === item.id"
        @click="emit('selectCategory', item.id);
        changeCategory(item.id)"
    >
      {{ item.name }}
    </ButtonCategory>
  </div>
</template>

<script setup lang="ts">
import type { BlogCategoryDto } from "~/DTO/blog.dto";
const emit = defineEmits(['selectCategory']);
const {$GetCategoryBlog} = useNuxtApp();
const category = ref([] as BlogCategoryDto[]);
const selectedCategory = ref<number | null>(null);

onMounted(async () => {
  category.value = await $GetCategoryBlog();
  category.value.unshift({ id: null, name: 'All' });
});

const changeCategory = (id: number | null) => {
  selectedCategory.value = id;
};
</script>
