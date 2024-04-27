<template>
  <li class="nav-item">
    <a class="nav-link text-dark" :href="link">{{ label }}</a>
  </li>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    link: { type: String, required: true }
  }
}
</script>
