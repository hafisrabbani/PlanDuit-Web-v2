<template>
  <div class="card" :class="CardBlogClass">
    <div class="card-body">
      <BadgeCategory>
        <slot name="category"></slot>
      </BadgeCategory>
      <div class="row justify-content-center align-items-center">
        <div class="col-md-6 order-sm-2 order-xs-2">
          <BlogTitle class="text-left">
            <slot name="title"></slot>
          </BlogTitle>
          <SectionText class="card-text">
            <slot name="content"></slot>
          </SectionText>
          <ButtonRounded>
            <RouterLink :to="'/blog/' + slug" :class="btnClass">
              Read More
            </RouterLink>
          </ButtonRounded>
        </div>
        <div class="col-md-6">
          <div class="text-center">
            <ImageAtom :src="imgSrc" alt="Banner Card Blog" class="img-fluid"></ImageAtom>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
      imgSrc?: string;
      slug: string;
      CardBlogClass?: string;
      btnClass?: string;
    }>(),
    {
      imgSrc: 'https://laclosette.com/wp-content/uploads/2017/10/500x300.png',
      CardBlogClass: 'bg-light mb-3 mx-auto',
    }
)
</script>

