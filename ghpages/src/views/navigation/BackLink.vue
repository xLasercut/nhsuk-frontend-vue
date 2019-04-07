<template>
  <nhs-main>
    <code-block :code="sourceCode">
      <nhs-back-link href="/navigation/backlink">
        This is a back link
      </nhs-back-link>
    </code-block>

    <argument-table heading="Back Link Arguments" :rows="rows">
    </argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-back-link href="/navigation/backlink">
    This is a back link
  </nhs-back-link>`

  export default {
    data() {
      return {
        sourceCode: source,
        rows: [
          {
            name: "href",
            type: "string",
            required: "yes",
            description: "The value of the link href attribute."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the textarea tag."
          }
        ]
      }
    }
  }
</script>