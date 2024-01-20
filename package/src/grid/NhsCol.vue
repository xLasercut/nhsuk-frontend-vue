<template>
  <div :class="classes" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { NhsColSize } from './types';
import { NHS_COL_SPANS } from './constants';

defineOptions({
  name: 'nhs-col',
  inheritAttrs: false
});
defineEmits([]);
const props = defineProps({
  span: {
    type: Number as PropType<NhsColSize>,
    default: (): NhsColSize => {
      return 100;
    },
    validator: (val: NhsColSize): boolean => {
      return val in NHS_COL_SPANS;
    }
  }
});
const classes = computed((): string => {
  return `nhsuk-grid-column-${NHS_COL_SPANS[props.span]}`;
});
</script>
