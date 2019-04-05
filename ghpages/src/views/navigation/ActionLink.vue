<template>
  <code-block :code="linkCode">
    <nhs-action-link to="/navigation/actionlink">
      This is an action link
    </nhs-action-link>
  </code-block>
</template>

<script>
  export default {
    data() {
      return {
        linkCode: `<nhs-action-link to="/navigation/actionlink">
    This is an action link
  </nhs-action-link>`
      }
    }
  }
</script>