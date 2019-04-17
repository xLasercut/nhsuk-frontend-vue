<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-header :show-nav="true" :show-search="true">
        <nhs-header-item href="/layout/header">Link One</nhs-header-item>
        <nhs-header-item href="/layout/header">Link Two</nhs-header-item>
        <nhs-header-item href="/layout/header">Link Three</nhs-header-item>
      </nhs-header>
    </code-block>

    <argument-table heading="header" :rows="hrows"></argument-table>
    <argument-table heading="header-item" :rows="hirows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = ` <nhs-header :show-nav="true" :show-search="true">
    <nhs-header-item href="/layout/header">Link One</nhs-header-item>
    <nhs-header-item href="/layout/header">Link Two</nhs-header-item>
    <nhs-header-item href="/layout/header">Link Three</nhs-header-item>
  </nhs-header>`

  export default {
    data() {
      return {
        source: source,
        hrows: [
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
        ],
        hirows: [
          {
            name: "href",
            type: "string",
            required: "yes",
            description: "Link of the header navigation link"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the header item."
          }
        ]
      }
    }
  }
</script>