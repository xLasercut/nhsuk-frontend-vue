<template>
  <nhs-main>
    <code-block file="DoDont" />
    <code-block file="DoDontSlots" />
    <argument-table heading="dodont" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
   export default {
    data() {
      return {
        props: [
          {
            name: "title",
            type: "string",
            required: "yes",
            description: "Title to be displayed on the do and don't list component."
          },
          {
            name: "type",
            type: "string",
            description: "Type of do and don't list component, 'cross', 'tick'. Default: tick"
          },
          {
            name: "items",
            type: "array",
            required: "yes",
            description: "Items to be displayed within the do and don't list component"
          },
          {
            name: "heading-level",
            type: "number",
            description: "Optional heading level for the title heading. Default: 3"
          }
        ],
        slots: [
          {
            name: 'item',
            props: 'each item in items prop',
            description: 'slot for each list item'
          }
        ]
      }
    }
  }
</script>

