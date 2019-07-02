<template>
  <nhs-main>
    <code-block file="Image" />
    <argument-table heading="image" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'src',
            type: 'string',
            required: 'yes',
            description: 'The source location of the image.'
          },
          {
            name: 'alt',
            type: 'string',
            required: 'yes',
            description: 'The alt text of the image.'
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