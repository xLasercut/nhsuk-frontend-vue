<template>
  <div class="nhsuk-warning-callout" v-bind="attributes">
    <heading-switcher class="nhsuk-warning-callout__label" :heading-level="headingLevel">
      <slot name="heading" :props="heading">{{heading}}</slot>
    </heading-switcher>
    <slot></slot>
  </div>
</template>

<script>
  import HeadingSwitcher from '../../shared/HeadingSwitcher.vue'

  export default {
    name: "NhsWarningCallout",
    components: {
      HeadingSwitcher
    },
    props: {
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      heading: {
        type: String,
        required: true
      },
      headingLevel: {
        type: Number,
        default: 3
      }
    }
  }
</script>