<template>
  <div :class="classes" v-if="showNav" v-bind="$attrs">
    <button
      class="nhsuk-header__menu-toggle"
      id="toggle-menu" aria-controls="header-navigation"
      aria-label="Open menu">
      Menu
    </button>
  </div>
</template>

<script>
import {computed, defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
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
  setup(props) {
    const classes = computed(() => {
      let classes = [ 'nhsuk-header__menu' ]

      if (!props.showSearch) {
        classes.push('nhsuk-header__menu--only')
      }

      return classes.join(' ')
    })
    return {classes}
  }
})
</script>
