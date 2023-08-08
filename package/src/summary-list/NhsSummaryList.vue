<template>
  <dl :class="classes" v-bind="$attrs">
    <div class="nhsuk-summary-list__row" v-for="(item, index) in data" :key="index">
      <slot name="item" :item="item"></slot>
    </div>
  </dl>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  inheritAttrs: false,
  name: 'nhs-summary-list'
});
defineEmits([]);
const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  border: {
    type: Boolean,
    default: (): boolean => {
      return true;
    }
  }
});
const classes = computed((): string => {
  const classes = ['nhsuk-summary-list'];

  if (!props.border) {
    classes.push('nhsuk-summary-list--no-border');
  }

  return classes.join(' ');
});
</script>
