<template>
  <nhs-main>
    <code-block file="HintText" />
    <argument-table heading="hint-text" :data-props="props" :data-slots="slots" />
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
            description: 'Optional id attribute to add to the hint span tag.'
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
