<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-list-panel  label="List Panel" :back-to-top="true">
        <nhs-list-panel-item href="/navigation/listpanel">item 1</nhs-list-panel-item>
        <nhs-list-panel-item href="/navigation/listpanel">item 2</nhs-list-panel-item>
        <nhs-list-panel-item href="/navigation/listpanel">item 3</nhs-list-panel-item>
      </nhs-list-panel>
      
      <nhs-list-panel :disabled="true" label="Disabled List Panel" message="Disabled Message"></nhs-list-panel>
    </code-block>

    <argument-table heading="list-panel" :rows="lprows"></argument-table>
    <argument-table heading="list-panel-item" :rows="lpirows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-list-panel  label="List Panel" :back-to-top="true">
    <nhs-list-panel-item href="/navigation/listpanel">item 1</nhs-list-panel-item>
    <nhs-list-panel-item href="/navigation/listpanel">item 2</nhs-list-panel-item>
    <nhs-list-panel-item href="/navigation/listpanel">item 3</nhs-list-panel-item>
  </nhs-list-panel>
  
  <nhs-list-panel :disabled="true" label="Disabled List Panel" message="Disabled Message"></nhs-list-panel>`

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
        lprows: [
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
            type: "boolean",
            required: "no",
            description: "If set to true, back-to-top link will be displayed"
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
            description: "The text value to display if disabled has been set to true."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the list panel."
          }
        ],
        lpirows: [
          {
            name: "href",
            type: "string",
            required: "yes",
            description: "The href value of an item in the list panel."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the list panel item."
          }
        ]
      }
    }
  }
</script>