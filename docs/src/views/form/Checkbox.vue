<template>
  <nhs-main>
    <code-block file="Checkbox" />
    <code-block file="CheckboxDisabled" />
    <code-block file="CheckboxError" />
    <code-block file="CheckboxSlots" />
    <argument-table heading="checkboxes" :data-props="props" :data-slots="slots" :data-methods="methods" />
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
            description: 'Array of checkbox data objects'
          },
          {
            name: 'items.{}.label',
            type: 'string',
            required: 'yes',
            description: 'Label of individual checkbox'
          },
          {
            name: 'items.{}.hint',
            type: 'string',
            description: 'Hint text of individual checkbox'
          },
          {
            name: 'items.{}.disabled',
            type: 'boolean',
            description: 'Disable individual checkbox'
          },
          {
            name: 'items.{}.conditional',
            type: 'string',
            description: 'conditional text of individual checkbox when checked'
          },
          {
            name: 'items.{}.value',
            type: 'string',
            description: 'Value of individual checkbox'
          },
          {
            name: 'label',
            type: 'string',
            description: 'Label of checkbox group'
          },
          {
            name: 'hint',
            type: 'string',
            description: 'Hint of checkbox group'
          },
          {
            name: 'id',
            type: 'string',
            description: 'Specific id attribute for the checkbox group. Default: NhsCheckboxes_<random number>'
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disable all checkboxes'
          },
          {
            name: 'page-heading',
            type: 'boolean',
            description: 'Wraps label of checkbox group inside a heading tag'
          },
          {
            name: 'heading-size',
            type: 'string',
            description: 'Changes size of checkbox group label'
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
            description: 'slot for checkbox group hint',
            props: '\'hint\' prop of component'
          },
          {
            name: 'error',
            description: 'slot for checkbox group error',
            props: 'error message'
          },
          {
            name: 'item-label',
            description: 'slot for label of individual checkbox',
            props: 'individual checkbox data object'
          },
          {
            name: 'item-hint',
            description: 'slot for hint of individual checkbox',
            props: 'individual checkbox data object'
          },
          {
            name: 'item-conditional',
            description: 'slot for conditional text of individual checkbox',
            props: 'individual checkbox data object'
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