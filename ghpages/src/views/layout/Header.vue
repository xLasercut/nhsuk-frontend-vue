<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-header :show-nav="true" :show-search="true" :primary-links="primaryLinks">
      </nhs-header>
    </code-block>

    <argument-table heading="Header Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-header :show-nav="true" :show-search="true" :primary-links="primaryLinks">
  </nhs-header>
  
  export default {
    data() {
      return {
        primaryLinks: [
          {
            href: '/layout/header',
            text: 'Link one'
          },
          {
            href: '/layout/header',
            text: 'Link two'
          },
          {
            href: '/layout/header',
            text: 'Link three'
          }
        ]
      }
    }
  }`

  export default {
    data() {
      return {
        source: source,
        primaryLinks: [
          {
            href: '/layout/header',
            text: 'Link one'
          },
          {
            href: '/layout/header',
            text: 'Link two'
          },
          {
            href: '/layout/header',
            text: 'Link three'
          }
        ],
        rows: [
          {
            name: "show-nav",
            type: "boolean",
            required: "yes",
            description: "Set to 'true' to show the navigation links in the header."
          },
          {
            name: "show-search",
            type: "boolean",
            required: "yes",
            description: "Set to 'true' to show the site search input form."
          },
          {
            name: "home-href",
            type: "string",
            required: "no",
            description: "The href of the link for the logo and mobile home link in the navigation links. Default: '/'"
          },
          {
            name: "aria-label",
            type: "string",
            required: "no",
            description: "Aria label for the logo href. Default: NHS homepage"
          },
          {
            name: "primary-links",
            type: "array",
            required: "no",
            description: "Array of navigation links for use in the header"
          },
          {
            name: "primary-links.{}.href",
            type: "string",
            required: "no",
            description: "The href of a navigation item in the header."
          },
          {
            name: "primary-links.{}.text",
            type: "string",
            required: "no",
            description: "The label of a navigation item in the header."
          },
          {
            name: "transactional",
            type: "boolean",
            required: "no",
            description: "Set to 'true' if this is a transactional header (with smaller logo)."
          },
          {
            name: "transactional-service",
            type: "object",
            required: "no",
            description: "Object containing the name and href and optional boolean longName of the transactional service. Set this to 'true' if the transactional service name is longer than 22 characters."
          },
          {
            name: "service",
            type: "object",
            required: "no",
            description: "Object containing the name and optional boolean longName of the service. Set this to 'true' if the service name is longer than 22 characters."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the header container."
          }
        ]
      }
    }
  }
</script>