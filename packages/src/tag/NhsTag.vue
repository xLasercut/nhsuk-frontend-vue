<template>
  <strong :class="classes" v-bind="$attrs">
    <slot></slot>
  </strong>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {NhsTagColor} from './types'

const TAG_COLORS: Array<NhsTagColor> = ['', 'white', 'grey', 'green', 'aqua-green', 'blue', 'purple', 'pink', 'red', 'orange', 'yellow']

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-tag',
  props: {
    color: {
      type: String as PropType<NhsTagColor>,
      default: (): NhsTagColor => {
        return ''
      },
      validator: (val: NhsTagColor): boolean => {
        return TAG_COLORS.includes(val)
      }
    }
  },
  setup(props) {
    const classes = computed((): string => {
      let classes = ['nhsuk-tag']

      if (props.color) {
        classes.push(`nhsuk-tag--${props.color}`)
      }

      return classes.join(' ')
    })

    return {classes}
  }
})
</script>
