<template>
  <nhs-table :panel="true" :headers="header" :data="rows" :heading="tableHeading">
    <template #item="item">
      <nhs-table-item>{{item.props.name}}</nhs-table-item>
      <nhs-table-item>{{item.props.type}}</nhs-table-item>
      <nhs-table-item>{{item.props.required}}</nhs-table-item>
      <nhs-table-item>{{item.props.description}}</nhs-table-item>
    </template>
  </nhs-table>
</template>

<script>
  export default {
    props: ["rows", "heading"],
    data() {
      return {
        header: [
          {
            text: "Name"
          },
          {
            text: "Type"
          },
          {
            text: "Required"
          },
          {
            text: "Description"
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
