<template>
  <nhs-table :panel="true" :head="header" :rows="rows" :heading="tableHeading">
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
    },
    computed: {
      tableHeading() {
        return `nhs-${this.heading} arguments`
      }
    }
  }
</script>
