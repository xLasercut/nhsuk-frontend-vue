<template>
  <strong :class="classes" v-bind="$attrs">
    <slot></slot>
  </strong>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { NhsTagColor } from './types';
import { TAG_COLORS } from './constants';

defineOptions({
  inheritAttrs: false,
  name: 'nhs-tag'
});
defineEmits([]);
const props = defineProps({
  color: {
    type: String as PropType<NhsTagColor>,
    default: (): NhsTagColor => {
      return '';
    },
    validator: (val: NhsTagColor): boolean => {
      return TAG_COLORS.includes(val);
    }
  }
});
const classes = computed((): string => {
  let classes = ['nhsuk-tag'];

  if (props.color) {
    classes.push(`nhsuk-tag--${props.color}`);
  }

  return classes.join(' ');
});
</script>
