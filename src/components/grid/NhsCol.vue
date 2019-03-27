<template>
  <div :class="columnClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "NhsCol",
    props: ["span"],
    computed: {
      columnClass() {
        switch (this.span) {
          case 75:
            return "nhsuk-grid-column-three-quarters"
          case 66:
            return "nhsuk-grid-column-two-thirds"
          case 50:
            return "nhsuk-grid-column-one-half"
          case 33:
            return "nhsuk-grid-column-one-third"
          case 25:
            return "nhsuk-grid-column-one-quarter"
          default:
            return "nhsuk-grid-column-full"
        }
      }
    }
  }
</script>
