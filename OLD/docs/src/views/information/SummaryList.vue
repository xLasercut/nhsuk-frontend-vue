<template>
  <nhs-main>
    <code-block file="SummaryList" />
    <code-block file="SummaryListNoBorder" />
    <argument-table heading="summary-list" :data-props="props" :data-slots="slots" />
    <argument-table heading="summary-list-item" :data-props="itemProps" :data-slots="itemSlots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'data',
            type: 'array',
            required: 'yes',
            description: 'Array of row item objects.'
          },
          {
            name: 'border',
            type: 'boolean',
            description: 'Toggle summary list border. default: true'
          }
        ],
        slots: [
          {
            name: 'item',
            props: 'each item in \'data\' prop',
            description: 'slot for summary-list-items'
          }
        ],
        itemProps: [
          {
            name: 'type',
            type: 'string',
            required: 'yes',
            description: 'Item type. Valid values: key, value and action'
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