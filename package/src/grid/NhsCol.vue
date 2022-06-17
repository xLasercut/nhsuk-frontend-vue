<template>
  <div :class="classes" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { NhsColSize } from './types';

const NHS_COL_SPANS = {
  100: 'full',
  75: 'three-quarters',
  66: 'two-thirds',
  50: 'one-half',
  33: 'one-third',
  25: 'one-quarter'
};

export default defineComponent({
  name: 'nhs-col',
  inheritAttrs: false,
  emits: [],
  props: {
    span: {
      type: Number as PropType<NhsColSize>,
      default: (): NhsColSize => {
        return 100;
      },
      validator: (val: NhsColSize): boolean => {
        return val in NHS_COL_SPANS;
      }
    }
  },
  setup(props) {
    const classes = computed((): string => {
      return `nhsuk-grid-column-${NHS_COL_SPANS[props.span]}`;
    });
    return { classes };
  }
});
</script>
