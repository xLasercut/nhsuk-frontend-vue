<template>
  <header :class="classes" role="banner">
    <div class="nhsuk-width-container nhsuk-header__container">
      <header-logo
        :home-href="homeHref" :service="service"
        :aria-label="ariaLabel" :transactional="transactional"
      ></header-logo>
      <header-transactional
        v-if="transactional && !showNav && !showSearch && service"
        :service="service" :long-name="longName"
      >
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
        default: false
      },
      showNav: {
        type: Boolean,
        default: false
      },
      transactional: {
        type: Boolean,
        default: false
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
      },
      longName: {
        type: Boolean,
        default: false
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
        if (this.transactional) {
          classes.push('nhsuk-header--transactional')
        }
        return classes.join(' ')
      }
    }
  }
</script>