<template>
    <button type="button" class="btn" :class="ButtonClass">
    <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineProps<{ ButtonClass?: string}>();

</script>