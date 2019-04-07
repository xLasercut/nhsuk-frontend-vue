<template>
  <div class="nhsuk-error-summary" v-bind="attributes" aria-labelledby="error-summary-title" role="alert" tabindex="-1">
    <h2 class="nhsuk-error-summary__title" id="error-summary-title">
      <slot name="title" :props="title">{{title}}</slot>
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
      title: {
        type: String,
        required: true
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>