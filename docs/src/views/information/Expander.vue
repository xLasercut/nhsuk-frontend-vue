<template>
  <nhs-main>
    <code-block file="Expander" />
    <code-block file="ExpanderGroup" />

    <argument-table heading="expander" :data-props="props" :data-slots="slots" />
    <argument-table heading="expander-group" :data-slots="slotsGroup" />
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
            description: 'Text to be displayed on the expander component.'
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ],
        slotsGroup: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ]
      }
    }
  }
</script>