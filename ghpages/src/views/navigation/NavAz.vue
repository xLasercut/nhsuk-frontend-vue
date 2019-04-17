<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-nav-az>
        <nhs-nav-az-item>A</nhs-nav-az-item>
        <nhs-nav-az-item :disabled="true">B</nhs-nav-az-item>
        <nhs-nav-az-item>C</nhs-nav-az-item>
      </nhs-nav-az>
    </code-block>

    <argument-table heading="nav-az" :rows="narows"></argument-table>
    <argument-table heading="nav-az-item" :rows="nairows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-nav-az>
    <nhs-nav-az-item>A</nhs-nav-az-item>
    <nhs-nav-az-item :disabled="true">B</nhs-nav-az-item>
    <nhs-nav-az-item>C</nhs-nav-az-item>
  </nhs-nav-az>`

  export default {
    data() {
      return {
        source: source,
        narows: [
          {
            name: "aria-label",
            type: "string",
            required: "no",
            description: "aria-label for nav-az component. Default: A to Z Navigation"
          },
          {
            name: "attributes",
            type: "boolean",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the nav a-z."
          }
        ],
        nairows: [
          {
            name: "disabled",
            type: "boolean",
            required: "no",
            description: "If set to true, then the navigation item will not be within an anchor element."
          },
          {
            name: "attributes",
            type: "boolean",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the nav a-z item."
          }
        ]
      }
    }
  }
</script>
