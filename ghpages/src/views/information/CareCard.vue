<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-care-card heading="Non Urgent">
        This is a Non Urgent Care Card.
      </nhs-care-card>

      <nhs-care-card heading="Urgent" type="urgent">
        This is an Urgent Care Card.
      </nhs-care-card>

      <nhs-care-card heading="Immediate" type="immediate">
        This is an Immediate Care Card.
      </nhs-care-card>
    </code-block>
    
    <argument-table heading="Care Card Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  import ArgumentTable from '../../components/ArgumentTable.vue'

  var source = `<nhs-care-card heading="Non Urgent">
    This is a Non Urgent Care Card.
  </nhs-care-card>
  
  <nhs-care-card heading="Urgent" type="urgent">
    This is an Urgent Care Card.
  </nhs-care-card>
  
  <nhs-care-card heading="Immediate" type="immediate">
    This is an Immediate Care Card.
  </nhs-care-card>`

  export default {
    components: {
      ArgumentTable
    },
    data() {
      return {
        source: source,
        rows: [
          {
            name: "type",
            type: "string",
            required: "no",
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
            required: "no",
            description: "Optional heading level for the heading. Default: 3"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the care card."
          },
          {
            name: "hidden-text",
            type: "string",
            required: "no",
            description: "Hidden text used for speech playback. Default: <type> advice"
          }
        ]
      }
    }
  }
</script>