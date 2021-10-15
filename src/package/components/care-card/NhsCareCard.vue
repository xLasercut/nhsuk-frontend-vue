<template>
  <div :class="`nhsuk-care-card nhsuk-care-card--${type}`" v-bind="$attrs">
    <div class="nhsuk-care-card__heading-container">
      <heading-switcher :heading-level="headingLevel" class="nhsuk-care-card__heading">
        <span role="text">
          <span class="nhsuk-u-visually-hidden">{{hiddenText}}</span>
          {{heading}}
        </span>
      </heading-switcher>
      <span class="nhsuk-care-card__arrow" aria-hidden="true"></span>
    </div>
    <div class="nhsuk-care-card__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import HeadingSwitcher from '../../shared/HeadingSwitcher.vue'
import {defineComponent} from 'vue'

const TYPES = {
  'non-urgent': 'Non-urgent advice: ',
  'urgent': 'Urgent advice: ',
  'immediate': 'Immediate action required: '
}

export default defineComponent({
  name: 'NhsCareCard',
  inheritAttrs: false,
  props: {
    heading: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'non-urgent',
      validator(val) {
        return val in TYPES
      }
    },
    headingLevel: {
      type: Number,
      default: 3
    },
    hiddenText: {
      type: String,
      default(props) {
        return TYPES[props.type]
      }
    }
  },
  components: { HeadingSwitcher }
})
</script>

