<template>
  <nhs-main>
    <code-block file="Fieldset" />
    <code-block file="FieldsetHeading" />
    <code-block file="FieldsetSlots" />
    <argument-table heading="fieldset" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
   export default {
    data() {
      return {
        props: [
          {
            name: "legend",
            type: "string",
            description: "Legend text."
          },
          {
            name: "page-heading",
            type: "boolean",
            description: "Whether the legend also acts as the heading for the page"
          },
          {
            name: 'size',
            type: 'string',
            description: 'size of heading. (l or xl)'
          }
        ],
        slots: [
          {
            name: 'legend',
            props: '\'legend\' prop of component',
            description: 'fieldset heading slots'
          },
          {
            name: 'default',
            description: 'default vue slots'
          }
        ]
      }
    }
  }
</script>