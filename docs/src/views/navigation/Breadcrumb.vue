<template>
  <nhs-main>
    <code-block file="Breadcrumb" />
    <argument-table heading="breadcrumb" :data-props="propsBreadcrumb" :data-slots="slotsBreadcrumb" />
    <argument-table heading="breadcrumb-item" :data-props="propsItem" :data-slots="slotsItem" />
    <argument-table heading="breadcrumb-backlink" :data-props="propsBackItem" :data-slots="slotsBackItem" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        propsBreadcrumb: [
          {
            name: 'aria-label',
            type: 'string',
            required: 'no',
            description: 'aria-label attribute for breadcrumb container. Default: Breadcrumb'
          }
        ],
        slotsBreadcrumb: [
          {
            name: 'default',
            description: 'default vue slots (used for breadcrumb item)'
          },
          {
            name: 'backlink',
            description: 'slots for breadcrumb back link'
          }
        ],
        propsItem: [
          {
            name: 'href',
            type: 'string',
            required: 'no',
            description: 'Link for the breadcrumb item. If not provided, breadcrumb item will show as normal text'
          }
        ],
        slotsItem: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ],
        propsBackItem: [
          {
            name: 'href',
            type: 'string',
            required: 'yes',
            description: 'Link for the breadcrumb backlink'
          }
        ],
        slotsBackItem: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ]
      }
    }
  }
</script>