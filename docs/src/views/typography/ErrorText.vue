<template>
  <nhs-main>
    <code-block file="ErrorText" />
    <argument-table heading="error-text" :data-props="props" :data-slots="slots" />
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
            description: 'Optional id attribute to add to the error message span tag.'
          },
          {
            name: 'hidden-text',
            type: 'string',
            description: 'Hidden text used to text to speech. Default: Error:'
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ]
      }
    }
  }
</script>