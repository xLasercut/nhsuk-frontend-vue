<template>
  <nhs-main>
    <code-block file="CareCardNonUrgent" />
    <code-block file="CareCardUrgent" />
    <code-block file="CareCardImmediate" />
    <argument-table heading="care-card" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
  var template = `
  <nhs-care-card heading="Non Urgent">
    This is a Non Urgent Care Card.
  </nhs-care-card>

  <nhs-care-card heading="Urgent" type="urgent">
    This is an Urgent Care Card.
  </nhs-care-card>

  <nhs-care-card heading="Immediate" type="immediate">
    This is an Immediate Care Card.
  </nhs-care-card>
  `

  export default {
    data() {
      return {
        template: template,
        props: [
          {
            name: "type",
            type: "string",
            description: "Care card component variant type - non-urgent, urgent or immediate. Default: non-urgent"
          },
          {
            name: "heading",
            type: "string",
            required: "yes",
            description: "Heading to be used within the care card component"
          },
          {
            name: "heading-level",
            type: "number",
            description: "Optional heading level for the heading. Default: 3"
          },
          {
            name: "hidden-text",
            type: "string",
            description: "Hidden text used for speech playback. Default: Non-Urgent Advice: "
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