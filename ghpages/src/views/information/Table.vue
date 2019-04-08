<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-table :panel="true" heading="Table with heading" :rows="tableData" :head="tableHeading"></nhs-table>
    </code-block>

    <argument-table heading="Table Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-table :panel="true" heading="Table with heading" :rows="tableData" :head="tableHeading"></nhs-table>
  
  export default {
    data() {
      return {
        tableData: [
          {
            name: "test",
            type: "type",
            default: "default"
          },
          {
            name: "roll",
            default: "cake"
          }
        ],
        tableHeading: [
          {
            text: "Name",
            key: "name"
          },
          {
            text: "Type",
            key: "type"
          },
          {
            text: "Default",
            key: "default"
          }
        ]
      }
    }
  }`

  export default {
    data() {
      return {
        source: source,
        tableData: [
          {
            name: "test",
            type: "type",
            default: "default"
          },
          {
            name: "roll",
            default: "cake"
          }
        ],
        tableHeading: [
          {
            text: "Name",
            key: "name"
          },
          {
            text: "Type",
            key: "type"
          },
          {
            text: "Default",
            key: "default"
          }
        ],
        rows: [
          {
            name: "head",
            type: "array",
            required: "yes",
            description: "Array of table head cells."
          },
          {
            name: "head.{}.text",
            type: "string",
            required: "yes",
            description: "Label of each head cell"
          },
          {
            name: "head.{}.key",
            type: "string",
            required: "yes",
            description: "Key of each head cell. Used determine the position of each item in the row"
          },
          {
            name: "rows",
            type: "array",
            required: "yes",
            description: "Array of table rows and cells."
          },
          {
            name: "rows.{}.<head_key>",
            type: "string",
            required: "no",
            description: "Content of each cell. This is mapped to column with the corresponding head key"
          },
          {
            name: "panel",
            type: "boolean",
            required: "no",
            description:  "If set to true, the table is rendered inside a panel with a label."
          },
          {
            name: "panel-attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the panel containing the table."
          },
          {
            name: "heading",
            type: "string",
            required: "no",
            description: "Heading/label of the panel if the panel argument is set to true."
          },
          {
            name: "heading-level",
            type: "number",
            required: "no",
            description: "Optional heading level for the heading. Default: 3."
          },
          {
            name: "table-attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the table."
          },
          {
            name: "caption",
            type: "string",
            required: "no",
            description: "Optional caption for the table."
          },
          {
            name: "caption-attributes",
            type: "string",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the table caption."
          }
        ]
      }
    }
  }
</script>