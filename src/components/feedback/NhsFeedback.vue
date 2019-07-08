<template>
  <div class="nhsuk-feedback-banner" id="nhsuk-feedback-banner" v-bind="$attrs">
    <div class="nhsuk-width-container">
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-full">
          <div class="nhsuk-feedback-banner__content">
            <h2 class="nhsuk-feedback-banner__heading">{{title}}</h2>
            <p class="nhsuk-feedback-banner__message">
              <slot></slot>
              <link-switcher class="nhsuk-u-nowrap" :href="href" v-if="label && href">{{label}}</link-switcher>
            </p>
            <button class="nhsuk-feedback-banner__close" id="nhsuk-feedback-banner-close" type="button">
              Close
              <span class="nhsuk-u-visually-hidden">{{hiddenText}}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LinkSwitcher from '../../shared/LinkSwitcher.vue'
  import nhsukFeedbackBanner from '../../../node_modules/nhsuk-frontend/packages/components/feedback-banner/feedback-banner'

  export default {
    name: 'NhsFeedback',
    components: { LinkSwitcher },
    props: {
      title: {
        type: String,
        required: true
      },
      label: {
        type: String
      },
      href: {
        type: String
      },
      hiddenText: {
        type: String,
        default: ' feedback invite'
      },
      delay: {
        type: Number,
        default: 3000
      }
    },
    mounted() {
      nhsukFeedbackBanner(this.delay)
    }
  }
</script>