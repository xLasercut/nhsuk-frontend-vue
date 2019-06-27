<template>
  <nhs-main>
    <code-block file="EmergencyAlert" />

    <argument-table heading="emergency-alert" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'title',
            type: 'string',
            required: 'yes',
            description: 'Title to be displayed in the emergency alert component.'
          },
          {
            name: 'last-updated',
            type: 'string',
            description: 'Optional text displayed below the main content to show last updated message'
          },
          {
            name: 'hidden-text',
            type: 'string',
            description: 'Hidden text used for text-to-speech. Default: Alert:'
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