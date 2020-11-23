<template>
  <nhs-main>
    <code-block file="Table" />
    <code-block file="TablePanel" />
    <code-block file="TableResponsive" />
    <argument-table heading="table" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'headers',
            type: 'array',
            required: 'yes',
            description: 'Array of table head cells. { text: "Text of header", value: "Value of key", style: "additional header styles" }'
          },
          {
            name: 'data',
            type: 'array',
            required: 'yes',
            description: 'Array of table rows'
          },
          {
            name: 'heading',
            type: 'string',
            description: 'Heading/label of the table'
          },
          {
            name: 'heading-level',
            type: 'number',
            description: 'Optional heading level for the heading. Default: 3.'
          },
          {
            name: 'caption',
            type: 'string',
            description: 'Optional caption for the table.'
          },
          {
            name: 'responsive',
            type: 'boolean',
            description: 'Toggle responsive table (default: true)'
          }
        ],
        slots: [
          {
            name: 'item.<header_value>',
            props: 'each item in \'data\' prop',
            description: 'slot for table-items'
          }
        ]
      }
    }
  }
</script>
