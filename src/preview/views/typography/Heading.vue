<template>
  <code-block :code="headingCode">
    <nhs-row>
      <nhs-col>
        <nhs-heading size="xl">
          Heading XL
        </nhs-heading>

        <nhs-heading size="l">
          Heading L
        </nhs-heading>

        <nhs-heading size="m">
          Heading M
        </nhs-heading>

        <nhs-heading size="s">
          Heading S
        </nhs-heading>

        <nhs-heading size="xs">
          Heading XS
        </nhs-heading>
      </nhs-col>
    </nhs-row>
  </code-block>
</template>

<script>
  export default {
    data() {
      return {
        headingCode: `<nhs-heading size="xl">
    Heading XL
  </nhs-heading>

  <nhs-heading size="l">
    Heading L
  </nhs-heading>

  <nhs-heading size="m">
    Heading M
  </nhs-heading>

  <nhs-heading size="s">
    Heading S
  </nhs-heading>

  <nhs-heading size="xs">
    Heading XS
  </nhs-heading>`
      }
    }
  }
</script>