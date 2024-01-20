<template>
  <p :class="classes" v-bind="$attrs">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { NhsBodySize } from './types';
import { NHS_BODY_SIZES } from './constants';

const props = defineProps({
  size: {
    type: String as PropType<NhsBodySize>,
    validator: (val: NhsBodySize): boolean => {
      return NHS_BODY_SIZES.includes(val);
    }
  }
});
defineEmits([]);
defineOptions({
  name: 'nhs-body',
  inheritAttrs: false
});

const classes = computed((): string => {
  if (props.size) {
    return `nhsuk-body-${props.size}`;
  }
  return 'nhsuk-body';
});
</script>
