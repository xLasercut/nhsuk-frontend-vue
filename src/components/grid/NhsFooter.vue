<template>
  <footer role="contentinfo">
    <div class="nhsuk-footer" id="nhsuk-footer">
      <div class="nhsuk-width-container">
        <h2 class="nhsuk-u-visually-hidden">Support links</h2>
        <footer-nav-link :links="links"></footer-nav-link>
        <p class="nhsuk-footer__copyright">&copy; Crown copyright</p>
      </div>
    </div>
  </footer>
</template>

<script>
  import FooterNavLink from '@/components/grid/footer/FooterNavLink.vue'

  export default {
    name: "NhsFooter",
    props: ["links"],
    components: {
      FooterNavLink
    }
  }
</script>