<template>
  <div class="nhsuk-grid-row" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'nhs-row',
  inheritAttrs: false
});
defineEmits([]);
</script>
