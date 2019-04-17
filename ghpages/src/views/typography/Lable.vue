<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-label :page-heading="true">This is a label heading</nhs-label>

      <nhs-label>This is a label</nhs-label>
    </code-block>

    <argument-table heading="label" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-label :page-heading="true">This is a label heading</nhs-label>
  <nhs-label>This is a label</nhs-label>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "page-heading",
            type: "boolean",
            required: "no",
            description: "Whether the label also acts as the heading for the page."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the label tag."
          }
        ]
      }
    }
  }
</script>
