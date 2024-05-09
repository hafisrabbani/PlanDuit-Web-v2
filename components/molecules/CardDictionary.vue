<template>
  <RouterLink :to="link" class="text-decoration-none">
  <div class="card">
    <div class="card-body">
      <div class="d-flex justify-content-around align-items-center">
      </div>
      <RowAtom class="justify-content-around align-items-center">
        <div class="col-1 text-center">
          <i class="fas fa-book fa-2x text-primary"></i>
        </div>
        <div class="col">
          <p class="text-dark pl-2">{{ title }}</p>
        </div>
        <div class="col-2 text-left">
          <h6 class="text-primary">
            <i class="fas fa-arrow-right"></i>
          </h6>
        </div>
      </RowAtom>
    </div>
  </div>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{ title: string, link: string }>();
</script>