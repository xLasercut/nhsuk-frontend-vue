<template>
  <div>
    <nhs-header :show-search="false" :show-nav="true" :primary-links="headerLinks" :service="service" :transactional="false">
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
        footerLinks: [
          {
            label: "github",
            url: "https://github.com/xLasercut/nhsuk-frontend-vue"
          }
        ],
        service: {
          name: "NHS UK frontend vue component library",
          longName: true
        }
      }
    }
  }
</script>