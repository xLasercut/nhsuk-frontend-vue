<template>
  <nhs-main>
    <code-block :code="source">
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

    <argument-table heading="heading" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-heading size="xl">
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

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "size",
            type: "string",
            required: "no",
            description: "Size of heading. Default: l"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the heading component."
          }
        ]
      }
    }
  }
</script>