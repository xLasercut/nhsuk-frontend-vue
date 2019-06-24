<template>
  <label :class="classes">
    <slot></slot>
  </label>
</template>

<script>
  export default {
    props: {
      size: {
        type: String
      }
    },
    computed: {
      classes() {
        var classes = [ 'nhsuk-label' ]

        if (this.size) {
          classes.push(`nhsuk-label--${this.size}`)
        }

        return classes.join(' ')
      }
    }
  }
</script>