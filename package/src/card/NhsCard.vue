<template>
  <component :is="cardType" :href="href" :class="classes" v-bind="$attrs">
    <img class="nhsuk-card__img" :src="imgUrl" :alt="imgAlt" v-if="imgUrl">
    <div :class="contentClasses">
      <slot name="heading">
        <nhs-heading-switcher :heading-level="headingLevel" :class="headingClassesComputed">
          <nhs-link-switcher v-if="isHeadingLink" class="nhsuk-card__link" :href="href">{{ heading }}</nhs-link-switcher>
          <div v-else>{{heading}}</div>
        </nhs-heading-switcher>
      </slot>
      <slot name="description">
        <p class="nhsuk-card__description">
          {{description}}
        </p>
      </slot>
    </div>
  </component>
</template>

<script lang="ts">
import {NhsHeadingSwitcher} from '../shared/heading-switcher'
import {NhsLinkSwitcher} from '../shared/link-switcher'
import {computed, defineComponent, PropType} from 'vue'
import {NhsHeadingType} from '../shared/heading-switcher/types'
import NhsNormalCard from './types/NhsNormalCard.vue'
import NhsClickCard from './types/NhsClickCard.vue'

export default defineComponent({
  name: 'nhs-card',
  inheritAttrs: false,
  props: {
    clickable: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    },
    feature: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    },
    heading: {
      type: String,
      default: (): string => {
        return ''
      }
    },
    headingLevel: {
      type: Number as PropType<NhsHeadingType>,
      default: (): NhsHeadingType => {
        return 2
      }
    },
    imgUrl: {
      type: String,
      default: (): string => {
        return ''
      }
    },
    imgAlt: {
      type: String,
      default: (): string => {
        return ''
      }
    },
    href: {
      type: String,
      default: (): string => {
        return ''
      }
    },
    description: {
      type: String,
      default: (): string => {
        return ''
      }
    },
    headingClasses: {
      type: String,
      default: (): string => {
        return ''
      }
    }
  },
  components: {
    NhsHeadingSwitcher, NhsLinkSwitcher
  },
  setup(props) {
    const classes = computed((): string => {
      const classes = ['nhsuk-card']

      if (props.clickable) {
        classes.push('nhsuk-card--clickable')
      }

      if (props.feature) {
        classes.push('nhsuk-card--feature')
      }

      return classes.join(' ')
    })

    const contentClasses = computed((): string => {
      const classes = ['nhsuk-card__content']

      if (props.feature) {
        classes.push('nhsuk-card__content--feature')
      }

      return classes.join(' ')
    })

    const headingClassesComputed = computed((): string => {
      const classes = ['nhsuk-card__heading']

      if (props.feature) {
        classes.push('nhsuk-card__heading--feature')
      }

      if (props.headingClasses) {
        classes.push(props.headingClasses)
      }

      return classes.join(' ')
    })

    const isHeadingLink = computed((): boolean => {
      return Boolean(props.href) && !props.feature
    })

    const cardType = computed(() => {
      if (isHeadingLink && props.clickable) {
        return NhsClickCard
      }
      return NhsNormalCard
    })

    return {
      classes,
      contentClasses,
      headingClassesComputed,
      isHeadingLink,
      cardType
    }
  }
})
</script>
