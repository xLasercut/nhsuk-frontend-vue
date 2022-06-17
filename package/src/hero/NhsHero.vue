<template>
  <section :class="sectionClass" :style="sectionStyle" v-bind="$attrs">
    <div class="nhsuk-hero__overlay" v-if="imageUrl">
      <div :class="widthContainerClass" v-if="heading">
        <div class="nhsuk-grid-row">
          <div class="nhsuk-grid-column-two-thirds">
            <div :class="heroContentClass">
              <h1 :class="headingClass">{{ heading }}</h1>
              <p class="nhsuk-body-l nhsuk-u-margin-bottom-0" v-if="text">{{ text }}</p>
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
            <h1 :class="headingClass">{{ heading }}</h1>
            <p class="nhsuk-body-l nhsuk-u-margin-bottom-0" v-if="text">{{ text }}</p>
            <span class="nhsuk-hero__arrow" aria-hidden="true" v-if="imageUrl"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { NhsHeroSectionStyle } from './interface';

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-hero',
  emits: [],
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
    const sectionClass = computed((): string => {
      const classes = ['nhsuk-hero'];

      if (props.heading && props.imageUrl) {
        classes.push('nhsuk-hero--image nhsuk-hero--image-description');
      } else if (props.imageUrl) {
        classes.push('nhsuk-hero--image');
      }

      return classes.join(' ');
    });

    const sectionStyle = computed((): NhsHeroSectionStyle => {
      const style: NhsHeroSectionStyle = {};

      if (props.imageUrl) {
        style['background-image'] = `url('${props.imageUrl}')`;
      }

      return style;
    });

    const widthContainerClass = computed((): string => {
      const classes = ['nhsuk-width-container'];

      if (!props.imageUrl) {
        classes.push('nhsuk-hero--border');
      }

      return classes.join(' ');
    });

    const heroContentClass = computed((): string => {
      if (props.imageUrl) {
        return 'nhsuk-hero-content';
      }
      return 'nhsuk-hero__wrapper';
    });

    const headingClass = computed((): string => {
      if (props.text) {
        return 'nhsuk-u-margin-bottom-3';
      }
      return '';
    });

    return { sectionClass, sectionStyle, widthContainerClass, heroContentClass, headingClass };
  }
});
</script>
