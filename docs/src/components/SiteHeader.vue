<template>
  <nhs-header :show-search="false" :show-nav="true" :service="service" :transactional="false">
    <nhs-header-item v-for="(item, index) in headerLinks" :key="index" :href="item.href">
      {{item.text}}
    </nhs-header-item>
  </nhs-header>
</template>

<script>
  export default {
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