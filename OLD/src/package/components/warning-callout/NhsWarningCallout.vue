<template>
  <div class="nhsuk-warning-callout" v-bind="$attrs">
    <heading-switcher class="nhsuk-warning-callout__label" :heading-level="headingLevel">
      <slot name="heading" :props="heading">
        {{showNormalHeading()}}
        <span role="text" v-if="!isHeadingContainsImportant()">
          <span class="nhsuk-u-visually-hidden">Important: </span>
          {{ heading }}
        </span>
      </slot>
    </heading-switcher>
    <slot></slot>
  </div>
</template>

<script>
import HeadingSwitcher from '../../shared/HeadingSwitcher.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsWarningCallout',
  components: { HeadingSwitcher },
  props: {
    heading: {
      type: String,
      required: true
    },
    headingLevel: {
      type: Number,
      default: 3
    }
  },
  setup(props) {
    function isHeadingContainsImportant() {
      return props.heading.toLowerCase().includes('important')
    }

    function showNormalHeading() {
      if (isHeadingContainsImportant()) {
        return props.heading
      }
      return ''
    }

    return {isHeadingContainsImportant, showNormalHeading}
  }
})
</script>
