<template>
  <div :class="columnClass">
    <slot></slot>
  </div>
</template>

<script>
  const spans = {
    100: "full",
    75: "three-quarters",
    66: "two-thirds",
    50: "one-half",
    33: "one-third",
    25: "one-quarter"
  }

  export default {
    name: "NhsCol",
    props: {
      span: {
        type: Number,
        default: 100,
        validator(val) {
          return val in spans
        }
      }
    },
    computed: {
      columnClass() {
        return `nhsuk-grid-column-${spans[this.span]}`
      }
    }
  }
</script>
