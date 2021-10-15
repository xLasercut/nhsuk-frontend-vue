<template>
  <div class="nhsuk-table__panel-with-heading-tab" v-bind="$attrs">
    <heading-switcher :heading-level="headingLevel" class="nhsuk-table__heading-tab">{{heading}}</heading-switcher>
    <table role="table" :class="classes">
      <slot></slot>
    </table>
  </div>
</template>

<script>
import HeadingSwitcher from '../../../shared/HeadingSwitcher.vue'
import {computed, defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    heading: {
      type: String
    },
    headingLevel: {
      type: Number,
      default: 3
    },
    responsive: {
      type: Boolean,
      default: true
    }
  },
  components: {
    HeadingSwitcher
  },
  setup(props) {
    const classes = computed(() => {
      if (props.responsive) {
        return 'nhsuk-table-responsive'
      }
      return 'nhsuk-table'
    })

    return {classes}
  }
})
</script>
