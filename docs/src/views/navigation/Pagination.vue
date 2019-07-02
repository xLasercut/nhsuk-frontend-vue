<template>
  <nhs-main>
    <code-block file="Pagination" />
    <argument-table heading="pagination" :data-props="props" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: "previous-href",
            type: "string",
            description: "The value of the previous link href attribute."
          },
          {
            name: "previous-page",
            type: "string",
            description: "The text of the previous link."
          },
          {
            name: "next-href",
            type: "string",
            description: "The value of the next link href attribute."
          },
          {
            name: "next-page",
            type: "string",
            description: "The text of the next link."
          }
        ]
      }
    }
  }
</script>