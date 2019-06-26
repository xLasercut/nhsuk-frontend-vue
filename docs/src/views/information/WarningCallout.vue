<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-warning-callout heading="This is a warning">
        <p>Some warning information</p>
      </nhs-warning-callout>
    </code-block>

    <argument-table heading="warning-callout" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-warning-callout heading="This is a warning">
    <p>Some warning information</p>
  </nhs-warning-callout>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "heading",
            type: "string",
            required: "yes",
            description: "Heading to be used within the warning callout component."
          },
          {
            name: "heading-level",
            type: "number",
            required: "no",
            description: "Optional heading level for the heading. Default: 3"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the warning callout."
          }
        ]
      }
    }
  }
</script>