<template>
  <nhs-main>
    <code-block file="List" />
    <argument-table heading="list" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'type',
            type: 'string',
            description: 'Type of list - bullet, number or error. Default: bullet'
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