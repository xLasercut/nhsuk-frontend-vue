<template>
  <component :is="labelType" :size="size" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import NhsLabelHeading from './types/NhsLabelHeading.vue';
import NhsLabelNormal from './types/NhsLabelNormal.vue';
import { computed, PropType } from 'vue';
import { NhsLabelSize } from './types';
import { NHS_LABEL_SIZES } from './constants';

defineOptions({
  inheritAttrs: false,
  name: 'nhs-label'
});
defineEmits([]);
const props = defineProps({
  pageHeading: {
    type: Boolean,
    default: (): boolean => {
      return false;
    }
  },
  size: {
    type: String as PropType<NhsLabelSize>,
    validator: (val: NhsLabelSize): boolean => {
      if (val) {
        return NHS_LABEL_SIZES.includes(val);
      }
      return true;
    }
  }
});
const labelType = computed(() => {
  if (props.pageHeading) {
    return NhsLabelHeading;
  }
  return NhsLabelNormal;
});
</script>
