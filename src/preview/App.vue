<template>
  <div>
    <nhs-header :nav="true">
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
            url: "/layout/home"
          },
          {
            label: "Information",
            url: "/information/home"
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