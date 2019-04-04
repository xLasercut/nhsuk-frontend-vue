<template>
  <div class="nhsuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1">
    <h2 class="nhsuk-error-summary__title" id="error-summary-title">
      {{label}}
    </h2>
    <div class="nhsuk-error-summary__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NhsErrorSummary",
    props: {
      label: {
        type: String,
        default: ""
      }
    }
  }
</script>