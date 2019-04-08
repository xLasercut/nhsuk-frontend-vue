<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-fieldset :legend="legend">
        this is some content
      </nhs-fieldset>
    </code-block>

    <argument-table heading="Fieldset Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-fieldset :legend="legend">
    this is some content
  </nhs-fieldset>
  
  export default {
    data() {
      return {
        legend: {
          text: "Fieldset Legend",
          pageHeading: true
        }
      }
    }
  }`

  export default {
    data() {
      return {
        source: source,
        legend: {
          text: "Fieldset Legend",
          pageHeading: true
        },
        rows: [
          {
            name: "described-by",
            type: "string",
            required: "no",
            description: "Text or element id to add to the aria-describedby attribute to provide description of the group of fields for screenreader users."
          },
          {
            name: "legend",
            type: "object",
            required: "no",
            description: "Arguments for the legend."
          },
          {
            name: "legend.text",
            type: "string",
            required: "no",
            description: "Legend text."
          },
          {
            name: "legend.pageHeading",
            type: "boolean",
            required: "no",
            description: "Whether the legend also acts as the heading for the page"
          },
          {
            name: "legend.attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the legend container."
          },
          {
            name: "attributes",
            type: "object",
            description: "Any extra HTML attributes (for example class) to add to the fieldset container.",
            required: "no"
          }
        ]
      }
    }
  }
</script>