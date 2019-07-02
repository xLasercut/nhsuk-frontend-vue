<template>
  <nhs-main>
    <code-block file="Header" />
    <code-block file="HeaderServiceSearch" />
    <code-block file="HeaderTransactionalName" />

    <argument-table heading="header" :data-props="props" :data-slots="slots" />
    <argument-table heading="header-item" :data-props="itemProps" :data-slots="itemSlots"></argument-table>
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        props: [
          {
            name: "show-nav",
            type: "boolean",
            description: "Set to 'true' to show the navigation links in the header."
          },
          {
            name: "show-search",
            type: "boolean",
            description: "Set to 'true' to show the site search input form."
          },
          {
            name: "home-href",
            type: "string",
            description: "The href of the link for the logo and mobile home link in the navigation links. Default: '/'"
          },
          {
            name: "aria-label",
            type: "string",
            description: "Aria label for the logo href. Default: NHS homepage"
          },
          {
            name: "transactional",
            type: "boolean",
            description: "Set to 'true' if this is a transactional header (with smaller logo)."
          },
          {
            name: "service",
            type: "object",
            description: "Object containing the name and href of the service"
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
            name: "href",
            type: "string",
            required: "yes",
            description: "Link of the header navigation link"
          }
        ],
        itemSlots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ]
      }
    }
  }
</script>