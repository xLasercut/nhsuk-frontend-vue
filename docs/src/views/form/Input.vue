<template>
  <nhs-main>
    <code-block file="Input" />
    <code-block file="InputError" />
    <code-block file="InputWidth" />
    <code-block file="InputSlots" />

    <argument-table
      heading="input"
      :data-props="props" :data-slots="slots"
      :data-events="events" :data-methods="methods"
    />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'id',
            type: 'string',
            description: 'The id of the input. Default: NhsInput_<random string>'
          },
          {
            name: 'name',
            type: 'string',
            description: 'The name of the input, which is submitted with the form data.'
          },
          {
            name: 'type',
            type: 'string',
            description: 'Type of input control to render. Default: text.'
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'If true, input is disabled'
          },
          {
            name: 'width',
            type: 'string',
            description: 'width of input. (2, 3, 4, 5, 10, 20)'
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
            name: 'max-length',
            type: 'number',
            description: 'maximum number of characters of input field'
          },
          {
            name: 'autocomplete',
            type: 'string',
            description: 'Attribute to identify input purpose, for instance "postal-code" or "username".'
          }
        ],
        slots: [
          {
            name: 'label',
            description: 'slot for input label',
            props: '\'label\' prop of component'
          },
          {
            name: 'hint',
            description: 'slot for input hint',
            props: '\'hint\' prop of component'
          },
          {
            name: 'error',
            description: 'slot for input error',
            props: 'error message'
          }
        ],
        methods: [
          {
            name: 'validate',
            description: 'validates v-model value. returns true if valid'
          }
        ],
        events: [
          {
            name: 'blur',
            trigger: 'on blur from input'
          },
          {
            name: 'change',
            trigger: 'on value change'
          },
          {
            name: 'focus',
            trigger: 'on focus on input'
          }
        ]
      }
    }
  }
</script>