<template>
  <fieldset class="nhsuk-fieldset" v-bind="$attrs">
    <legend :class="classes" v-if="legend && pageHeading">
      <h1 class="nhsuk-fieldset__heading">
        <slot name="legend" :props="legend">{{legend}}</slot>
      </h1>
    </legend>
    <legend :class="classes" v-if="legend && !pageHeading">
      <slot name="legend" :props="legend">{{legend}}</slot>
    </legend>
    <slot></slot>
  </fieldset>
</template>

<script>
import {computed, defineComponent} from 'vue'

const SIZES = [ 'xl', 'l', 'm' ]

export default defineComponent({
  name: 'NhsFieldset',
  inheritAttrs: false,
  props: {
    legend: {
      type: String
    },
    pageHeading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator(val) {
        if (val) {
          return SIZES.includes(val)
        }
        return true
      }
    }
  },
  setup(props) {
    const classes = computed(() => {
      let classes = [ 'nhsuk-fieldset__legend' ]

      if (props.size) {
        classes.push(`nhsuk-fieldset__legend--${props.size}`)
      }

      return classes.join(' ')
    })

    return {classes}
  }
})
</script>
