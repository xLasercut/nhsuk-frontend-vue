<template>
  <div :class="classes" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script>
import {computed, defineComponent} from 'vue'

const spans = {
  100: 'full',
  75: 'three-quarters',
  66: 'two-thirds',
  50: 'one-half',
  33: 'one-third',
  25: 'one-quarter'
}

export default defineComponent({
  name: 'NhsCol',
  inheritAttrs: false,
  props: {
    span: {
      type: Number,
      default: 100,
      validator(val) {
        return val in spans
      }
    }
  },
  setup(props) {
    const classes = computed(() => {
      return `nhsuk-grid-column-${spans[props.span]}`
    })
    return {classes}
  }
})
</script>
