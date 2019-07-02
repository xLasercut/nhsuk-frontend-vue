<template>
  <nhs-main>
    <code-block file="Promo" />
    <code-block file="PromoGroup" />

    <argument-table heading="promo" :data-props="props" :data-slots="slots" />
    <argument-table heading="promo-group" :data-props="groupProps" :data-slots="groupSlots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'href',
            type: 'string',
            required: 'yes',
            description: 'The value of the promo href attribute'
          },
          {
            name: 'heading',
            type: 'string',
            required: 'yes',
            description: 'The text heading of the promo'
          },
          {
            name: 'heading-level',
            type: 'number',
            description: "Optional heading level for the promo heading. Default: 3"
          },
          {
            name: 'src',
            type: 'string',
            description: 'The URL of the image in the promo'
          },
          {
            name: 'alt',
            type: 'string',
            description: 'alt text of the image in the promo'
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ],
        groupProps: [
          {
            name: 'column',
            type: 'string',
            description: 'number of promos per row in the group. default: 3'
          }
        ],
        groupSlots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ]
      }
    }
  }
</script>