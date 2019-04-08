<template>
  <p :class="bodyClass" v-bind="attributes">
    <slot></slot>
  </p>
</template>

<script>
  const sizes = ["s"]

  export default {
    name: "NhsBody",
    props: {
      size: {
        type: String,
        validator(val) {
          return sizes.includes(val)
        }
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      bodyClass() {
        if (this.size) {
          return `nhsuk-body-${this.size}`
        }
        return "nhsuk-body"
      }
    }
  }
</script>
