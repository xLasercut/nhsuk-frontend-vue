<template>
  <dl :class="classes" v-bind="$attrs">
    <div class="nhsuk-summary-list__row" v-for="(item, index) in data" :key="index">
      <slot name="item" :props="item"></slot>
    </div>
  </dl>
</template>

<script>
import {computed, defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsSummaryList',
  props: {
    data: {
      type: Array,
      required: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const classes = computed(() => {
      let classes = [ 'nhsuk-summary-list' ]

      if (!props.border) {
        classes.push('nhsuk-summary-list--no-border')
      }

      return classes.join(' ')
    })

    return {classes}
  }
})
</script>
