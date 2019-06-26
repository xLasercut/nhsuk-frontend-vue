<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-footer>
        <nhs-footer-item href="/layout/footer">link one</nhs-footer-item>
        <nhs-footer-item href="/layout/footer">link two</nhs-footer-item>
      </nhs-footer>
    </code-block>

    <argument-table heading="footer" :rows="rows"></argument-table>
    <argument-table heading="footer-item" :rows="rowsfi"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-footer>
    <nhs-footer-item href="/layout/footer">link one</nhs-footer-item>
    <nhs-footer-item href="/layout/footer">link two</nhs-footer-item>
  </nhs-footer>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "copyright",
            type: "string",
            required: "no",
            description: "Name of copyright holder. Default: Crown copyright"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the footer container."
          },
          {
            name: "hidden-text",
            type: "string",
            required: "no",
            description: "Hidden text used for text-to-speech. Default: Support links"
          }
        ],
        rowsfi: [
          {
            name: "href",
            type: "string",
            required: "yes",
            description: "The href of a primary navigation item in the footer."
          },
           {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the footer item."
          }
        ]
      }
    }
  }
</script>