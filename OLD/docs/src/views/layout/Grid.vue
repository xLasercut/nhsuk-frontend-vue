<template>
  <nhs-main>
    <code-block file="Grid" />
    <argument-table heading="main" :data-props="props" :data-slots="slots" />
    <argument-table heading="row" :data-slots="slots" />
    <argument-table heading="col" :data-props="colProps" :data-slots="slots" />
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
            description: 'type of main container (normal or fluid). Fluid container fill entire screen width. default: normal'
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ],
        colProps: [
          {
            name: 'span',
            type: 'number',
            description: 'Width of container (100, 75, 66, 33 or 25). default: 100'
          }
        ]
      }
    }
  }
</script>

