<template>
  <RowContentCenter>
    <h1>Blog</h1>
    <div v-if="!isLoaded">
      <p>Loading...</p>
    </div>
    <div v-else="isLoaded">
      <ul>
        <li v-for="article in articles" :key="article.id">
          <h2>{{ article.title }}</h2>
          <p v-html="article.short_description"></p>
        </li>
      </ul>
    </div>
  </RowContentCenter>
</template>

<script setup lang="ts">
import type { BlogDTO } from "~/DTO/BlogDTO";

const { $GetArticles } = useNuxtApp();
const articles = ref([] as BlogDTO['data']);
const isLoaded = ref(false);
onMounted(async () => {
  const { data } = await $GetArticles();
  articles.value = data;
  isLoaded.value = true;
});

useHead({
  title: 'Blog',
});
</script>
