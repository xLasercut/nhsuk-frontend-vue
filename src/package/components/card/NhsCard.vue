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

import Card from '../../../../node_modules/nhsuk-frontend/packages/components/card/card'
import {defineComponent, computed, onMounted} from 'vue'

export default defineComponent({
  name: 'NhsCard',
  inheritAttrs: false,
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
  setup(props) {
    const classes = computed(() => {
      let classes = ['nhsuk-card']

      if (props.clickable) {
        classes.push('nhsuk-card--clickable')
      }

      if (props.feature) {
        classes.push('nhsuk-card--feature')
      }

      return classes.join(' ')
    })

    const contentClasses = computed(() => {
      let classes = ['nhsuk-card__content']

      if (props.feature) {
        classes.push('nhsuk-card__content--feature')
      }

      return classes.join(' ')
    })

    const headingClassesComputed = computed(() => {
      let classes = ['nhsuk-card__heading']

      if (props.feature) {
        classes.push('nhsuk-card__heading--feature')
      }

      if (props.headingClasses) {
        classes.push(props.headingClasses)
      }

      return classes.join(' ')
    })

    onMounted(() => {
      Card()
    })

    return {classes, contentClasses, headingClassesComputed}
  }
})
</script>
