<template>
  <nav class="nhsuk-contents-list" v-bind="$attrs" role="navigation" :aria-label="ariaLabel">
    <h2 class="nhsuk-u-visually-hidden">{{ hiddenText }}</h2>
    <ol class="nhsuk-contents-list__list">
      <slot></slot>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineOptions({
  name: 'nhs-contents',
  inheritAttrs: false
});
defineEmits([]);
defineProps({
  ariaLabel: {
    type: String,
    default: (): string => {
      return 'Pages in this guide';
    }
  },
  hiddenText: {
    type: String,
    default: (): string => {
      return 'Contents';
    }
  }
});
</script>
