<template>
  <details class="nhsuk-details nhsuk-expander">
    <summary class="nhsuk-details__summary">
      <span class="nhsuk-details__summary-text">
        {{label}}
      </span>
    </summary>
    <div class="nhsuk-details__text">
      <slot></slot>
    </div>
  </details>
</template>

<script>
  export default {
    name: "NhsExpander",
    props: {
      label: {
        type: String,
        default: ""
      }
    }
  }
</script>
