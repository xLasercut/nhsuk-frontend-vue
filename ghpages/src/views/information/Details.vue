<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-details text="Click for more details">
        This is more detailed information.
      </nhs-details>
    </code-block>

    <argument-table heading="Details Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-details label="Click for more details">
    This is more detailed information.
  </nhs-details>`

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