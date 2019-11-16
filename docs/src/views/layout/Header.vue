<template>
  <nhs-main>
    <code-block file="Header" />
    <code-block file="HeaderServiceSearch" />
    <code-block file="HeaderTransactionalName" />
    <code-block file="HeaderOrg" />
    <code-block file="HeaderOrgWhiteNav" />

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
          },
          {
            name: 'organisation',
            type: 'object',
            description: 'Settings for header with organisation logo'
          },
          {
            name: 'organisation.name',
            type: 'string',
            description: 'Organisation name'
          },
          {
            name: 'organisation.split',
            type: 'string',
            description: 'Longer organisation names can be split onto multiple lines.'
          },
          {
            name: 'organisation.descriptor',
            type: 'string',
            description: 'Organisation descriptor'
          },
          {
            name: 'organisation.logoURL',
            type: 'string',
            description: 'Organisation logo if using a static asset, such as PNG, is preferred.'
          },
          {
            name: 'search-config',
            type: 'object',
            description: 'Object for search config.'
          },
          {
            name: 'search-config.source',
            type: 'method',
            description: 'Defines what is rendered in autocomplete. Takes a method with query and callback'
          },
          {
            name: 'search-config.onConfirm',
            type: 'method',
            description: 'Defines what happens after item is selected in autocomplete.'
          },
          {
            name: 'search-action',
            type: 'string',
            description: 'The search action endpoint. Defaults to "https://www.nhs.uk/search/"'
          },
          {
            name: 'search-input-name',
            type: 'string',
            description: 'The name for the search field. Defaults to "q"'
          },
          {
            name: 'white-nav',
            type: 'boolean',
            description: 'Toggle white navigation bar. Default: False'
          },
          {
            name: 'white-header',
            type: 'boolean',
            description: 'Toggle white header. Default: False'
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