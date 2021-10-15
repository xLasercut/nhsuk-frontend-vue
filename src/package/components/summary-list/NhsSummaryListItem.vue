<template>
  <component :is="componentType" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script>
import Key from './item-types/Key.vue'
import Value from './item-types/Value.vue'
import Action from './item-types/Action.vue'
import {computed, defineComponent} from 'vue'

const TYPES = [ 'key', 'value', 'actions' ]

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsSummaryListItem',
  props: {
    type: {
      type: String,
      required: true,
      validator(val) {
        return TYPES.includes(val)
      }
    }
  },
  setup(props) {
    const componentType = computed(() => {
      if (props.type === 'key') {
        return Key
      }
      else if (props.type === 'actions') {
        return Action
      }

      return Value
    })

    return {componentType}
  }
})
</script>
