<template>
  <nhs-main>
    <code-block file="ActionLink" />
    <argument-table heading="action-link" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: "href",
            type: "string",
            required: "yes",
            description: "The value of the link href attribute"
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