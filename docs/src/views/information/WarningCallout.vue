<template>
  <nhs-main>
    <code-block file="WarningCallout" />

    <argument-table heading="warning-callout" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'heading',
            type: 'string',
            required: 'yes',
            description: 'Heading to be used within the warning callout component.'
          },
          {
            name: 'heading-level',
            type: 'number',
            description: 'Optional heading level for the heading. Default: 3'
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ]
      }
    }
  }
</script>