<template>
  <details class="nhsuk-details nhsuk-expander" v-bind="$attrs">
    <summary class="nhsuk-details__summary">
      <span class="nhsuk-details__summary-text">
        {{text}}
      </span>
    </summary>
    <div class="nhsuk-details__text">
      <slot></slot>
    </div>
  </details>
</template>

<script>
  export default {
    name: 'NhsExpander',
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
</script>
