<template>
  <component :is="element" :class="classes" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import NhsListOrdered from './types/NhsListOrdered.vue';
import NhsListUnordered from './types/NhsListUnordered.vue';
import { computed, PropType } from 'vue';
import { NhsListType } from './types';
import { NHS_LIST_TYPES } from './constants';

defineOptions({
  inheritAttrs: false,
  name: 'nhs-list'
});
defineEmits([]);
const props = defineProps({
  type: {
    type: String as PropType<NhsListType>,
    default: (): NhsListType => {
      return 'bullet';
    },
    validator: (val: NhsListType): boolean => {
      return val in NHS_LIST_TYPES;
    }
  }
});
const element = computed(() => {
  if (props.type === 'number') {
    return NhsListOrdered;
  }
  return NhsListUnordered;
});

const classes = computed(() => {
  return `nhsuk-list ${NHS_LIST_TYPES[props.type]}`;
});
</script>
