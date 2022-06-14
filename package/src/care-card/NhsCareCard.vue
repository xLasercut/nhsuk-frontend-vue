<template>
  <div :class="`nhsuk-card nhsuk-card--care nhsuk-card--care--${type}`" v-bind="$attrs">
    <div class="nhsuk-card--care__heading-container">
      <nhs-heading-switcher :heading-level="headingLevel" class="nhsuk-card--care__heading">
        <span role="text">
          <span class="nhsuk-u-visually-hidden">{{ accessibilityText }}</span>
          {{ heading }}
        </span>
      </nhs-heading-switcher>
      <span class="nhsuk-card--care__arrow" aria-hidden="true"></span>
    </div>
    <div class="nhsuk-card__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { NhsHeadingSwitcher } from '../shared/heading-switcher'
import { computed, defineComponent, PropType } from 'vue'
import { NhsCareCardType } from './types'
import { NhsHeadingType } from '../shared/heading-switcher/types'

const CARE_CARD_TYPES = {
  'non-urgent': 'Non-urgent advice: ',
  urgent: 'Urgent advice: ',
  emergency: 'Immediate action required: '
}

export default defineComponent({
  name: 'nhs-care-card',
  inheritAttrs: false,
  emits: [],
  props: {
    heading: {
      type: String,
      required: true
    },
    type: {
      type: String as PropType<NhsCareCardType>,
      default: (): NhsCareCardType => {
        return 'non-urgent'
      },
      validator: (val: NhsCareCardType): boolean => {
        return val in CARE_CARD_TYPES
      }
    },
    headingLevel: {
      type: Number as PropType<NhsHeadingType>,
      default: (): NhsHeadingType => {
        return 3
      }
    },
    hiddenText: {
      type: String,
      default: (): string => {
        return ''
      }
    }
  },
  components: { NhsHeadingSwitcher },
  setup(props) {
    const accessibilityText = computed((): string => {
      if (props.hiddenText) {
        return props.hiddenText
      }
      return CARE_CARD_TYPES[props.type]
    })

    return { accessibilityText }
  }
})
</script>
