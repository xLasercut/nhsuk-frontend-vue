<template>
  <strong :class="classes" v-bind="$attrs">
    <slot></slot>
  </strong>
</template>

<script>
import {computed, defineComponent} from 'vue'

const COLOURS = ['', 'white', 'grey', 'green', 'aqua-green', 'blue', 'purple', 'pink', 'red', 'orange', 'yellow']

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsTag',
  props: {
    color: {
      type: String,
      default: '',
      validator(val) {
        return COLOURS.includes(val)
      }
    }
  },
  setup(props) {
    const classes = computed(() => {
      let classes = ['nhsuk-tag']

      if (this.color) {
        classes.push(`nhsuk-tag--${props.color}`)
      }

      return classes.join(' ')
    })

    return {classes}
  }
})
</script>
