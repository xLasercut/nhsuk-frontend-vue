<template>
  <nhs-table :panel="true" :head="header" :rows="rows" :heading="heading">
  </nhs-table>
</template>

<script>
  export default {
    props: ["rows", "heading"],
    data() {
      return {
        header: [
          {
            text: "Name",
            key: "name"
          },
          {
            text: "Type",
            key: "type"
          },
          {
            text: "Required",
            key: "required"
          },
          {
            text: "Description",
            key: "description"
          }
        ]
      }
    }
  }
</script>
