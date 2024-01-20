<template>
  <dd class="nhsuk-summary-list__value" v-bind="$attrs">
    <slot></slot>
  </dd>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
});
defineEmits([]);
</script>
