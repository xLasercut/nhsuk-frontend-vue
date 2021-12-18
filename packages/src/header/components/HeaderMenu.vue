<template>
  <div :class="classes" v-if="showNav" v-bind="$attrs">
    <button
      :class="menuButtonClasses"
      id="toggle-menu"
      aria-controls="header-navigation"
      aria-label="Open menu"
      :aria-expanded="open"
      @click="toggleNav()"
    >
      Menu
    </button>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, toRefs} from 'vue'

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
    },
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  setup(props, context) {
    const state = reactive({
      open: props.modelValue
    })

    const classes = computed((): string => {
      const classes = ['nhsuk-header__menu']

      if (!props.showSearch) {
        classes.push('nhsuk-header__menu--only')
      }

      return classes.join(' ')
    })

    const menuButtonClasses = computed((): string => {
      const classes = ['nhsuk-header__menu-toggle']

      if (state.open) {
        classes.push('is-active')
      }

      return classes.join(' ')
    })

    function toggleNav(): void {
      state.open = !state.open
      context.emit('update:modelValue', state.open)
    }

    return {classes, menuButtonClasses, ...toRefs(state), toggleNav}
  }
})
</script>
