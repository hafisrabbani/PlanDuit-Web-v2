<template>
  <ContainerAtom class="mt-5">
    <RowContentCenter>
      <div class="text-center">
        <ImageAtom src="/images/404.png" alt="404" class="img-fluid" style="max-width: 400px;"/>
      </div>
      <div class="col-md-12">
        <h1 class="text-center text-dark">{{ error.statusCode}}</h1>
        <h5 class="text-center text-dark">{{ getMsg(error.statusCode) }}</h5>
        <p class="text-center text-dark" v-html="getCaption(error.statusCode)"></p>
        <div class="text-center">
          <ButtonRounded class="btn-primary">
            <RouterLink to="/" class="text-white text-decoration-none">
              <i class="fas fa-arrow-left"></i>
              <span class="font-weight-medium px-5">Back to Home</span>
            </RouterLink>
          </ButtonRounded>
        </div>
      </div>
    </RowContentCenter>
  </ContainerAtom>
</template>
<script setup lang="ts">
const props = defineProps(['error']);

const getMsg = (statusCode: number) => {
  switch (statusCode) {
    case 404:
      return 'Page not found';
    case 500:
      return 'Internal server error';
    default:
      return 'Something went wrong';
  }
}

const getCaption = (statusCode: number) => {
  switch (statusCode) {
    case 404:
      return 'Sepertinya kamu <span class="font-weight-bold text-danger"><del>SESAT</del></span> tersesat di jalan yang salah';
    case 500:
      return 'Internal server error';
    default:
      return 'Something went wrong';
  }
}

useHead({
  title: props.error.statusCode + ' ' + getMsg(props.error.statusCode)
})
</script>