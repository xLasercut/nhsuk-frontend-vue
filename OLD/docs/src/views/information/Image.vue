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
          },
          {
            name: 'srcset',
            type: 'string',
            description: 'A list of image source URLs and their respective sizes. Separate each image with a comma.'
          },
          {
            name: 'sizes',
            type: 'string',
            description: 'A list of screen sizes for the browser to load the correct image from the srcset images.'
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