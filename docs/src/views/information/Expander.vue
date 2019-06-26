<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-expander text="Expander">
        This is an expander
      </nhs-expander>
    </code-block>

    <argument-table heading="expander" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-expander text="Expander">
    This is an expander
  </nhs-expander>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "text",
            type: "string",
            required: "yes",
            description: "Text to be displayed on the expander component."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the anchor tag."
          }
        ]
      }
    }
  }
</script>