<template>
  <nhs-main>
    <nhs-row v-for="(link, index) in sectionLinks" :key="index">
      <nhs-col>
        <nhs-button :name="`to_${link.text}`" :href="link.href">{{link.text}}</nhs-button>
      </nhs-col>
    </nhs-row>
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        sectionLinks: [
          {
            href: "/layout",
            text: "Layout"
          },
          {
            href: "/information",
            text: "Information"
          },
          {
            href: "/navigation",
            text: "Navigation"
          },
          {
            href: "/form",
            text: "Form"
          },
          {
            href: "/typography",
            text: "Typography"
          }
        ]
      }
    },
    methods: {
      changeRoute(route) {
        console.log(route)
      }
    }
  }
</script>