<template>
  <details class="nhsuk-details" v-bind="$attrs">
    <summary class="nhsuk-details__summary">
      <span class="nhsuk-details__summary-text">
        {{ text }}
      </span>
    </summary>
    <div class="nhsuk-details__text">
      <slot></slot>
    </div>
  </details>
</template>

<script setup lang="ts">
defineOptions({
  name: 'nhs-details',
  inheritAttrs: false
});
defineEmits([]);
defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>
