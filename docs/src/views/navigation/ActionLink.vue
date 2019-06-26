<template>
  <nhs-main>
    <code-block :code="sourceCode">
      <nhs-action-link href="/navigation/actionlink">
        This is an action link
      </nhs-action-link>
    </code-block>

    <argument-table heading="action-link" :rows="rows">
    </argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-action-link href="/navigation/actionlink">
    This is an action link
  </nhs-action-link>`

  export default {
    data() {
      return {
        sourceCode: source,
        rows: [
          {
            name: "href",
            type: "string",
            required: "yes",
            description: "The value of the link href attribute"
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