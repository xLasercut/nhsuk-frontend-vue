<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-hero
        heading="We're here for you"
        text="Helping you take control of your health and wellbeing."
        image-url="https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg"
      ></nhs-hero>
      <br><br>
    </code-block>

    <argument-table heading="Hero Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-hero
    heading="We're here for you"
    text="Helping you take control of your health and wellbeing."
    image-url="https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg"
  ></nhs-hero>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "heading",
            type: "string",
            required: "no",
            description: "Text heading of the hero component."
          },
          {
            name: "text",
            type: "string",
            required: "no",
            description: "Text content of the hero component."
          },
          {
            name: "image-url",
            type: "string",
            required: "no",
            description: "URL of the image of the hero component."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the hero container."
          }
        ]
      }
    }
  }
</script>
