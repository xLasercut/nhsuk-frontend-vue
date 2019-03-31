<template>
  <code-block :code="backLinkCode">
    <nhs-back-link to="/navigation/backlink">
      This is a back link
    </nhs-back-link>
  </code-block>
</template>

<script>
  export default {
    data() {
      return {
        backLinkCode: `<nhs-back-link to="/navigation/backlink">
    This is a back link
  </nhs-back-link>`
      }
    }
  }
</script>