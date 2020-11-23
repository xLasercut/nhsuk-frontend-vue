<template>
  <strong :class="classes" v-bind="$attrs">
    <slot></slot>
  </strong>
</template>

<script>
const COLOURS = ['', 'white', 'grey', 'green', 'aqua-green', 'blue', 'purple', 'pink', 'red', 'orange', 'yellow']

export default {
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
  computed: {
    classes() {
      let classes = ['nhsuk-tag']

      if (this.color) {
        classes.push(`nhsuk-tag--${this.color}`)
      }

      return classes.join(' ')
    }
  }
}
</script>
