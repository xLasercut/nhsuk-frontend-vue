<template>
  <nhs-main>
    <code-block file="Heading" />

    <argument-table heading="heading" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: "size",
            type: "string",
            description: "Size of heading. Default: l"
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