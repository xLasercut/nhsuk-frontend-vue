<template>
  <nhs-main>
    <code-block file="Hero" />
    <code-block file="HeroImageText" />

    <argument-table heading="hero" :data-props="props" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: "heading",
            type: "string",
            description: "Text heading of the hero component."
          },
          {
            name: "text",
            type: "string",
            description: "Text content of the hero component."
          },
          {
            name: "image-url",
            type: "string",
            description: "URL of the image of the hero component."
          }
        ]
      }
    }
  }
</script>
