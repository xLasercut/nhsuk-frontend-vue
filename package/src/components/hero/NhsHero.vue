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
  export default {
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
    computed: {
      sectionClass() {
        var classes = [ 'nhsuk-hero' ]

        if (this.heading && this.imageUrl) {
          classes.push('nhsuk-hero--image nhsuk-hero--image-description')
        }
        else if (this.imageUrl) {
          classes.push('nhsuk-hero--image')
        }

        return classes.join(' ')
      },
      sectionStyle() {
        var style = {}

        if (this.imageUrl) {
          style['background-image'] = `url('${this.imageUrl}')`
        }

        return style
      },
      widthContainerClass() {
        var classes = [ 'nhsuk-width-container' ]

        if (!this.imageUrl) {
          classes.push('nhsuk-hero--border')
        }

        return classes.join(' ')
      },
      heroContentClass() {
        if (this.imageUrl) {
          return 'nhsuk-hero-content'
        }
        return 'nhsuk-hero__wrapper'
      },
      headingClass() {
        if (this.text) {
          return 'nhsuk-u-margin-bottom-3'
        }
        return ''
      }
    }
  }
</script>
