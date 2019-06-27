<template>
  <nhs-main>
    <code-block :template="template">
      <nhs-row>
        <nhs-col>
          <nhs-body>
            body normal
          </nhs-body>

          <nhs-body size="s">
            body s
          </nhs-body>
        </nhs-col>
      </nhs-row>
    </code-block>

    <argument-table heading="body" :data-props="props" :data-slots="slots">
    </argument-table>
  </nhs-main>
</template>

<script>
  var template = `
  <nhs-body>
    body normal
  </nhs-body>

  <nhs-body size="s">
    body s
  </nhs-body>
  `

  export default {
    data() {
      return {
        template: template,
        props: [
          {
            name: "size",
            type: "string",
            required: "no",
            description: "size of the body text."
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