<template>
  <nhs-main>
    <code-block file="Panel" />
    <code-block file="PanelLabel" />
    <code-block file="PanelGroup" />
    <argument-table heading="panel" :data-props="props" :data-slots="slots" />
    <argument-table heading="panel-group" :data-props="groupProps" :data-slots="groupSlots" />
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
            description: 'The label of the panel component.'
          },
          {
            name: 'color',
            type: 'string',
            description: 'Color of the panel. (grey)'
          },
          {
            name: 'heading-level',
            type: 'number',
            description: 'Optional heading level for the label heading. Default: 3'
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ],
        groupProps: [
          {
            name: 'column',
            type: 'string',
            description: 'number of panels per row in the group. default: 3'
          }
        ],
        groupSlots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ]
      }
    }
  }
</script>