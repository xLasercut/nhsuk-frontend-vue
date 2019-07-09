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

      <div class="nhsuk-header__content" id="content-header" v-if="showNav || showSearch">
        <header-menu :show-search="showSearch" :show-nav="showNav"></header-menu>
        <header-search v-if="showSearch" :search-config="searchConfig"></header-search>
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
  import HeaderMenu from './header/HeaderMenu.vue'

  import nhsukHeader from '../../../node_modules/nhsuk-frontend/packages/components/header/header'

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
      searchConfig: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      HeaderNav,
      HeaderSearch,
      HeaderLogo,
      HeaderTransactional,
      HeaderMenu
    },
    computed: {
      classes() {
        var classes = ['nhsuk-header']
        if (this.transactional) {
          classes.push('nhsuk-header--transactional')
        }
        return classes.join(' ')
      },
      longName() {
        if (this.service.name && this.service.name.length > 22) {
          return true
        }
        return false
      }
    },
    mounted() {
      nhsukHeader()
    }
  }
</script>