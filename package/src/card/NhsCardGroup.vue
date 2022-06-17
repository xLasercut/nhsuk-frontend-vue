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

<script lang="ts">
import NhsVNode from '../shared/NhsVNode.vue';
import { defineComponent, PropType } from 'vue';
import { NhsCardGroupType } from './types';

const CARD_GROUP_TYPES: Set<NhsCardGroupType> = new Set(['half', 'third', 'quarter']);

export default defineComponent({
  name: 'nhs-card-group',
  inheritAttrs: false,
  emit: [],
  props: {
    type: {
      type: String as PropType<NhsCardGroupType>,
      default: (): NhsCardGroupType => {
        return 'half';
      },
      validator: (val: NhsCardGroupType): boolean => {
        return CARD_GROUP_TYPES.has(val);
      }
    }
  },
  components: { NhsVNode }
});
</script>
