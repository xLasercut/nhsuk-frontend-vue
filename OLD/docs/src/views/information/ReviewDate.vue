<template>
  <nhs-main>
    <code-block file="ReviewDate" />
    <argument-table heading="review-date" :data-props="props" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'last-review',
            type: 'string',
            description: 'The value of the last review date'
          },
          {
            name: 'next-review',
            type: 'string',
            description: 'The value of the next review date'
          }
        ]
      }
    }
  }
</script>