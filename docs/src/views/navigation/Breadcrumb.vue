<template>
  <nhs-main>
    <code-block :code="sourceCode">
      <nhs-breadcrumb>
        <nhs-breadcrumb-item href="/navigation/breadcrumb">Level One</nhs-breadcrumb-item>
        <nhs-breadcrumb-item href="/navigation/breadcrumb">Level Two</nhs-breadcrumb-item>
        <nhs-breadcrumb-item>Level Three</nhs-breadcrumb-item>
        <nhs-breadcrumb-item href="/navigation/breadcrumb">Level Four</nhs-breadcrumb-item>
        <nhs-breadcrumb-backlink slot="backlink" href="/navigation/breadcrumb">Back Link</nhs-breadcrumb-backlink>
      </nhs-breadcrumb>
    </code-block>

    <argument-table heading="breadcrumb" :rows="rows"></argument-table>
    <argument-table heading="breadcrumb-item" :rows="rowsi"></argument-table>
    <argument-table heading="breadcrumb-backlink" :rows="rowsbl"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-breadcrumb>
    <nhs-breadcrumb-item href="/navigation/breadcrumb">Level One</nhs-breadcrumb-item>
    <nhs-breadcrumb-item href="/navigation/breadcrumb">Level Two</nhs-breadcrumb-item>
    <nhs-breadcrumb-item>Level Three</nhs-breadcrumb-item>
    <nhs-breadcrumb-item href="/navigation/breadcrumb">Level Four</nhs-breadcrumb-item>
    <nhs-breadcrumb-backlink slot="backlink" href="/navigation/breadcrumb">Back Link</nhs-breadcrumb-backlink>
  </nhs-breadcrumb>`

  export default {
    data() {
      return {
        sourceCode: source,
        rows: [
          {
            name: "aria-label",
            type: "string",
            required: "no",
            description: "aria-label attribute for breadcrumb container. Default: Breadcrumb"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the breadcrumbs container."
          }
        ],
        rowsi: [
          {
            name: "href",
            type: "string",
            required: "no",
            description: "Link for the breadcrumb item. If not provided, breadcrumb item will show as normal text"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the breadcrumb item"
          }
        ],
        rowsbl: [
          {
            name: "href",
            type: "string",
            required: "yes",
            description: "Link for the breadcrumb backlink"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the breadcrumb backlink"
          }
        ]
      }
    }
  }
</script>