<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-footer :links="footerLinks"></nhs-footer>
    </code-block>

    <argument-table heading="Footer Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-footer :links="footerLinks"></nhs-footer>
  
  export default {
    data() {
      return {
        footerLinks: [
          {
            text: "link one",
            href: "/layout/footer"
          },
          {
            text: "link two",
            href: "/layout/footer"
          }
        ]
      }
    }
  }`

  export default {
    data() {
      return {
        source: source,
        footerLinks: [
          {
            text: "link one",
            href: "/layout/footer"
          },
          {
            text: "link two",
            href: "/layout/footer"
          }
        ],
        rows: [
          {
            name: "links",
            type: "array",
            required: "no",
            description: "Array of primary navigation items for use in the footer."
          },
          {
            name: "links.{}.href",
            type: "string",
            required: "no",
            description: "The href of a primary navigation item in the footer."
          },
          {
            name: "links.{}.text",
            type: "string",
            required: "no",
            description: "The label of a primary navigation item in the footer."
          },
          {
            name: "copyright",
            type: "string",
            required: "no",
            description: "Name of copyright holder. Default: Crown copyright"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the footer container."
          },
          {
            name: "hidden-text",
            type: "string",
            required: "no",
            description: "Hidden text used for text-to-speech. Default: Support links"
          }
        ]
      }
    }
  }
</script>