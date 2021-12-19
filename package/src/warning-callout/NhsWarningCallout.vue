<template>
  <div class="nhsuk-warning-callout" v-bind="$attrs">
    <nhs-heading-switcher class="nhsuk-warning-callout__label" :heading-level="headingLevel">
      <slot name="heading" :props="heading">
        {{showNormalHeading()}}
        <span role="text" v-if="!isHeadingContainsImportant()">
          <span class="nhsuk-u-visually-hidden">Important: </span>
          {{ heading }}
        </span>
      </slot>
    </nhs-heading-switcher>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {NhsHeadingSwitcher} from '../shared/heading-switcher'
import {defineComponent, PropType} from 'vue'
import {NhsHeadingType} from '../shared/heading-switcher/types'

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-warning-callout',
  components: { NhsHeadingSwitcher },
  props: {
    heading: {
      type: String,
      required: true
    },
    headingLevel: {
      type: Number as PropType<NhsHeadingType>,
      default: (): NhsHeadingType => {
        return 3
      }
    }
  },
  setup(props) {
    function isHeadingContainsImportant(): boolean {
      return props.heading.toLowerCase().includes('important')
    }

    function showNormalHeading(): string {
      if (isHeadingContainsImportant()) {
        return props.heading
      }
      return ''
    }

    return {isHeadingContainsImportant, showNormalHeading}
  }
})
</script>
