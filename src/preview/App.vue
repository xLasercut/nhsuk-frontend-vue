<template>
  <div>
    <nhs-header :search="false">
      <nhs-header-logo slot="header-logo" label="NHS UK frontend vue component library"></nhs-header-logo>
      <template slot="header-link">
        <nhs-header-link v-for="(link, index) in headerLinks" :to="link.url" :key="index">{{link.label}}</nhs-header-link>
      </template>
    </nhs-header>
    <router-view></router-view>
    <nhs-footer>
      <nhs-footer-link to="https://github.com/xLasercut/nhsuk-frontend-vue">Github</nhs-footer-link>
    </nhs-footer>
  </div>
</template>

<script>
  export default {
    name:  'App',
    data() {
      return {
        headerLinks: [
          {
            label: "Layout",
            url: "/layout"
          },
          {
            label: "Information",
            url: "/information"
          },
          {
            label: "Navigation",
            url: "/navigation"
          },
          {
            label: "Form",
            url: "/form"
          },
          {
            label: "Typography",
            url: "/typography"
          }
        ],
        footerLinks: [
          {
            label: "github",
            url: "https://github.com/xLasercut/nhsuk-frontend-vue"
          }
        ]
      }
    }
  }
</script>