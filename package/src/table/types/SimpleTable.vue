<template>
  <table role="table" :class="classes" v-bind="$attrs">
    <slot></slot>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { NhsHeadingType } from '../../shared/heading-switcher/types';

export default defineComponent({
  inheritAttrs: false,
  emit: [],
  props: {
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
  },
  setup(props) {
    const classes = computed((): string => {
      if (props.responsive) {
        return 'nhsuk-table-responsive';
      }
      return 'nhsuk-table';
    });

    return { classes };
  }
});
</script>
