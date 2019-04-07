<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-hint-text>Hint text</nhs-hint-text>
    </code-block>

    <argument-table heading="Hint Text Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-hint-text>Hint text</nhs-hint-text>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "id",
            type: "string",
            required: "no",
            description: "Optional id attribute to add to the hint span tag."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the input component."
          }
        ]
      }
    }
  }
</script>
