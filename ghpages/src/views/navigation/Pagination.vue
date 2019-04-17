<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-pagination 
        previous-href="/navigation/pagination" previous-page="Last Page"
        next-href="/navigation/pagination" next-page="Next Page"
      ></nhs-pagination>
    </code-block>

    <argument-table heading="pagination" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-pagination 
    previous-href="/navigation/pagination" previous-page="Last Page"
    next-href="/navigation/pagination" next-page="Next Page"
  ></nhs-pagination>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "previous-href",
            type: "string",
            required: "no",
            description: "The value of the previous link href attribute."
          },
          {
            name: "previous-page",
            type: "string",
            required: "no",
            description: "The text of the previous link."
          },
          {
            name: "next-href",
            type: "string",
            required: "no",
            description: "The value of the next link href attribute."
          },
          {
            name: "next-page",
            type: "string",
            required: "no",
            description: "The text of the next link."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the pagination."
          }
        ]
      }
    }
  }
</script>