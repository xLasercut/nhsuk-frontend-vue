<template>
  <nhs-main>
    <code-block file="Textarea" />
    <code-block file="TextareaError" />
    <code-block file="TextareaSlots" />
    <argument-table heading="textarea" :data-props="props" :data-slots="slots" :data-methods="methods" />
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
            description: 'The name of the textarea, which is submitted with the form data.'
          },
          {
            name: 'id',
            type: 'string',
            description: 'The id of the textarea. Default: NhsTextarea-<random string>'
          },
          {
            name: 'rows',
            type: 'number',
            description: 'Optional number of textarea rows. Default: 5'
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'If true, textarea is disabled'
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
          {
            name: 'autocomplete',
            type: 'string',
            description: 'Attribute to identify input purpose, for instance "postal-code" or "username".'
          }
        ],
        methods: [
          {
            name: 'validate',
            description: 'validates v-model value. returns true if valid'
          }
        ],
        slots: [
          {
            name: 'label',
            description: 'slot for textarea label',
            props: '\'label\' prop of component'
          },
          {
            name: 'hint',
            description: 'slot for textarea hint',
            props: '\'hint\' prop of component'
          },
          {
            name: 'error',
            description: 'slot for textarea error',
            props: 'error message'
          }
        ]
      }
    }
  }
</script>
