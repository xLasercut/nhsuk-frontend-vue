<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-emergency-alert title="Emergency alert" last-updated="01/01/2000">
        Emergency
      </nhs-emergency-alert>
    </code-block>

    <argument-table heading="Emergency Alert Arugments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-emergency-alert title="Emergency alert" last-updated="01/01/2000">
    Emergency
  </nhs-emergency-alert>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "title",
            type: "string",
            required: "yes",
            description: "Title to be displayed in the emergency alert component."
          },
          {
            name: "last-updated",
            type: "string",
            required: "yes",
            description: "Optional text displayed below the main content to show last updated message"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the emergency alert container."
          },
          {
            name: "hidden-text",
            type: "string",
            required: "no",
            description: "Hidden text used for text-to-speech. Default: Alert:"
          }
        ]
      }
    }
  }
</script>