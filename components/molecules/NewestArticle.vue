<template>
  <h3 class="mt-5 mb-2">Artikel Terbaru</h3>
  <CardBlog
      CardBlogClass="bg-primary"
      :slug="newestArticle.slug"
      :img-src="newestArticle.thumbnail"
      class="mb-3 mx-auto"
      btnClass="btn btn-outline-light text-decoration-none px-4 py-2"
  >
    <template #category>
      {{ newestArticle.category_name }}
    </template>
    <template #title>
      {{ newestArticle.title }}
    </template>
    <template #content>
      {{ newestArticle.short_description }}
    </template>
  </CardBlog>
</template>

<script setup lang="ts">
import type {BlogsDto} from "~/DTO/blog.dto";

const {$GetNewestArticle} = useNuxtApp();

const newestArticle = ref({} as BlogsDto);

onMounted(async () => {
  newestArticle.value = await $GetNewestArticle();
});
</script>