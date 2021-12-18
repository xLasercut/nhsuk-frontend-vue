<template>
  <nhs-main>
    <code-block file="Details" />
    <argument-table heading="details" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'text',
            type: 'string',
            required: 'yes',
            description: 'Text to be displayed on the details component.'
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