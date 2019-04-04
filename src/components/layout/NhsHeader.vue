<template>
  <header class="nhsuk-header" role="banner">
    <div class="nhsuk-width-container nhsuk-header__container">
      <slot name="header-logo"></slot>
      <div class="nhsuk-header__content" id="content-header">
        <div class="nhsuk-header__menu" v-if="nav">
          <button class="nhsuk-header__menu-toggle" id="toggle-menu" aria-controls="header-navigation" aria-label="Open menu">Menu</button>
        </div>
        <header-search v-if="search"></header-search>
      </div>
    </div>
    <header-nav v-if="nav">
      <slot name="header-link"></slot>
    </header-nav>
    
  </header>
</template>

<script>
  import HeaderNav from './header/HeaderNav.vue'
  import HeaderSearch from './header/HeaderSearch.vue'

  export default {
    name: "NhsHeader",
    props: {
      search: {
        type: Boolean,
        default: true
      },
      nav: {
        type: Boolean,
        default: true
      },
      label: {
        type: String,
        default: ""
      }
    },
    components: {
      HeaderNav,
      HeaderSearch
    }
  }
</script>