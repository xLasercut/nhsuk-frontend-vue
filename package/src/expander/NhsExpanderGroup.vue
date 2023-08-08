<template>
  <div class="nhsuk-expander-group" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'nhs-expander-group',
  inheritAttrs: false
});
defineEmits([]);
</script>
