<template>
  <link-switcher class="nhsuk-header__link" :href="homeHref" :aria-label="ariaLabel">
    <img class="nhsuk-org-logo" :src="organisation.logoURL" alt=""  v-if="organisation.logoURL"/>

    <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16" v-if="!organisation.logoURL">
      <path class="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
      <path class="nhsuk-logo__text" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
      <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
    </svg>
    <span class="nhsuk-organisation-name" v-if="!organisation.logoURL">
      {{ organisation.name }}
      <span class="nhsuk-organisation-name-split" v-if="organisation.split">
        {{ organisation.split }}
      </span>
    </span>
    <span class="nhsuk-organisation-descriptor" v-if="!organisation.logoURL && organisation.descriptor">
      {{ organisation.descriptor }}
    </span>
  </link-switcher>
</template>

<script>
  import LinkSwitcher from '../../../../shared/LinkSwitcher.vue'

  export default {
    components: { LinkSwitcher },
    props: {
      homeHref: {
        type: String,
        required: true
      },
      organisation: {
        required: true
      }
    },
    computed: {
      ariaLabel() {
        var labels = []

        const name = this.organisation.name
        const split = this.organisation.split
        const descriptor = this.organisation.descriptor

        if (name) {
          labels.push(name)
        }

        if (split) {
          labels.push(split)
        }

        if (descriptor) {
          labels.push(descriptor)
        }

        labels.push('homepage')

        return labels.join(' ')
      }
    }
  }
</script>