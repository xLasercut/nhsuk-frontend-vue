<template>
  <ul v-bind="$attrs">
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
});
defineEmits([]);
</script>
