<template>
  <nhs-main>
    <code-block file="Label" />
    <code-block file="LabelBold" />
    <code-block file="LabelHeading" />

    <argument-table heading="label" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'page-heading',
            type: 'boolean',
            description: 'Whether the label also acts as the heading for the page.'
          },
          {
            name: 'size',
            type: 'string',
            description: 'Size of the label font'
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slot'
          }
        ]
      }
    }
  }
</script>
