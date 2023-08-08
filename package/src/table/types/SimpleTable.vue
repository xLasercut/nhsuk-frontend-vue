<template>
  <table role="table" :class="classes" v-bind="$attrs">
    <slot></slot>
  </table>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { NhsHeadingType } from '../../shared/heading-switcher/types';

defineOptions({
  inheritAttrs: false
});
defineEmits([]);
const props = defineProps({
  heading: {
    type: String
  },
  headingLevel: {
    type: Number as PropType<NhsHeadingType>,
    default: (): NhsHeadingType => {
      return 3;
    }
  },
  responsive: {
    type: Boolean,
    default: (): boolean => {
      return true;
    }
  }
});
const classes = computed((): string => {
  if (props.responsive) {
    return 'nhsuk-table-responsive';
  }
  return 'nhsuk-table';
});
</script>
