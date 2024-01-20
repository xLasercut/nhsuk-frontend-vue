<template>
  <dd class="nhsuk-summary-list__actions" v-bind="$attrs">
    <slot></slot>
  </dd>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
});
defineEmits([]);
</script>
