<template>
  <span :class="classes" v-bind="attributes" :id="id">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: "NhsHintText",
    props: {
      id: {
        type: String,
        default: ""
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      classes() {
        var classes = ["nhsuk-hint"]

        if (this.$attrs.class) {
          classes.push(this.$attrs.class)
        }

        
        return classes.join(" ")
      }
    }
  }
</script>