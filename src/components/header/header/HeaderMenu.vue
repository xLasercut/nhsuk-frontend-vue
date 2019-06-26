<template>
  <div :class="classes" v-if="showNav">
    <button
      class="nhsuk-header__menu-toggle"
      id="toggle-menu" aria-controls="header-navigation"
      aria-label="Open menu">
      Menu
    </button>
  </div>
</template>

<script>
  export default {
    props: {
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
        var classes = [ 'nhsuk-header__menu' ]

        if (!this.showSearch) {
          classes.push('nhsuk-header__menu--only')
        }

        return classes.join(' ')
      }
    }
  }
</script>