<template>
  <a class="nhsuk-skip-link" href="#maincontent" @click="$emit('click')" v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
  name: 'nhs-skip-link'
});
defineEmits(['click']);
</script>
