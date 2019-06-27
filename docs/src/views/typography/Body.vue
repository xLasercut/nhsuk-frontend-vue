<template>
  <nhs-main>
    <code-block file="Body" />
    <argument-table heading="body" :data-props="props" :data-slots="slots"/>
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
            required: "no",
            description: "size of the body text."
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