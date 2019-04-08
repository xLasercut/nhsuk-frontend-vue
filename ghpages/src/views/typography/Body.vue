<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-row>
        <nhs-col>
          <nhs-body>
            body normal
          </nhs-body>

          <nhs-body size="s">
            body s
          </nhs-body>
        </nhs-col>
      </nhs-row>
    </code-block>

    <argument-table heading="Body Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-body>
    body normal
  </nhs-body>

  <nhs-body size="s">
    body s
  </nhs-body>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "size",
            type: "string",
            required: "no",
            description: "Size of the body text."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the body component."
          }
        ]
      }
    }
  }
</script>