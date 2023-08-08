<template>
  <div
    ref="errorSummary"
    class="nhsuk-error-summary"
    v-bind="$attrs"
    aria-labelledby="error-summary-title"
    role="alert"
    tabindex="-1"
  >
    <h2 class="nhsuk-error-summary__title" id="error-summary-title">
      <slot name="title" :title="title">{{ title }}</slot>
    </h2>
    <div class="nhsuk-error-summary__body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';

defineOptions({
  name: 'nhs-error-summary',
  inheritAttrs: false
});
defineEmits([]);
defineProps({
  title: {
    type: String,
    required: true
  }
});
const errorSummary = ref<HTMLDivElement>();

onMounted(() => {
  nextTick(() => {
    if (errorSummary.value) {
      errorSummary.value.focus();
    }
  });
});
</script>
