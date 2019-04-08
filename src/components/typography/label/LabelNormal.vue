<template>
  <label :class="labelClass" v-bind="attributes">
    <slot></slot>
  </label>
</template>

<script>
  export default {
    props: {
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      size: {
        type: String,
        default: ""
      }
    },
    computed: {
      labelClass() {
        var classMap = {
          xl: "nhsuk-label nhsuk-label--xl"
        }

        if (this.size.toLowerCase() in classMap) {
          return classMap[this.size.toLowerCase()]
        }
        return "nhsuk-label"
      }
    }
  }
</script>