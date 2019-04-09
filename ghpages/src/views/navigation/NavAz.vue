<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-nav-az :items="items"></nhs-nav-az>
    </code-block>

    <argument-table heading="Nav A-Z Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-nav-az :items="items"></nhs-nav-az>
  
  export default {
    data() {
      return {
        items: [
          {
            text: "A"
          },
          {
            text: "B",
            disabled: true
          },
          {
            text: "C"
          }
        ]
      }
    }
  }`

  export default {
    data() {
      return {
        source: source,
        items: [
          {
            text: "A"
          },
          {
            text: "B",
            disabled: true
          },
          {
            text: "C"
          }
        ],
        rows: [
          {
            name: "items",
            type: "array",
            required: "yes",
            description: "Array of navigation items."
          },
          {
            name: "items.{}.text",
            type: "string",
            required: "yes",
            description: "The label of the item in the navigation."
          },
          {
            name: "items.{}.disabled",
            type: "boolean",
            required: "no",
            description: "If set to true, then the navigation item will not be within an anchor element."
          },
          {
            name: "attributes",
            type: "boolean",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the nav a-z."
          }
        ]
      }
    }
  }
</script>
