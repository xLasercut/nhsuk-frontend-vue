<template>
  <div class="nhsuk-warning-callout" :aria-label="ariaLabel">
    <h3 class="nhsuk-warning-callout__label">{{label}}</h3>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "NhsWarningCallout",
    props: {
      label: {
        type: String,
        default: ""
      },
      ariaLabel: {
        type: String,
        default: ""
      }
    }
  }
</script>