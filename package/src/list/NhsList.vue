<template>
  <component :is="element" :class="classes" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import NhsListOrdered from './types/NhsListOrdered.vue'
import NhsListUnordered from './types/NhsListUnordered.vue'
import {computed, defineComponent, PropType} from 'vue'
import {NhsListType} from './types'

const NHS_LIST_TYPES = {
  bullet: 'nhsuk-list--bullet',
  number: 'nhsuk-list--number',
  error: 'nhsuk-error-summary__list'
}

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-list',
  emits: [],
  props: {
    type: {
      type: String as PropType<NhsListType>,
      default: (): NhsListType => {
        return 'bullet'
      },
      validator: (val: NhsListType): boolean => {
        return val in NHS_LIST_TYPES
      }
    }
  },
  setup(props) {
    const element = computed(() => {
      if (props.type === 'number') {
        return NhsListOrdered
      }
      return NhsListUnordered
    })

    const classes = computed(() => {
      return `nhsuk-list ${NHS_LIST_TYPES[props.type]}`
    })

    return {element, classes}
  }
})
</script>
