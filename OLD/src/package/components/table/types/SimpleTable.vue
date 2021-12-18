<template>
  <table role="table" :class="classes" v-bind="$attrs">
    <slot></slot>
  </table>
</template>

<script>
import {computed, defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    heading: {
      type: String
    },
    headingLevel: {
      type: Number
    },
    responsive: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const classes = computed(() => {
      if (props.responsive) {
        return 'nhsuk-table-responsive'
      }
      return 'nhsuk-table'
    })

    return {classes}
  }
})
</script>
