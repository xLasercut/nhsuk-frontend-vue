<template>
  <dt class="nhsuk-summary-list__key" v-bind="$attrs">
    <slot></slot>
  </dt>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
});
defineEmits([]);
</script>
