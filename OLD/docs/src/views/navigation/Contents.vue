<template>
  <nhs-main>
    <code-block file="ContentsList" />
    <argument-table heading="contents" :data-props="props" :data-slots="slots" />
    <argument-table heading="contents-item" :data-props="propsItem" :data-slots="slotsItem" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: 'aria-label',
            type: 'string',
            description: 'Label used for text-to-speech. Default: Pages in this guide'
          },
          {
            name: 'hidden-text',
            type: 'string',
            description: 'Hidden text used for text-to-speech. Default: Contents'
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slot'
          }
        ],
        propsItem: [
          {
            name: "href",
            type: "string",
            description: "Href value of an item in the contents list. If not provided, item will show as current page"
          },
          {
            name: "aria-current",
            type: "string",
            description: "Hidden label on the active page in the list, used for text-to-speech. Default: page"
          }
        ],
        slotsItem: [
          {
            name: 'default',
            description: 'default vue slot'
          }
        ]
      }
    }
  }
</script>