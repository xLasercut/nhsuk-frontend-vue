<template>
  <nhs-main>
    <code-block file="DateInputError" />
    <code-block file="DateInputSlots" />
    <argument-table heading="input-group" :data-props="props" :data-slots="slots" :data-methods="methods" />
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
            description: 'Array of input data objects'
          },
          {
            name: 'items.{}.label',
            type: 'string',
            description: 'Label of individual input'
          },
          {
            name: 'items.{}.disabled',
            type: 'boolean',
            description: 'Disable individual input'
          },
          {
            name: 'items.{}.type',
            type: 'string',
            description: 'Type of individual input. default: text'
          },
          {
            name: 'items.{}.width',
            type: 'string',
            description: 'Width of individual input'
          },
          {
            name: 'item.{}.autocomplete',
            type: 'string',
            description: 'Attribute to identify input purpose, for instance "postal-code" or "username".'
          },
          {
            name: 'item.{}.rules',
            type: 'array',
            description: 'Accepts an array of functions that return either True or a String with an error message'
          },
          {
            name: 'label',
            type: 'string',
            description: 'Label of input group'
          },
          {
            name: 'hint',
            type: 'string',
            description: 'Hint of input group'
          },
          {
            name: 'id',
            type: 'string',
            description: 'Specific id attribute for the input group. Default: NhsInputGroup-<random string>'
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disable all inputs'
          },
          {
            name: 'page-heading',
            type: 'boolean',
            description: 'Wraps label of input group inside a heading tag'
          },
          {
            name: 'heading-size',
            type: 'string',
            description: 'Changes size of input group label'
          }
        ],
        slots: [
          {
            name: 'hint',
            description: 'slot for input group hint',
            props: '\'hint\' prop of component'
          },
          {
            name: 'error',
            description: 'slot for input group error',
            props: 'error message'
          },
          {
            name: 'item-label',
            description: 'slot for label of individual input',
            props: 'individual input data object'
          }
        ],
        methods: [
          {
            name: 'validate',
            description: 'Validates v-model value based on rules. Returns true if valid'
          }
        ]
      }
    }
  }
</script>