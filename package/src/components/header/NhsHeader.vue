<template>
  <header :class="classes" role="banner">
    <div class="nhsuk-width-container nhsuk-header__container">
      <header-logo
        :home-href="homeHref" :service="service" :organisation="organisation"
        :aria-label="ariaLabel" :transactional="transactional"
        :showNav="showNav" :showSearch="showSearch"
      ></header-logo>
      <header-transactional v-if="!showNav && !showSearch" :transactionalService="transactionalService"></header-transactional>

      <div class="nhsuk-header__content" id="content-header" v-if="showNav || showSearch">
        <header-menu :show-search="showSearch" :show-nav="showNav"></header-menu>
        <header-search v-if="showSearch" :search-config="searchConfig" :search-action="searchAction" :search-input-name="searchInputName"></header-search>
      </div>
    </div>

    <header-nav v-if="showNav" :home-href="homeHref" :home-text="homeText">
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

  import MenuToggle from '../../../node_modules/nhsuk-frontend/packages/components/header/menuToggle'
  import SearchToggle from '../../../node_modules/nhsuk-frontend/packages/components/header/searchToggle'

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
      transactionalService: {
        type: Object,
        default: null
      },
      service: {
        type: Object,
        default: null
      },
      organisation: {
        type: Object,
        default: null
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
      },
      whiteHeader: {
        type: Boolean,
        default: false
      },
      whiteNav: {
        type: Boolean,
        default: false
      },
      searchAction: {
        type: String,
        default: 'https://www.nhs.uk/search/'
      },
      searchInputName: {
        type: String,
        default: 'q'
      },
      homeText: {
        type: String,
        default: 'Home'
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
        if (this.transactional || this.transactionalService) {
          classes.push('nhsuk-header--transactional')
        }

        if (this.organisation && this.organisation.name) {
          classes.push('nhsuk-header--organisation')
        }

        if (this.whiteHeader) {
          classes.push('nhsuk-header--white')
        }

        if (this.whiteNav) {
          classes.push('nhsuk-header--white-nav')
        }

        return classes.join(' ')
      }
    },
    mounted() {
      MenuToggle()
      SearchToggle()
    }
  }
</script>