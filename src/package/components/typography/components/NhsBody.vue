<template>
  <p :class="classes" v-bind="$attrs">
    <slot></slot>
  </p>
</template>

<script>
import {computed, defineComponent} from 'vue'

const SIZES = [ 's' ]

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsBody',
  props: {
    size: {
      type: String,
      validator(val) {
        return SIZES.includes(val)
      }
    }
  },
  setup(props) {
    const classes = computed(() => {
      if (props.size) {
        return `nhsuk-body-${props.size}`
      }
      return 'nhsuk-body'
    })

    return {classes}
  }
})
</script>
