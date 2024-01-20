<template>
  <ol v-bind="$attrs">
    <slot></slot>
  </ol>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
});
defineEmits([]);
</script>
