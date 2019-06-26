<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-error-text>Error Text</nhs-error-text>
    </code-block>

    <argument-table heading="error-text" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-error-text>Error Text</nhs-error-text>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "id",
            type: "string",
            required: "no",
            description: "Optional id attribute to add to the error message span tag."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the error message span tag."
          },
          {
            name: "hidden-text",
            type: "string",
            required: "no",
            description: "Hidden text used to text to speech. Default: Error:"
          }
        ]
      }
    }
  }
</script>