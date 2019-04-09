<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-list-panel :items="items" label="List Panel" back-to-top="/navigation/listpanel"></nhs-list-panel>
      
      <nhs-list-panel :disabled="true" label="Disabled List Panel" message="Disabled Message"></nhs-list-panel>
    </code-block>

    <argument-table heading="List Panel Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-list-panel :items="items" label="List Panel" back-to-top="/navigation/listpanel">
  </nhs-list-panel>
      
  <nhs-list-panel :disabled="true" label="Disabled List Panel" message="Disabled Message">
  </nhs-list-panel>
  
  export default {
    data() {
      return {
        items: [
          {
            text: "item 1",
            href: "/navigation/listpanel"
          },
          {
            text: "item 2",
            href: "/navigation/listpanel"
          },
          {
            text: "item 3",
            href: "/navigation/listpanel"
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
            text: "item 1",
            href: "/navigation/listpanel"
          },
          {
            text: "item 2",
            href: "/navigation/listpanel"
          },
          {
            text: "item 3",
            href: "/navigation/listpanel"
          }
        ],
        rows: [
          {
            name: "label",
            type: "string",
            required: "no",
            description: "The text label of the list panel."
          },
          {
            name: "id",
            required: "no",
            type: "string",
            description: "The ID of the label heading."
          },
          {
            name: "heading-level",
            type: "number",
            required: "no",
            description: "Optional heading level for the label heading. Default: 2"
          },
          {
            name: "back-to-top",
            type: "string",
            required: "no",
            description: "The href value of the back to top link."
          },
          {
            name: "disabled",
            type: "boolean",
            required: "no",
            description: "If set to true, this indicates there are no items in the list panel."
          },
          {
            name: "message",
            type: "string",
            required: "no",
            description: "The text value to display if there are no items in the list panel (and disabled has been set to true)."
          },
          {
            name: "items",
            type: "array",
            required: "no",
            description: "Array of list panel items."
          },
          {
            name: "items.{}.href",
            type: "string",
            required: "no",
            description: "The href value of an item in the list panel."
          },
          {
            name: "items.{}.href",
            type: "string",
            required: "no",
            description: "The text value of an item in the list panel."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the list panel."
          }
        ]
      }
    }
  }
</script>