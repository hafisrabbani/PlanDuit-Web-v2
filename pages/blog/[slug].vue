<template>
<ContainerAtom>
  <div class="d-flex mt-5 align-items-center">
    <div class="btn btn-primary text-white border-radius">
      {{ article.category_name }}
    </div>
    <span class="ml-4">{{ article.created_at }}</span>
  </div>
  <RowContentCenter>
    <SectionTitle class="mt-3 text-left">
      {{ article.title }}
    </SectionTitle>
  </RowContentCenter>
  <RowContentCenter class="box-shadow mt-2">
    <ImageAtom :src="article.thumbnail" alt="Image Article" class="img-fluid border-radius" />
  </RowContentCenter>
  <SkeletonAtom/>
  <RowContentCenter class="mt-5">
    <div v-html="article.description"></div>
  </RowContentCenter>
</ContainerAtom>
</template>


<script setup lang="ts">
const {$GetDetailArticle} = useNuxtApp()
const route = useRoute();
import type {BlogDto} from "~/DTO/blog.dto";
const article = ref({} as BlogDto);
const slug = route.params.slug as string;

onMounted(async () => {
  article.value = await $GetDetailArticle(slug);
  article.value.created_at = FormatDate(article.value.created_at);

  useHead({
    title: 'Blog - ' + article.value.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: article.value.description,
      },
    ]
  })
});

const FormatDate = (date: string) => {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

</script>