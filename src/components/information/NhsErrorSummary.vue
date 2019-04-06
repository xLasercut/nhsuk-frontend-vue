<template>
  <div :class="`nhsuk-error-summary${extraClasses}`" v-bind="attributes" aria-labelledby="error-summary-title" role="alert" tabindex="-1">
    <h2 class="nhsuk-error-summary__title" id="error-summary-title">
      {{label}}
    </h2>
    <div class="nhsuk-error-summary__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import SharedProps from '../mixins/shared-props.js'

  export default {
    name: "NhsErrorSummary",
    mixins: [SharedProps],
    props: {
      label: {
        type: String,
        default: ""
      }
    }
  }
</script>