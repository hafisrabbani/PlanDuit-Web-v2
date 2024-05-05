<template>
  <ContainerAtom>
    <HeaderBlogs/>
    <div v-if="!isLoaded">
      <LoaderAtom/>
    </div>
    <div v-if="isLoaded">
      <NewestArticle/>
      <CategoryBlogSection @select-category="handleCategory($event)"/>
      <CardBlog
          v-for="(item, index) in articles"
          :key="item.id"
          :slug="item.slug"
          :img-src="item.thumbnail"
          v-if="index !== 0"
          class="bg-light mb-3 mx-auto"
          btnClass="btn btn-primary text-decoration-none px-4 py-2 text-white">
        <template #category>
          {{ item.category_name }}
        </template>
        <template #title>
          {{ item.title }}
        </template>
        <template #content>
          {{ item.short_description }}
        </template>
      </CardBlog>
    </div>
  </ContainerAtom>
</template>

<script setup lang="ts">
import type {BlogsDto} from "~/DTO/blog.dto";

const {$GetArticles} = useNuxtApp();
const articles = ref([] as BlogsDto[]);
const isLoaded = ref(false);
const search = ref('');
const selectedCategory = ref<number | null>(null);
const newestArticle = ref({} as BlogsDto);
const limit = ref(5);
onMounted(async () => {
  await loadBlog();
});

const loadBlog = async () => {
  articles.value = await $GetArticles({
    limit: limit.value,
    category_id: selectedCategory.value,
  });
  setInterval(() => {
    isLoaded.value = true;
  }, 500);
};

const handleCategory = (id: number | null) => {
  selectedCategory.value = id;
  loadBlog();
};

useHead({
  title: 'Blog',
});
</script>
