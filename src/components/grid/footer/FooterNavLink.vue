<template>
  <ul class="nhsuk-footer__list">
    <li class="nhsuk-footer__list-item" v-for="(link, index) in links" :key="footerNavLinkKey(index)"><a class="nhsuk-footer__list-item-link" :href="link.url" >{{link.label}}</a></li>
  </ul>
</template>

<script>
  export default {
    props: ["links"],
    methods: {
      footerNavLinkKey(index) {
        return `footer_nav_link_${index}`
      }
    }
  }
</script>

