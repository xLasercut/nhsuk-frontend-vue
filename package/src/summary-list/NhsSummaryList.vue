<template>
  <dl :class="classes" v-bind="$attrs">
    <div class="nhsuk-summary-list__row" v-for="(item, index) in data" :key="index">
      <slot name="item" :props="item"></slot>
    </div>
  </dl>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-summary-list',
  props: {
    data: {
      type: Array,
      required: true
    },
    border: {
      type: Boolean,
      default: (): boolean => {
        return true
      }
    }
  },
  setup(props) {
    const classes = computed((): string => {
      const classes = [ 'nhsuk-summary-list' ]

      if (!props.border) {
        classes.push('nhsuk-summary-list--no-border')
      }

      return classes.join(' ')
    })

    return {classes}
  }
})
</script>
