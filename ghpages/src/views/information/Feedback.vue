<template>
  <nhs-main>
    <nhs-feedback title="Feedback" label="optional text" href="/information/feedback">
      Some feed back is required
    </nhs-feedback>
    <code-block :code="source">
      
    </code-block>
    
    <argument-table heading="feedback" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-feedback title="Feedback" label="optional text" href="/information/feedback">
    Some feed back is required
  </nhs-feedback>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "title",
            required: "yes",
            type: "string",
            description: "Title to be displayed in the feedback banner component."
          },
          {
            name: "label",
            type: "string",
            required: "no",
            description: "Optional text to be displayed within the link at the end of the content"
          },
          {
            name: "href",
            type: "string",
            required: "no",
            description: "Optional value of the link href attribute at the end of the content"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the feedback banner container."
          },
          {
            name: "hidden-text",
            type: "string",
            required: "no",
            description: "Hidden text used for text-to-speech: Default: feedback invite"
          }
        ]
      }
    }
  }
</script>