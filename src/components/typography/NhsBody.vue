<template>
  <p :class="bodyClass">
    <slot></slot>
  </p>
</template>

<script>
  export default {
    name: "NhsBody",
    props: {
      size: {
        type: String,
        default: ""
      }
    },
    computed: {
      bodyClass() {
        switch (this.size) {
          case "s":
            return "nhsuk-body-s"
          default:
            return "nhsuk-body"
        }
      }
    }
  }
</script>
