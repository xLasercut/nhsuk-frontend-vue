<template>
  <p :class="classes" v-bind="$attrs">
    <slot></slot>
  </p>
</template>

<script>
  const sizes = [ 's' ]

  export default {
    name: 'NhsBody',
    props: {
      size: {
        type: String,
        validator(val) {
          return sizes.includes(val)
        }
      }
    },
    computed: {
      classes() {
        if (this.size) {
          return `nhsuk-body-${this.size}`
        }
        return 'nhsuk-body'
      }
    }
  }
</script>
