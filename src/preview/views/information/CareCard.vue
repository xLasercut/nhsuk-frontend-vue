<template>
  <div>
    <nhs-row>
      <nhs-col>
        <nhs-care-card label="Non Urgent">
          This is a Non Urgent Care Card.
        </nhs-care-card>
        <code-block>
          {{nonUrgent}}
        </code-block>
      </nhs-col>
    </nhs-row>

    <nhs-row>
      <nhs-col>
        <nhs-care-card label="Urgent" type="urgent">
          This is an Urgent Care Card.
        </nhs-care-card>
        <code-block>
          {{urgent}}
        </code-block>
      </nhs-col>
    </nhs-row>

    <nhs-row>
      <nhs-col>
        <nhs-care-card label="Immediate" type="immediate">
          This is an Immediate Care Card.
        </nhs-care-card>
        <code-block>
          {{immediate}}
        </code-block>
      </nhs-col>
    </nhs-row>
  </div>
</template>

<script>
  import CodeBlock from '@/preview/components/CodeBlock.vue'

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
    },
    components: {
      CodeBlock
    }
  }
</script>