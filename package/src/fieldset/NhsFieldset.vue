<template>
  <fieldset class="nhsuk-fieldset" v-bind="$attrs">
    <legend :class="classes" v-if="legend && pageHeading">
      <h1 class="nhsuk-fieldset__heading">
        <slot name="legend" :legend="legend">{{legend}}</slot>
      </h1>
    </legend>
    <legend :class="classes" v-if="legend && !pageHeading">
      <slot name="legend" :legend="legend">{{legend}}</slot>
    </legend>
    <slot></slot>
  </fieldset>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {NhsFieldsetSize} from './types'

const FIELDSET_SIZES: Array<NhsFieldsetSize> = [ 'xl', 'l', 'm' ]

export default defineComponent({
  name: 'nhs-fieldset',
  inheritAttrs: false,
  emits: [],
  props: {
    legend: {
      type: String
    },
    pageHeading: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    },
    size: {
      type: String as PropType<NhsFieldsetSize>,
      validator: (val: NhsFieldsetSize): boolean => {
        if (val) {
          return FIELDSET_SIZES.includes(val)
        }
        return true
      }
    }
  },
  setup(props) {
    const classes = computed((): string => {
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
