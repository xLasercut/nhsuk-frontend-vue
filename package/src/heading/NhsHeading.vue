<template>
  <nhs-heading-switcher
    :heading-level="headingLevel"
    :class="`nhsuk-heading-${size}`"
    v-bind="$attrs"
  >
    <slot></slot>
  </nhs-heading-switcher>
</template>

<script setup lang="ts">
import { NhsHeadingSwitcher } from '../shared/heading-switcher';
import { computed, PropType } from 'vue';
import { NhsHeadingSize } from './types';
import { NhsHeadingType } from '../shared/heading-switcher/types';
import { NHS_HEADING_SIZES } from './constants';

defineOptions({
  inheritAttrs: false,
  name: 'nhs-heading'
});
defineEmits([]);
const props = defineProps({
  size: {
    type: String as PropType<NhsHeadingSize>,
    default: (): NhsHeadingSize => {
      return 'l';
    },
    validators: (val: NhsHeadingSize): boolean => {
      return val in NHS_HEADING_SIZES;
    }
  }
});
const headingLevel = computed((): NhsHeadingType => {
  return NHS_HEADING_SIZES[props.size];
});
</script>
