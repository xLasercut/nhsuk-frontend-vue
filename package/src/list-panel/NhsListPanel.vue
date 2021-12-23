<template>
  <div class="nhsuk-list-panel" v-bind="$attrs">
    <nhs-heading-switcher :heading-level="headingLevel" class="nhsuk-list-panel__label" :id="id" v-if="label">
      {{label}}
    </nhs-heading-switcher>
    <div :class="classes" v-if="disabled">
      <p class="nhsuk-list-panel--results-items__no-results">{{message}}</p>
    </div>
    <ul :class="classes" v-if="!disabled">
      <slot></slot>
    </ul>
    <div class="nhsuk-back-to-top" v-if="backToTop">
      <nhs-link-switcher class="nhsuk-back-to-top__link" @click="$emit('back-to-top')" href="">
        <nhs-icon icon="arrow-right"></nhs-icon>
        Back to top
      </nhs-link-switcher>
    </div>
  </div>
</template>

<script lang="ts">
import {NhsHeadingSwitcher} from '../shared/heading-switcher'
import {NhsLinkSwitcher} from '../shared/link-switcher'
import NhsIcon from '../icon/NhsIcon.vue'
import {computed, defineComponent, PropType} from 'vue'
import {NhsHeadingType} from '../shared/heading-switcher/types'

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-list-panel',
  emits: ['back-to-top'],
  components: { NhsHeadingSwitcher, NhsLinkSwitcher, NhsIcon },
  props: {
    label: {
      type: String
    },
    id: {
      type: String
    },
    headingLevel: {
      type: Number as PropType<NhsHeadingType>,
      default: (): NhsHeadingType => {
        return 2
      }
    },
    disabled: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    },
    message: {
      type: String
    },
    backToTop: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    }
  },
  setup(props) {
    const classes = computed((): string => {
      const classes = [ 'nhsuk-list-panel__box' ]

      if (props.label) {
        classes.push('nhsuk-list-panel__box--with-label')
      }

      return classes.join(' ')
    })

    return {classes}
  }
})
</script>
