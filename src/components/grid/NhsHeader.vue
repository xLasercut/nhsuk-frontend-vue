<template>
  <header class="nhsuk-header" role="banner">
    <div class="nhsuk-width-container nhsuk-header__container">
      <header-logo></header-logo>
      <div class="nhsuk-header__content" id="content-header">
        <div class="nhsuk-header__menu">
          <button class="nhsuk-header__menu-toggle" id="toggle-menu" aria-controls="header-navigation" aria-label="Open menu">Menu</button>
        </div>
        <header-search v-if="search"></header-search>
      </div>
    </div>
    <header-nav :links="links" v-if="nav"></header-nav>
    
  </header>
</template>

<script>
  import HeaderNav from '@/components/grid/header/HeaderNav.vue'
  import HeaderSearch from '@/components/grid/header/HeaderSearch.vue'
  import HeaderLogo from '@/components/grid/header/HeaderLogo.vue'

  export default {
    name: "NhsHeader",
    props: ["links", "search", "nav"],
    components: {
      HeaderNav,
      HeaderSearch,
      HeaderLogo
    }
  }
</script>