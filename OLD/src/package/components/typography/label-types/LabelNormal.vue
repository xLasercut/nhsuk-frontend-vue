<template>
  <label :class="classes" v-bind="$attrs">
    <slot></slot>
  </label>
</template>

<script>
import {computed, defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String
    }
  },
  setup(props) {
    const classes = computed(() => {
      let classes = [ 'nhsuk-label' ]

      if (props.size) {
        classes.push(`nhsuk-label--${props.size}`)
      }

      return classes.join(' ')
    })

    return {classes}
  }
})
</script>
