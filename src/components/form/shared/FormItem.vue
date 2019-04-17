<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      error: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      classes() {
        var classes = [ "nhsuk-form-group" ]
        if (this.error) {
          classes.push("nhsuk-form-group--error")
        }
        return classes.join(" ")
      }
    }
  }
</script>
