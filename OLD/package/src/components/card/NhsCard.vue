<template>
  <div :class="classes" v-bind="$attrs">
    <img class="nhsuk-card__img" :src="imgUrl" :alt="imgAlt" v-if="imgUrl">
    <div :class="contentClasses">
      <slot name="heading">
        <heading-switcher :heading-level="headingLevel" :class="headingClassesComputed">
          <a v-if="href && !feature" class="nhsuk-card__link" :href="href">{{ heading }}</a>
          <div v-else>{{heading}}</div>
        </heading-switcher>
      </slot>
      <slot name="description">
        <p class="nhsuk-card__description">
          {{description}}
        </p>
      </slot>
    </div>
  </div>
</template>

<script>
import HeadingSwitcher from '../../shared/HeadingSwitcher.vue'

import Card from '../../../node_modules/nhsuk-frontend/packages/components/card/card'

export default {
  name: 'NhsCard',
  props: {
    clickable: {
      type: Boolean,
      default: false
    },
    feature: {
      type: Boolean,
      default: false
    },
    heading: {
      type: String,
      default: ''
    },
    headingLevel: {
      type: Number,
      default: 2
    },
    imgUrl: {
      type: String,
      default: ''
    },
    imgAlt: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    headingClasses: {
      type: String,
      default: ''
    }
  },
  components: {
    HeadingSwitcher
  },
  computed: {
    classes() {
      let classes = ['nhsuk-card']

      if (this.clickable) {
        classes.push('nhsuk-card--clickable')
      }

      if (this.feature) {
        classes.push('nhsuk-card--feature')
      }

      return classes.join(' ')
    },
    contentClasses() {
      let classes = ['nhsuk-card__content']

      if (this.feature) {
        classes.push('nhsuk-card__content--feature')
      }

      return classes.join(' ')
    },
    headingClassesComputed() {
      let classes = ['nhsuk-card__heading']

      if (this.feature) {
        classes.push('nhsuk-card__heading--feature')
      }

      if (this.headingClasses) {
        classes.push(this.headingClasses)
      }

      return classes.join(' ')
    }
  },
  mounted() {
    Card()
  }
}
</script>
