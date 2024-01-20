<template>
  <ul class="nhsuk-grid-row nhsuk-card-group" v-bind="$attrs">
    <li
      :class="`nhsuk-grid-column-one-${type} nhsuk-card-group__item`"
      v-if="$slots.default"
      v-for="(item, index) in $slots.default()"
      :key="index"
    >
      <nhs-v-node :node="item"></nhs-v-node>
    </li>
  </ul>
</template>

<script setup lang="ts">
import NhsVNode from '../shared/NhsVNode.vue';
import { PropType } from 'vue';
import { NhsCardGroupType } from './types';
import { CARD_GROUP_TYPES } from './constants';

defineOptions({
  name: 'nhs-card-group',
  inheritAttrs: false
});
defineEmits([]);
defineProps({
  type: {
    type: String as PropType<NhsCardGroupType>,
    default: (): NhsCardGroupType => {
      return 'half';
    },
    validator: (val: NhsCardGroupType): boolean => {
      return CARD_GROUP_TYPES.has(val);
    }
  }
});
</script>
