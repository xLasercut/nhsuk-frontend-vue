<template>
  <div class="nhsuk-promo" v-bind="attributes">
    <link-switcher class="nhsuk-promo__link-wrapper" :href="href">
      <img class="nhsuk-promo__img" :src="src" :alt="alt" v-if="src">
      <div class="nhsuk-promo__content">
        <heading-switcher :heading-level="headingLevel" class="nhsuk-promo__heading">
          {{heading}}
        </heading-switcher>
        <p class="nhsuk-promo__description">
          <slot></slot>
        </p>
      </div>
    </link-switcher>
  </div>
</template>

<script>
  import HeadingSwitcher from '../../shared/HeadingSwitcher.vue'
  import LinkSwitcher from '../../shared/LinkSwitcher.vue'

  export default {
    name: 'NhsPromo',
    components: {
      HeadingSwitcher,
      LinkSwitcher
    },
    props: {
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      headingLevel: {
        type: Number,
        default: 3
      },
      href: {
        type: String,
        required: true
      },
      src: {
        type: String,
        default: ''
      },
      alt: {
        type: String,
        default: ''
      },
      heading: {
        type: String,
        required: true
      }
    }
  }
</script>