<template>
  <nhs-main>
    <code-block file="Footer" />
    <code-block file="FooterColumn" />

    <argument-table heading="footer" :data-props="props" :data-slots="slots" />
    <argument-table heading="footer-item" :data-props="propsItem" :data-slots="slotsItem" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: "copyright",
            type: "string",
            description: "Name of copyright holder. Default: Crown copyright"
          },
          {
            name: "hidden-text",
            type: "string",
            description: "Hidden text used for text-to-speech. Default: Support links"
          },
          {
            name: 'column',
            type: 'boolean',
            description: 'Change footer links to column'
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ],
        propsItem: [
          {
            name: "href",
            type: "string",
            required: "yes",
            description: "The href of a primary navigation item in the footer."
          }
        ],
        slotsItem: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ]
      }
    }
  }
</script>