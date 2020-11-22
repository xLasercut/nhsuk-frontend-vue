<template>
  <nhs-main>
    <code-block file="CardBasic" />
    <code-block file="CardClickable" />
    <code-block file="CardImage" />
    <code-block file="CardFeature" />
    <code-block file="CardGroup" />

    <argument-table heading="card" :data-props="props" :data-slots="slots" />
    <argument-table heading="card-group" :data-props="groupProps" :data-slots="groupSlots" />
  </nhs-main>
</template>

<script>
export default {
  data() {
    return {
      props: [
        {
          name: 'heading',
          type: 'string',
          description: 'Text heading of the card.'
        },
        {
          name: 'heading-classes',
          type: 'string',
          description: 'Optional additional classes to add to heading. Separate each class with a space.'
        },
        {
          name: 'heading-level',
          type: 'integer',
          description: 'Optional heading level for the card heading. Default: 2'
        },
        {
          name: 'href',
          type: 'string',
          description: 'The value of the card href attribute'
        },
        {
          name: 'clickable',
          type: 'boolean',
          description: 'If set to true, then the class nhsuk-card--clickable will be applied. Default: false'
        },
        {
          name: 'feature',
          type: 'boolean',
          description: 'If set to true, then the class nhsuk-card__heading--feature and nhsuk-card__content--feature will be applied. Default: false'
        },
        {
          name: 'img-url',
          type: 'string',
          description: 'The URL of the image in the card'
        },
        {
          name: 'img-alt',
          type: 'string',
          description: 'The alternative text of the image in the card'
        },
        {
          name: 'description',
          type: 'string',
          description: 'Text description within the card content.'
        }
      ],
      slots: [
        {
          name: 'heading',
          description: 'slot to replace heading with another component'
        },
        {
          name: 'description',
          description: 'slot to replace description with another component'
        }
      ],
      groupProps: [
        {
          name: 'type',
          type: 'string',
          description: 'Card group type (half, third, quarter). Default: half'
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
