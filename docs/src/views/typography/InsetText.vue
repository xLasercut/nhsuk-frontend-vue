<template>
  <nhs-main>
    <code-block file="InsetText" />

    <argument-table heading="inset-text" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: "hidden-text",
            type: "string",
            description: "Hidden text used for text-to-speech. Default: Information:"
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ]
      }
    }
  }
</script>
