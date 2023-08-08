<template>
  <nav class="nhsuk-breadcrumb" v-bind="$attrs" :aria-label="ariaLabel">
    <div class="nhsuk-width-container">
      <ol class="nhsuk-breadcrumb__list">
        <slot></slot>
      </ol>
      <slot name="backlink"></slot>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  ariaLabel: {
    type: String,
    default: (): string => {
      return 'Breadcrumb';
    }
  }
});

defineEmits([]);
defineOptions({
  name: 'nhs-breadcrumb',
  inheritAttrs: false
});
</script>
