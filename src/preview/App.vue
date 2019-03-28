<template>
  <div>
    <nhs-header :links="navLinks" :nav="true"></nhs-header>
    <nhs-breadcrum :links="navLinks"></nhs-breadcrum>
    <nhs-main>
      <router-view></router-view>
    </nhs-main>
    <nhs-footer :links="footerLinks"></nhs-footer>
  </div>
</template>

<script>
  export default {
    name:  'App',
    data() {
      return {
        navLinks: [
          {
            label: "Grid",
            url: "/#/grid"
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