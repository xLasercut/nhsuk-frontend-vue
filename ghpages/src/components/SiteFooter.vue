<template>
  <nhs-footer>
    <nhs-footer-item v-for="(item, index) in footerLinks" :key="index" :href="item.href">
      {{item.text}}
    </nhs-footer-item>
  </nhs-footer>
</template>

<script>
  export default {
    data() {
      return {
        footerLinks: [
          {
            text: "Github",
            href: "https://github.com/xLasercut/nhsuk-frontend-vue"
          }
        ]
      }
    }
  }
</script>