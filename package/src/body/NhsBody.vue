<template>
  <p :class="classes" v-bind="$attrs">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { NhsBodySize } from './types'

const NHS_BODY_SIZES: Array<NhsBodySize> = ['s']

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-body',
  emits: [],
  props: {
    size: {
      type: String as PropType<NhsBodySize>,
      validator: (val: NhsBodySize): boolean => {
        return NHS_BODY_SIZES.includes(val)
      }
    }
  },
  setup(props) {
    const classes = computed((): string => {
      if (props.size) {
        return `nhsuk-body-${props.size}`
      }
      return 'nhsuk-body'
    })

    return { classes }
  }
})
</script>
