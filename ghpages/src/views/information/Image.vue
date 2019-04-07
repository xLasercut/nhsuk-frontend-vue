<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-image src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg" alt="Picture of allergic conjunctivitis">
        Itchy, red, watering eyes
      </nhs-image>
    </code-block>
    
    <argument-table heading="Image Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-image src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg" alt="Picture of allergic conjunctivitis">
    Itchy, red, watering eyes
  </nhs-image>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "src",
            type: "string",
            required: "yes",
            description: "The source location of the image."
          },
          {
            name: "alt",
            type: "string",
            required: "yes",
            description: "The alt text of the image."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the image container."
          }
        ]
      }
    }
  }
</script>