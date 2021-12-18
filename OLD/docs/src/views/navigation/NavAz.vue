<template>
  <nhs-main>
    <code-block file="NavAZ" />

    <argument-table heading="nav-az" :data-props="props" :data-slots="slots" />
    <argument-table heading="nav-az-item" :data-props="itemProps" :data-slots="itemSlots" :data-events="itemEvents" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: "aria-label",
            type: "string",
            required: "no",
            description: "aria-label for nav-az component. Default: A to Z Navigation"
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ],
        itemProps: [
          {
            name: "disabled",
            type: "boolean",
            required: "no",
            description: "If set to true, then the navigation item will not be within an anchor element."
          }
        ],
        itemSlots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ],
        itemEvents: [
          {
            name: 'click',
            trigger: 'on click'
          }
        ]
      }
    }
  }
</script>
