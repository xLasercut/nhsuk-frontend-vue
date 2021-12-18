<template>
  <nhs-main>
    <code-block file="ErrorSummary" />

    <argument-table heading="error-summary" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'title',
            type: 'string',
            required: 'yes',
            description: 'Text to use for the heading of the error summary block.'
          }
        ],
        slots: [
          {
            name: 'title',
            props: '\'title\' prop of component',
            description: 'slots for error summary title'
          },
          {
            name: 'default',
            description: 'default vue slots'
          }
        ]
      }
    }
  }
</script>