<template>
  <code-block :code="bodyCode">
    <nhs-row>
      <nhs-col>
        <nhs-body>
          body normal
        </nhs-body>

        <nhs-body size="s">
          body s
        </nhs-body>
      </nhs-col>
    </nhs-row>
  </code-block>
</template>

<script>
  export default {
    data() {
      return {
        bodyCode: `<nhs-body>
    body normal
  </nhs-body>

  <nhs-body size="s">
    body s
  </nhs-body>`
      }
    }
  }
</script>