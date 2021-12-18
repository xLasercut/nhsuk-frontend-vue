<template>
  <nhs-main>
    <code-block file="Select" />
    <code-block file="SelectError" />
    <code-block file="SelectSlots" />
    <argument-table heading="select" :data-props="props" :data-slots="slots" :data-methods="methods" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'name',
            type: 'string',
            description: 'The name of the select, which is submitted with the form data.'
          },
          {
            name: 'id',
            type: 'string',
            description: 'The id for each select box. Default: NhsSelect-<random string>'
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'If true, select is disabled'
          },
          {
            name: 'label',
            type: 'string',
            description: 'Label of input component'
          },
          {
            name: 'hint',
            type: 'string',
            description: 'Hint of input component'
          },
          {
            name: 'rules',
            type: 'array',
            description: 'Accepts an array of functions that return either True or a String with an error message'
          },
        ],
        methods: [
          {
            name: 'validate',
            description: 'validates v-model value. returns true if valid'
          },
          {
            name: 'focus',
            description: 'focus on select'
          },
          {
            name: 'resetError',
            description: 'reset error message'
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slots. used for adding select options'
          },
          {
            name: 'label',
            description: 'slot for select label',
            props: '\'label\' prop of component'
          },
          {
            name: 'hint',
            description: 'slot for select hint',
            props: '\'hint\' prop of component'
          },
          {
            name: 'error',
            description: 'slot for select error',
            props: 'error message'
          }
        ]
      }
    }
  }
</script>