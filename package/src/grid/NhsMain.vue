<template>
  <div :class="classes" v-bind="$attrs">
    <main class="nhsuk-main-wrapper" id="maincontent">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { NhsMainType } from './types';
import { NHS_MAIN_TYPES } from './constants';

defineOptions({
  name: 'nhs-main',
  inheritAttrs: false
});
defineEmits([]);
const props = defineProps({
  type: {
    type: String as PropType<NhsMainType>,
    default: (): NhsMainType => {
      return 'normal';
    },
    validator: (val: NhsMainType): boolean => {
      return val in NHS_MAIN_TYPES;
    }
  }
});

const classes = computed((): string => {
  return NHS_MAIN_TYPES[props.type];
});
</script>
