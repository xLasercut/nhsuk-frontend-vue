<template>
  <div>
    <code-block :code="nonUrgent">
      <nhs-care-card label="Non Urgent">
        This is a Non Urgent Care Card.
      </nhs-care-card>
    </code-block>
    
    <code-block :code="urgent">
      <nhs-care-card label="Urgent" type="urgent">
        This is an Urgent Care Card.
      </nhs-care-card>
    </code-block>

    <code-block :code="immediate">
      <nhs-care-card label="Immediate" type="immediate">
        This is an Immediate Care Card.
      </nhs-care-card>
    </code-block>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nonUrgent: `<nhs-care-card label="Non Urgent">
    This is a Non Urgent Care Card.
  </nhs-care-card>`,
        urgent: `<nhs-care-card label="Urgent" type="urgent">
    This is an Urgent Care Card.
  </nhs-care-card>`,
        immediate: `<nhs-care-card label="Immediate" type="immediate">
    This is an Immediate Care Card.
  </nhs-care-card>`
      }
    }
  }
</script>