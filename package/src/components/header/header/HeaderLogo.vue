<template>
  <div :class="classes">
    <header-logo-org :organisation="organisation" v-if="organisation" :home-href="homeHref"></header-logo-org>
    <header-logo-normal :aria-label="ariaLabel" :home-href="homeHref" :service="service" v-if="!organisation"></header-logo-normal>
  </div>
</template>

<script>
  import HeaderLogoNormal from './logo/HeaderLogoNormal.vue'
  import HeaderLogoOrg from './logo/HeaderLogoOrg.vue'

  export default {
    components: {
      HeaderLogoNormal, HeaderLogoOrg
    },
    props: {
      ariaLabel: {
        type: String,
        required: true
      },
      homeHref: {
        type: String,
        required: true
      },
      service: {
        required: true
      },
      transactional: {
        type: Boolean,
        required: true
      },
      organisation: {
        required: true
      },
      showNav: {
        type: Boolean,
        required: true
      },
      showSearch: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      classes() {
        var classes = ['nhsuk-header__logo']

        if (!this.showSearch && this.showNav) {
          classes.push('nhsuk-header__logo--only')
        }

        return classes.join(' ')
      }
    }
  }

</script>