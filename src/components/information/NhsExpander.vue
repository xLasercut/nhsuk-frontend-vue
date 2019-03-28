<template>
  <details class="nhsuk-details nhsuk-expander">
    <summary class="nhsuk-details__summary">
      <span class="nhsuk-details__summary-text">
        {{title}}
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
    props: ["title"]
  }
</script>
