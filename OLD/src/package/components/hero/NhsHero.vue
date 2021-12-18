<template>
  <section :class="sectionClass" :style="sectionStyle" v-bind="$attrs">
    <div class="nhsuk-hero__overlay" v-if="imageUrl">
      <div :class="widthContainerClass" v-if="heading">
        <div class="nhsuk-grid-row">
          <div class="nhsuk-grid-column-two-thirds">
            <div :class="heroContentClass">
              <h1 :class="headingClass">{{heading}}</h1>
              <p class="nhsuk-body-l nhsuk-u-margin-bottom-0" v-if="text">{{text}}</p>
              <span class="nhsuk-hero__arrow" aria-hidden="true" v-if="imageUrl"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div :class="widthContainerClass" v-if="heading && !imageUrl">
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
          <div :class="heroContentClass">
            <h1 :class="headingClass">{{heading}}</h1>
            <p class="nhsuk-body-l nhsuk-u-margin-bottom-0" v-if="text">{{text}}</p>
            <span class="nhsuk-hero__arrow" aria-hidden="true" v-if="imageUrl"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {computed, defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsHero',
  props: {
    heading: {
      type: String
    },
    imageUrl: {
      type: String
    },
    text: {
      type: String
    }
  },
  setup(props) {
    const sectionClass = computed(() => {
      let classes = [ 'nhsuk-hero' ]

      if (props.heading && props.imageUrl) {
        classes.push('nhsuk-hero--image nhsuk-hero--image-description')
      }
      else if (props.imageUrl) {
        classes.push('nhsuk-hero--image')
      }

      return classes.join(' ')
    })

    const sectionStyle = computed(() => {
      let style = {}

      if (props.imageUrl) {
        style['background-image'] = `url('${this.imageUrl}')`
      }

      return style
    })

    const widthContainerClass = computed(() => {
      let classes = [ 'nhsuk-width-container' ]

      if (!props.imageUrl) {
        classes.push('nhsuk-hero--border')
      }

      return classes.join(' ')
    })

    const heroContentClass = computed(() => {
      if (props.imageUrl) {
        return 'nhsuk-hero-content'
      }
      return 'nhsuk-hero__wrapper'
    })

    const headingClass = computed(() => {
      if (props.text) {
        return 'nhsuk-u-margin-bottom-3'
      }
      return ''
    })

    return {sectionClass, sectionStyle, widthContainerClass, heroContentClass, headingClass}
  }
})
</script>
