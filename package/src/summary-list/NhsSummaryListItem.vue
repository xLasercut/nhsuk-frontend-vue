<template>
  <component :is="componentType" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import Key from './item-types/Key.vue'
import Value from './item-types/Value.vue'
import Action from './item-types/Action.vue'
import { computed, defineComponent, PropType } from 'vue'
import { NhsSummaryListItemType } from './types'

const SUMMARY_LIST_ITEM_TYPES: Array<NhsSummaryListItemType> = ['key', 'value', 'actions']

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsSummaryListItem',
  emits: [],
  props: {
    type: {
      type: String as PropType<NhsSummaryListItemType>,
      required: true,
      validator: (val: NhsSummaryListItemType): boolean => {
        return SUMMARY_LIST_ITEM_TYPES.includes(val)
      }
    }
  },
  setup(props) {
    const componentType = computed(() => {
      if (props.type === 'key') {
        return Key
      } else if (props.type === 'actions') {
        return Action
      }

      return Value
    })

    return { componentType }
  }
})
</script>
