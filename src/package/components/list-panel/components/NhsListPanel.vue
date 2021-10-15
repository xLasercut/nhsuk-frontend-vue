<template>
  <div class="nhsuk-list-panel" v-bind="$attrs">
    <heading-switcher :heading-level="headingLevel" class="nhsuk-list-panel__label" :id="id" v-if="label">
      {{label}}
    </heading-switcher>
    <div :class="classes" v-if="disabled">
      <p class="nhsuk-list-panel--results-items__no-results">{{message}}</p>
    </div>
    <ul :class="classes" v-if="!disabled">
      <slot></slot>
    </ul>
    <div class="nhsuk-back-to-top" v-if="backToTop">
      <link-switcher class="nhsuk-back-to-top__link" @click="$emit('back-to-top')" href="">
        <nhs-icon icon="arrow-right"></nhs-icon>
        Back to top
      </link-switcher>
    </div>
  </div>
</template>

<script>
import HeadingSwitcher from '../../../shared/HeadingSwitcher.vue'
import LinkSwitcher from '../../../shared/LinkSwitcher.vue'
import NhsIcon from '../../icon/NhsIcon.vue'
import {computed, defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsListPanel',
  components: { HeadingSwitcher, LinkSwitcher, NhsIcon },
  props: {
    label: {
      type: String
    },
    id: {
      type: String
    },
    headingLevel: {
      type: Number,
      default: 2
    },
    disabled: {
      type: Boolean,
      default: false
    },
    message: {
      type: String
    },
    backToTop: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const classes = computed(() => {
      let classes = [ 'nhsuk-list-panel__box' ]

      if (props.label) {
        classes.push('nhsuk-list-panel__box--with-label')
      }

      return classes.join(' ')
    })

    return {classes}
  }
})
</script>
