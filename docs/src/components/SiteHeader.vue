<template>
  <nhs-header show-nav :service="service">
    <nhs-header-item v-for="(item, index) in headerLinks" :key="index" :href="item.href">
      {{item.text}}
    </nhs-header-item>
  </nhs-header>
</template>

<script>
  import RouteHelper from '../assets/mixins/route-helper.js'

  export default {
    mixins: [ RouteHelper ],
    data() {
      return {
        headerLinks: [
          {
            text: "Layout",
            href: "/layout"
          },
          {
            text: "Information",
            href: "/information"
          },
          {
            text: "Navigation",
            href: "/navigation"
          },
          {
            text: "Form",
            href: "/form"
          },
          {
            text: "Typography",
            href: "/typography"
          }
        ],
        service: {
          name: "Unofficial NHS UK frontend vue component library",
          longName: true
        }
      }
    }
  }
</script>
