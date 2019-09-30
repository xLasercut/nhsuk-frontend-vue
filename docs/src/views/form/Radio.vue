<template>
  <nhs-main>
    <code-block file="RadioError" />
    <code-block file="RadioDisabled" />
    <code-block file="RadioDivider" />
    <code-block file="RadioSlots" />

    <argument-table heading="radio" :data-props="props" :data-slots="slots" :data-methods="methods" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'items',
            type: 'array',
            required: 'yes',
            description: 'Array of radio data objects'
          },
          {
            name: 'items.{}.label',
            type: 'string',
            required: 'yes',
            description: 'Label of individual radio'
          },
          {
            name: 'items.{}.hint',
            type: 'string',
            description: 'Hint text of individual radio'
          },
          {
            name: 'items.{}.disabled',
            type: 'boolean',
            description: 'Disable individual radio'
          },
          {
            name: 'items.{}.value',
            type: 'string',
            required: 'yes',
            description: 'Value of individual radio'
          },
          {
            name: 'label',
            type: 'string',
            description: 'Label of radio group'
          },
          {
            name: 'hint',
            type: 'string',
            description: 'Hint of radio group'
          },
          {
            name: 'id',
            type: 'string',
            description: 'Specific id attribute for the radio group. Default: NhsRadios-<random string>'
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disable all radios'
          },
          {
            name: 'page-heading',
            type: 'boolean',
            description: 'Wraps label of radio group inside a heading tag'
          },
          {
            name: 'heading-size',
            type: 'string',
            description: 'Changes size of radio group label'
          },
          {
            name: 'rules',
            type: 'array',
            description: 'Accepts an array of functions that return either True or a String with an error message'
          }
        ],
        slots: [
          {
            name: 'hint',
            description: 'slot for radio group hint',
            props: '\'hint\' prop of component'
          },
          {
            name: 'error',
            description: 'slot for radio group error',
            props: 'error message'
          },
          {
            name: 'item-label',
            description: 'slot for label of individual radio',
            props: 'individual radio data object'
          },
          {
            name: 'item-hint',
            description: 'slot for hint of individual radio',
            props: 'individual radio data object'
          }
        ],
        methods: [
          {
            name: 'validate',
            description: 'Validates v-model value based on rules. Returns true if valid'
          },
          {
            name: 'resetError',
            description: 'reset error message'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .status {
    line-height: 40px;
  }
</style>