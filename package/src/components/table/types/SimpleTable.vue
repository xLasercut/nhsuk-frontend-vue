<template>
  <table role="table" :class="classes">
    <slot></slot>
  </table>
</template>

<script>
  export default {
    props: {
      heading: {
        type: String
      },
      headingLevel: {
        type: Number
      },
      responsive: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      classes() {
        if (this.responsive) {
          return 'nhsuk-table-responsive'
        }
        return 'nhsuk-table'
      }
    }
  }
</script>
