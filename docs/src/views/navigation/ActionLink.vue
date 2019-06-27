<template>
  <nhs-main>
    <code-block :template="template">
      <nhs-action-link href="/navigation/actionlink">
        This is an action link
      </nhs-action-link>
    </code-block>

    <argument-table heading="action-link" :data-props="props" :data-slots="slots">
    </argument-table>
  </nhs-main>
</template>

<script>
  var template = `
  <nhs-action-link href="/navigation/actionlink">
    This is an action link
  </nhs-action-link>
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
            description: "The value of the link href attribute"
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