<template>
  <code-block :code="details">
    <nhs-details label="Click for more details">
      This is more detailed information.
    </nhs-details>
  </code-block>
</template>

<script>
  export default {
    data() {
      return {
        details: `<nhs-details label="Click for more details">
    This is more detailed information.
  </nhs-details>`
      }
    }
  }
</script>