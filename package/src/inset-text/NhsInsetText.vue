<template>
  <div class="nhsuk-inset-text" v-bind="$attrs">
    <span class="nhsuk-u-visually-hidden">{{ hiddenText }}</span>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'nhs-inset-text',
  inheritAttrs: false
});

defineEmits([]);
defineProps({
  hiddenText: {
    type: String,
    default: (): string => {
      return 'Information: ';
    }
  }
});
</script>
