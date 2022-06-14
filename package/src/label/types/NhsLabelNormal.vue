<template>
  <label :class="classes" v-bind="$attrs">
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { NhsLabelSize } from '../types'

export default defineComponent({
  inheritAttrs: false,
  emits: [],
  props: {
    size: {
      type: String as PropType<NhsLabelSize>
    }
  },
  setup(props) {
    const classes = computed(() => {
      let classes = ['nhsuk-label']

      if (props.size) {
        classes.push(`nhsuk-label--${props.size}`)
      }

      return classes.join(' ')
    })

    return { classes }
  }
})
</script>
