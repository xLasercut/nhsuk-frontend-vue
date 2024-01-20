<template>
  <nav
    class="nhsuk-u-margin-bottom-4 nhsuk-u-margin-top-4"
    id="nhsuk-nav-a-z"
    role="navigation"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <ol class="nhsuk-list nhsuk-u-clear nhsuk-u-margin-0" role="list">
      <slot></slot>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
  name: 'nhs-nav-az'
});
defineEmits([]);
defineProps({
  ariaLabel: {
    type: String,
    default: (): string => {
      return 'A to Z Navigation';
    }
  }
});
</script>
