<template>
  <div>
    <nhs-header :search="false">
      <nhs-header-link v-for="(link, index) in headerLinks" :to="link.url" :key="index">{{link.label}}</nhs-header-link>
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