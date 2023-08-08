<template>
  <span class="nhsuk-error-message" :id="id" v-bind="$attrs">
    <span class="nhsuk-u-visually-hidden">{{ hiddenText }}</span>
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
  name: 'nhs-error-text'
});
defineEmits([]);
defineProps({
  hiddenText: {
    type: String,
    default: (): string => {
      return 'Error: ';
    }
  },
  id: {
    type: String
  }
});
</script>
