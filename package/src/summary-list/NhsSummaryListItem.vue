<template>
  <component :is="componentType" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import Key from './item-types/Key.vue';
import Value from './item-types/Value.vue';
import Action from './item-types/Action.vue';
import { computed, PropType } from 'vue';
import { NhsSummaryListItemType } from './types';
import { SUMMARY_LIST_ITEM_TYPES } from './constants';

defineOptions({
  inheritAttrs: false,
  name: 'nhs-summary-list-item'
});
defineEmits([]);
const props = defineProps({
  type: {
    type: String as PropType<NhsSummaryListItemType>,
    required: true,
    validator: (val: NhsSummaryListItemType): boolean => {
      return SUMMARY_LIST_ITEM_TYPES.includes(val);
    }
  }
});
const componentType = computed(() => {
  if (props.type === 'key') {
    return Key;
  }
  if (props.type === 'actions') {
    return Action;
  }

  return Value;
});
</script>
