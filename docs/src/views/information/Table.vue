<template>
  <nhs-main>
    <code-block file="Table" />
    <code-block file="TablePanel" />
    <argument-table heading="table" :data-props="props" :data-slots="slots" />
    <argument-table heading="table-item" :data-slots="itemSlots" />
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
            description: 'Array of table head cells.'
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
          }
        ],
        slots: [
          {
            name: 'item',
            props: 'each item in \'data\' prop',
            description: 'slot for table-items'
          }
        ],
        itemSlots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ]
      }
    }
  }
</script>