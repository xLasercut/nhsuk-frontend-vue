<template>
  <nhs-main>
    <code-block :code="sourceDo">
      <nhs-dodont title="Do list" type="tick" :items="doItems">
      </nhs-dodont>
    </code-block>

    <code-block :code="sourceDont">
      <nhs-dodont title="Don't list" type="cross" :items="dontItems">
      </nhs-dodont>
    </code-block>

    <argument-table heading="dodont" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var sourceDo = `<nhs-dodont title="Do list" type="tick" :items="doItems">
  </nhs-dodont>
  
  export default {
    data() {
      return {
        doItems: ["item one", "item two", "item three"]
      }
    }
  }`

  var sourceDont = `<nhs-dodont title="Don't list" type="cross" :items="dontItems">
  </nhs-dodont>
  
  export default {
    data() {
      return {
        dontItems: ["item four", "item five", "item six"]
      }
    }
  }`

  export default {
    data() {
      return {
        sourceDo: sourceDo,
        sourceDont: sourceDont,
        doItems: ["item one", "item two", "item three"],
        dontItems: ["item four", "item five", "item six"],
        rows: [
          {
            name: "title",
            type: "string",
            required: "yes",
            description: "Title to be displayed on the do and don't list component."
          },
          {
            name: "type",
            type: "string",
            required: "no",
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
            required: "no",
            description: "Optional heading level for the title heading. Default: 3"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the do and don't list container."
          }
        ]
      }
    }
  }
</script>

