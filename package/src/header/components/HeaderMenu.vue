<template>
  <div :class="classes" v-if="showNav" v-bind="$attrs">
    <button
      :class="menuButtonClasses"
      id="toggle-menu"
      aria-controls="header-navigation"
      aria-label="Open menu"
      :aria-expanded="modelValue"
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
  emits: ['update:model-value'],
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
    const classes = computed((): string => {
      const classes = ['nhsuk-header__menu']

      if (!props.showSearch) {
        classes.push('nhsuk-header__menu--only')
      }

      return classes.join(' ')
    })

    const menuButtonClasses = computed((): string => {
      const classes = ['nhsuk-header__menu-toggle']

      if (props.modelValue) {
        classes.push('is-active')
      }

      return classes.join(' ')
    })

    function toggleNav(): void {
      context.emit('update:model-value', !props.modelValue)
    }

    return {classes, menuButtonClasses, toggleNav}
  }
})
</script>
