<template>
  <nhs-main>
    <code-block file="ListPanel" />

    <argument-table heading="list-panel" :data-props="props" :data-slots="slots" :data-events="events" />
    <argument-table heading="list-panel-item" :data-props="itemProps" :data-slots="itemSlots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'label',
            type: 'string',
            description: 'The text label of the list panel.'
          },
          {
            name: 'id',
            type: 'string',
            description: 'The ID of the label heading.'
          },
          {
            name: 'heading-level',
            type: 'number',
            description: 'Optional heading level for the label heading. Default: 2'
          },
          {
            name: 'back-to-top',
            type: 'boolean',
            description: 'If set to true, back-to-top link will be displayed'
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'If set to true, this indicates there are no items in the list panel.'
          },
          {
            name: 'message',
            type: 'string',
            description: 'The text value to display if disabled has been set to true.'
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ],
        events: [
          {
            name: 'back-to-top',
            trigger: 'on click of back to top link'
          }
        ],
        itemProps: [
          {
            name: 'href',
            type: 'string',
            required: 'yes',
            description: 'The href value of an item in the list panel.'
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