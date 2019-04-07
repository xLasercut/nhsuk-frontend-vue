<template>
  <nhs-main>
    <code-block :code="sourceCode">
      <nhs-breadcrumb :items="breadcrums" href="/navigation/breadcrumb" text="Back to Level Five">
      </nhs-breadcrumb>
    </code-block>

    <argument-table heading="Breadcrumb Arguments" :rows="rows">
    </argument-table>
  </nhs-main>
</template>

<script>
  import ArgumentTable from '../../components/ArgumentTable.vue'

  var source = `<nhs-breadcrumb :items="breadcrums" href="/navigation/breadcrumb" text="Back to Level Five">
  </nhs-breadcrumb>
  
  export default {
    data() {
      return {
        breadcrums: [
          {
            text: "Level One",
            href: "/navigation/breadcrumb"
          },
          {
            text: "Level Two",
            href: "/navigation/breadcrumb"
          },
          {
            text: "Level Three"
          },
          {
            text: "Level Four",
            href: "/navigation/breadcrumb"
          }
        ]
      }
    }
  }`

  export default {
    components: {
          ArgumentTable
    },
    data() {
      return {
        sourceCode: source,
        breadcrums: [
          {
            text: "Level One",
            href: "/navigation/breadcrumb"
          },
          {
            text: "Level Two",
            href: "/navigation/breadcrumb"
          },
          {
            text: "Level Three"
          },
          {
            text: "Level Four",
            href: "/navigation/breadcrumb"
          }
        ],
        rows: [
          {
            name: "items",
            type: "array",
            required: "yes",
            description: "Array of breadcrumbs item objects."
          },
          {
            name: "items.{}.text",
            type: "string",
            required: "yes",
            description: "Text to use within the breadcrumbs item."
          },
          {
            name: "items.{}.href",
            type: "string",
            required: "no",
            description: "Link for the breadcrumbs item."
          },
          {
            name: "items.{}.attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the breadcrumb anchor item."
          },
          {
            name: "href",
            type: "string",
            required: "yes",
            description: "Link of the back link when in mobile mode"
          },
          {
            name: "text",
            type: "string",
            required: "yes",
            description: "Text for the back link when in mobile mode"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the breadcrumbs container."
          }
        ]
      }
    }
  }
</script>