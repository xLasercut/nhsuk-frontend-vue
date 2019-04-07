<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-inset-text>Inset Text</nhs-inset-text>
    </code-block>

    <argument-table heading="Inset Text Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-inset-text>Inset Text</nhs-inset-text>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the inset text container."
          },
          {
            name: "hidden-text",
            type: "string",
            required: "no",
            description: "Hidden text used for text-to-speech. Default: Information:"
          }
        ]
      }
    }
  }
</script>
