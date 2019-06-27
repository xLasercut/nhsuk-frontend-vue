<template>
  <nhs-main>
    <code-block :template="template">
      <nhs-back-link href="/navigation/backlink">
        This is a back link
      </nhs-back-link>
    </code-block>

    <argument-table heading="back-link" :data-props="props" :data-slots="slots">
    </argument-table>
  </nhs-main>
</template>

<script>
  var template = `
  <nhs-back-link href="/navigation/backlink">
    This is a back link
  </nhs-back-link>
  `

  export default {
    data() {
      return {
        template: template,
        props: [
          {
            name: "href",
            type: "string",
            required: "yes",
            description: "The value of the link href attribute."
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