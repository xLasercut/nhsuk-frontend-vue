<template>
  <header :class="classes" role="banner">
    <div class="nhsuk-width-container nhsuk-header__container">
      <header-logo :homeHref="homeHref" :service="service" :aria-label="ariaLabel"></header-logo>
      <header-transactional v-if="transactionalService && !showNav && !showSearch" :transactional-service="transactionalService">
      </header-transactional>

      <div class="nhsuk-header__content" id="content-header">

        <div class="nhsuk-header__menu" v-if="showNav">
          <button class="nhsuk-header__menu-toggle" id="toggle-menu" aria-controls="header-navigation" aria-label="Open menu">Menu</button>
        </div>

        <header-search v-if="showSearch"></header-search>
      </div>
    </div>

    <header-nav v-if="showNav">
      <slot></slot>
    </header-nav>
  </header>
</template>

<script>
  import HeaderLogo from './header/HeaderLogo.vue'
  import HeaderNav from './header/HeaderNav.vue'
  import HeaderSearch from './header/HeaderSearch.vue'
  import HeaderTransactional from './header/HeaderTransactional.vue'

  export default {
    name: 'NhsHeader',
    props: {
      showSearch: {
        type: Boolean,
        required: true
      },
      showNav: {
        type: Boolean,
        required: true
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      transactional: {
        type: Boolean,
        default: false
      },
      transactionalService: {
        type: Object
      },
      service: {
        type: Object
      },
      ariaLabel: {
        type: String,
        default: 'NHS homepage'
      },
      homeHref: {
        type: String,
        default: '/'
      }
    },
    components: {
      HeaderNav,
      HeaderSearch,
      HeaderLogo,
      HeaderTransactional
    },
    computed: {
      classes() {
        var classes = ['nhsuk-header']
        if (this.transactional || this.transactionalService) {
          classes.push('nhsuk-header--transactional')
        }
        return classes.join(' ')
      }
    }
  }
</script>