<template>
  <code-block name="DoDont" />
  <code-block name="DoDontSlots" />
  <argument-table heading="nhs-dodont" />
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
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
})
</script>

